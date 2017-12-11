const request = require('request-promise');
const config = require('../../config/config');
const HttpSend = require('../utils/http.util');
const redisClient = require('../../config/redis')(1);
const globalClient = require('../../config/redis')(3);
const constants = require('../../config/constants');
const Model = require('../models/index');
const redisUtil = require('../utils/redis.util');
const signatureUtil = require('../utils/signature.util');
const moment = require('moment');
const logger = require('../utils/log.util').getLogger(constants.LOGGER_LEVEL);

// 查询商品列表
const getProductsList = async (page = 1) => {
  const options = {
    uri: `${config.shopServerConfig.host}:${config.shopServerConfig.port}/api/spu`,
    qs: { page },
    json: true,
  };

  const repos = await request(options);
  if (!repos) {
    throw new Error('商城数据获取失败！');
  } else {
    const rtnData = {
      productList: repos.data || [],
      currentPage: repos.meta.current_page,
      lastPage: repos.meta.last_page,
      firstPage: repos.meta.from,
      perPage: repos.meta.per_page,
    };
    return rtnData;
  }
};

// 根据条件 查询商品列表
const searchProductsWithCondition = async (categoryId = 0, searchWord = '', page = 1, limit = 10) => {
  try {
    const condition = { page, limit };
    if (categoryId) {
      condition['category-id'] = categoryId;
    }
    if (searchWord) {
      condition['search-word'] = searchWord;
    }

    const options = {
      uri: `${config.shopServerConfig.host}:${config.shopServerConfig.port}/v1/prodcuts`,
      qs: condition,
      json: true,
    };

    const repos = await request(options);
    if (repos.success !== true) {
      throw new Error('商城数据获取失败');
    }

    return repos.data;
  } catch (err) {
    throw err;
  }
};

// 商城  增加商品PV UV记录
const addViewLogByProductId = async (productInfo, viewerInfo, shareUserId = '') => {
  // 如果有分享者，先查询分享者信息
  const shareInfo = {
    shareId: shareUserId,
    shareName: '',
    sharePhone: '',
  };
  if (shareInfo.shareId) {
    if (shareInfo.shareId === viewerInfo.userId) {
      shareInfo.shareName = viewerInfo.userName;
      shareInfo.shareHeadImg = viewerInfo.headImgUrl;
    } else {
      const data = await Model.User.findOne({ where: { userId: shareInfo.shareId } });
      if (!data || !data.dataValues) {
        shareInfo.shareId = '';
      } else {
        shareInfo.shareName = data.dataValues.userName;
        shareInfo.shareHeadImg = data.dataValues.headImgUrl;
      }
    }
  }

  Model.sequelize.transaction(async (transaction) => {
    await Model.PVProducts.create({
      productId: productInfo.id,
      categoryId: productInfo.statistic_category_id,
      name: productInfo.name,
      description: productInfo.description,
      price: productInfo.shown_price,
      soldCount: productInfo.sold_count,
      viewerId: viewerInfo.userId,
      viewerName: viewerInfo.userName,
      viewerHeadImg: viewerInfo.headImgUrl,
      shareId: shareInfo.shareId,
      shareName: shareInfo.shareName,
      shareHeadImg: shareInfo.shareHeadImg,
    }, { transaction });

    /** ************************************更新浏览记录相关redis数据************************************* */
    const today = moment().format('YYYYMMDD');
    // 用户当日分享所有商品的浏览人记录（首页统计pv uv使用）
    const productUvKey = redisUtil.getRedisPrefix(9, `${shareInfo.shareId}:${today}`);

    const shareTypeKey = redisUtil.getRedisPrefix(24, `${shareInfo.shareId}:${today}`);
    const sharePdtKey = redisUtil.getRedisPrefix(23, `${shareInfo.shareId}:${today}`);
    const productBriefKey = redisUtil.getRedisPrefix(12);

    // 指定商品所有浏览人记录（后期如果加积分，仅在第一次浏览时增加）
    // const pvProductsLogKey = redisUtil.getRedisPrefix(19, productInfo.id);
    // 用户分享指定商品后的浏览人记录 （后期如果加积分，仅在分享后第一次浏览时增加）
    // const pvUserProductLogKey = redisUtil.getRedisPrefix(20, `${productInfo.id}:${shareInfo.shareId}`);


    if (shareInfo.shareId) {
      await redisClient.multi()
      // .hincrby(pvProductsLogKey, viewerInfo.userId, 1)
      // .hincrby(pvUserProductLogKey, viewerInfo.userId, 1)
        .hincrby(productUvKey, viewerInfo.userId, 1)
        .zincrby(shareTypeKey, 1, productInfo.statistic_category_id)
        .zincrby(`${sharePdtKey}:all`, 1, productInfo.id)
        // .zincrby(`${sharePdtKey}:${productInfo.statistic_category_id}`, 1, productInfo.id)
        //  目前前端根据标签自己排序，所以这里暂时注释
        .hset(
          productBriefKey,
          productInfo.id,
          JSON.stringify({
            name: productInfo.name,
            price: productInfo.shown_price,
            cat: productInfo.statistic_category_id,
          }),
        )
        .execAsync();
    } else {
      // await redisClient.multi().hincrby(pvProductsLogKey, viewerInfo.userId, 1).execAsync();
    }
  }).catch((err) => {
    // Rolled back
    logger.info(err);
  });
};

// 商城首页
exports.index = (req, res, next) => {
  const httpUtil = new HttpSend(req, res);

  const mainFunction = async () => {
    try {
      const productList = await getProductsList();

      httpUtil.render('index', { productList });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};


// 进入商品详情页
exports.getDetailsById = (req, res, next) => {
  const productId = req.params.productId || 0;
  const httpUtil = new HttpSend(req, res);

  if (!productId) {
    const err = new Error('参数有误');
    next(err);
    return;
  }

  const mainFunction = async () => {
    try {
      const options = {
        uri: `${config.shopServerConfig.host}:${config.shopServerConfig.port}/api/spu/${productId}`,
        json: true,
      };

      const repos = await request(options);
      if (!repos || !repos.data) {
        throw new Error('商城数据获取失败');
      }

      // 异步记录商品类别信息，供首页数据分析显示使用
      const briefClassKey = redisUtil.getRedisPrefix(26);
      redisClient.hsetAsync(
        briefClassKey,
        repos.data.statistic_category.id,
        repos.data.statistic_category.name,
      );

      //  异步记录pv日志
      addViewLogByProductId(repos.data, req.session.user, '');

      const shareLink = encodeURI(`${config.serverHost}/mall/purchase?shareId=${req.session.user.userId}&&productId=${productId}`);
      httpUtil.render('index', { productDetails: repos.data, shareLink });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 商城  商品搜索框
exports.searchProduct = (req, res) => {
  const categoryId = req.query.categoryId || 0;
  const searchWord = req.query.searchWord || '';
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const resUtil = new HttpSend(req, res);

  const mainFunction = async () => {
    try {
      const productList = await searchProductsWithCondition(categoryId, searchWord, page, limit);
      resUtil.sendJson(constants.HTTP_SUCCESS, '', { productList });
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};

// 跳转至购买链接
exports.redirectToShopServer = (req, res, next) => {
  const productId = req.query.productId || 0;
  const shareId = req.query.shareId || '';

  const mainFunction = async () => {
    try {
      const options = {
        uri: `${config.shopServerConfig.host}:${config.shopServerConfig.port}/api/spu/${productId}`,
        json: true,
      };

      const repos = await request(options);
      if (!repos) {
        throw new Error('分享的商品已经不存在了');
      }

      //  异步记录pv日志
      addViewLogByProductId(repos.data, req.session.user, shareId);

      // 跳转至商城服务器的购买相关页面
      const url = `${config.shopServerConfig.host}:${config.shopServerConfig.port}/goods/${productId}?shareId=${shareId}`;
      res.redirect(encodeURI(url));
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 记录购买链接
exports.addPurchaseRecord = (req, res) => {
  const productInfos = req.body.productInfos || '';
  const productList = JSON.parse(productInfos);
  const orderId = req.body.orderId || '';
  const shareUserId = req.body.shareUserId || '';
  const userId = req.body.userId || '';
  const totalCommission = parseFloat(req.body.totalCommission) || 0;
  const timestamp = req.body.timestamp || '0';
  const signature = req.body.signature || '';
  const now = Date.now();
  const resUtil = new HttpSend(req, res);

  // 检查参数
  if (!productList.length || !orderId || !shareUserId || !userId ||
    !timestamp || !signature || totalCommission <= 0) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数不能为空');
    return;
  }

  // 计算签名 检验参数是否来自合法源
  const signatureInfo = signatureUtil.genSignature({
    productInfos: productList,
    orderId,
    shareUserId,
    userId,
    totalCommission,
    timestamp,
  }, config.shopServerConfig.privateKey);

  if (signature !== signatureInfo.signature) {
    resUtil.sendJson(104, '签名错误');
    return;
  }

  if (timestamp < now - (5 * 60 * 1000) || timestamp > now) {
    resUtil.sendJson(408, '请求已经超时');
    return;
  }

  Model.sequelize.transaction(async (transaction) => {
    // 检查是否为重复提交的请求
    const uniqueKey = redisUtil.getRedisPrefix(27);
    const requestNum = await redisClient.hincrbyAsync(uniqueKey, orderId, 1);
    if (parseInt(requestNum, 0) !== 1) {
      throw new Error(`请求已经重复提交${requestNum}次！`);
    }

    // redis记录总佣金数、下单数、下单用户数
    const commissionKey = redisUtil.getRedisPrefix(6);
    const updateRedis = await globalClient.hincrbyfloatAsync(
      commissionKey,
      shareUserId,
      totalCommission,
    );
    if (!updateRedis) {
      throw new Error('更新佣金失败');
    }

    // redis记录当日购买用户排行
    const date = moment().format('YYYYMMDD');
    const orderRecordKey = redisUtil.getRedisPrefix(10, `${shareUserId}:${date}`);
    const result = await redisClient.hincrbyAsync(orderRecordKey, userId, 1);
    if (!result) {
      throw new Error('更新订单记录失败');
    }

    // 根据商品的不同分类，加入到不同的排行榜中
    const bulkData = []; // 批量插入mysql

    const productRankKey = redisUtil.getRedisPrefix(7, `${shareUserId}:${date}`);
    const typeRankKey = redisUtil.getRedisPrefix(8, `${shareUserId}:${date}`);
    const briefKey = redisUtil.getRedisPrefix(12);
    for (let i = 0; i < productList.length; i += 1) {
      const categoryId = productList[i].categoryId || 0;
      const productId = productList[i].productId || 0;
      const productName = productList[i].productName || '';
      const num = parseInt(productList[i].num, 0) || 0;
      const price = parseFloat(productList[i].price) || 0;
      const commission = parseFloat(productList[i].commission) || 0;
      const productJsonInfo = JSON.stringify({ name: productName, price, cat: categoryId });
      bulkData.push({
        shareId: shareUserId,
        viewerId: userId,
        orderId,
        productId,
        categoryId,
        productName,
        num,
        price,
        commission,
      });
      redisClient.multi()
        .zincrby(`${productRankKey}:all`, num, productId)
        .zincrby(`${productRankKey}:${categoryId}`, num, productId)
        .zincrby(typeRankKey, num, categoryId)
        .hset(briefKey, productId, productJsonInfo)
        .execAsync();
    }

    // 增加多条商品分类记录
    await Model.ProductPurchase.bulkCreate(bulkData, { transaction });

    // 增加佣金流水记录
    await Model.Commission.create({
      shareId: shareUserId,
      viewerId: userId,
      orderId,
      operator: 1,
      operatorResult: 1,
      changeNum: totalCommission,
      totalCommission: updateRedis,
    }, { transaction });
  }).then(() => {
    resUtil.sendJson(constants.HTTP_SUCCESS);
  }).catch((err) => {
    // Rolled back
    logger.info(err);
    const errMsg = err.message || '系统出错';
    resUtil.sendJson(constants.HTTP_FAIL, errMsg);
  });
};
