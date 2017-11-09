const request = require('request-promise');
const config = require('../../config/config');
const HttpSend = require('../utils/http.util');
const redisClient = require('../../config/redis')(1);
const constants = require('../../config/constants');
const Model = require('../models/index');
const redisUtil = require('../utils/redis.util');
const signatureUtil = require('../utils/signature.util');
const moment = require('moment');

// 商城首页
exports.index = (req, res, next) => {
  const httpUtil = new HttpSend(req, res);
  // 查询分类
  const getCategories = async () => {
    try {
      const options = {
        uri: `${config.shopServerConfig.host}:${config.shopServerConfig.port}/v1/categories`,
        json: true,
      };

      const repos = await request(options);
      if (repos.success !== true) {
        throw new Error('商城数据获取失败！');
      } else {
        return repos.data;
      }
    } catch (err) {
      throw err;
    }
  };

  // 查询热销列表
  const getHotProductList = () => {

  };

  const mainFunction = async () => {
    try {
      const [categories, hotProductList] = await Promise.all([
        getCategories(),
        getHotProductList(),
      ]);

      httpUtil.render('index', { categories, hotProductList });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
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

// 商城  根据分类查询商品列表
exports.searchProductByCategory = (req, res, next) => {
  const categoryId = req.query.categoryId || 0;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const httpUtil = new HttpSend(req, res);

  if (!categoryId) {
    const err = new Error('参数有误');
    next(err);
    return;
  }

  const mainFunction = async () => {
    try {
      const productList = await searchProductsWithCondition(categoryId, '', page, limit);
      httpUtil.render('index', { categoryId, productList });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 商城  根据商品唯一id查询详细
exports.searchProductById = (req, res, next) => {
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
        uri: `${config.shopServerConfig.host}:${config.shopServerConfig.port}/v1/prodcut/${productId}`,
        json: true,
      };

      const repos = await request(options);
      if (repos.success !== true) {
        throw new Error('商城数据获取失败');
      }

      if (!repos.data) {
        throw new Error('商品不存在');
      }

      httpUtil.render('index', { productDetails: repos.data.product });
    } catch (err) {
      console.log(err);
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
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};

// 商城  增加商品PV UV记录
const addViewLogByProductId = async (productInfo, viewerInfo, shareUserId) => {
  // 如果有分享者，先查询分享者信息
  const shareInfo = {
    shareId: shareUserId,
    shareName: '',
    sharePhone: '',
  };
  if (shareInfo.shareId) {
    const data = await Model.User.findOne({ where: { userId: shareUserId } });
    if (!data || !data.dataValues) {
      shareInfo.shareId = '';
    } else {
      shareInfo.shareName = data.dataValues.userName;
      shareInfo.shareOpenId = data.dataValues.openId;
    }
  } else if (shareUserId === viewerInfo.userId) {
    shareInfo.shareName = viewerInfo.userName;
    shareInfo.shareOpenId = viewerInfo.openId;
  }

  Model.sequelize.transaction(async (transaction) => {
    await Model.PVProducts.create({
      productId: productInfo.productId,
      categoryId: productInfo.categoryId,
      name: productInfo.name,
      description: productInfo.description,
      price: productInfo.price,
      soldCount: productInfo.soldCount,
      viewerId: viewerInfo.userId,
      viewerName: viewerInfo.userName,
      viewerOpenId: viewerInfo.openId,
      shareId: shareInfo.shareId,
      shareName: shareInfo.shareName,
      shareOpenId: shareInfo.shareOpenId,
    }, { transaction });

    /** ************************************更新浏览记录相关redis数据************************************* */
    const today = moment().format('YYYYMMDD');
    // 用户 传播浏览所有记录
    const productUvKey = redisUtil.getRedisPrefix(9, `${shareInfo.shareId}:date_${today}`);

    // 更新 分享者热门商品PV日榜、总榜
    const pvProductKey = redisUtil.getRedisPrefix(7, shareInfo.shareId);
    const pvProductKeyToday = redisUtil.getRedisPrefix(7, `${shareInfo.shareId}:date_${today}`);
    const productInfoKey = redisUtil.getRedisPrefix(12);
    const productBrief = { productName: productInfo.name, price: productInfo.price };

    // 指定商品所有浏览人记录
    const pvProductsLogKey = redisUtil.getRedisPrefix(19, productInfo.id);
    // 用户转发指定商品后的浏览人记录
    const pvUserProductLogKey = redisUtil.getRedisPrefix(20, `${productInfo.id}:uid_${shareInfo.shareId}`);
    const pvUserProductLogKeyToday = redisUtil.getRedisPrefix(20, `${productInfo.id}:uid_${shareInfo.shareId}:date_${today}`);

    // 鉴于multi并不会产生回滚，所以一旦exec出错  还是有错误数据会+1
    let updateRedis = [];
    let userProductPVNum = 0;
    let userProductPVTodayNum = 0;
    if (shareInfo.shareId) {
      updateRedis = await redisClient.multi()
        .zincrby(pvProductKey, 1, productInfo.id)
        .zincrby(pvProductKeyToday, 1, productInfo.id)
        .hset(productInfoKey, 1, JSON.stringify(productBrief))
        .hincrby(pvProductsLogKey, viewerInfo.userId, 1)
        .hincrby(pvUserProductLogKey, viewerInfo.userId, 1)
        .hincrby(pvUserProductLogKeyToday, viewerInfo.userId, 1)
        .hincrby(productUvKey, viewerInfo.userId, 1)
        .execAsync();
      userProductPVNum = parseInt(updateRedis[4], 0);
      userProductPVTodayNum = parseInt(updateRedis[5], 0);
    } else {
      await redisClient.multi().hincrby(pvProductsLogKey, viewerInfo.userId, 1).execAsync();
    }


    /** *********************如果有分享者，且被分享人第一次点入，计入分享者热门商品UV日榜、总榜******************* */
    if (shareInfo.shareId && userProductPVNum === 1) {
      const uvUserKey = redisUtil.getRedisPrefix(8, shareInfo.shareId);
      await redisClient.zincrbyAsync(uvUserKey, 1, productInfo.id);
    }
    if (shareInfo.shareId && userProductPVTodayNum === 1) {
      const uvUserKeyToday = redisUtil.getRedisPrefix(8, `${shareInfo.shareId}:date_${today}`);
      await redisClient.zincrbyAsync(uvUserKeyToday, 1, productInfo.id);
    }
  }).catch((err) => {
    // Rolled back
    console.log(err);
  });
};

// 跳转至购买链接
exports.redirectToShopServer = (req, res, next) => {
  const productId = req.query.productId || 0;
  const shareUserId = req.query.shareUserId || '';
  const userId = req.session.user ? req.session.user.userId : '';

  const mainFunction = async () => {
    try {
      // 检验商品存在性
      const options = {
        uri: `${config.shopServerConfig.host}:${config.shopServerConfig.port}/v1/prodcut/${productId}`,
        json: true,
      };

      const repos = await request(options);
      if (repos.success !== true || !repos.data) {
        throw new Error('商城数据获取失败');
      }

      //  记录pv日志
      await addViewLogByProductId(repos.data.product, req.session.user, shareUserId);

      // 跳转至商城服务器的购买相关页面
      const url = `${config.shopServerConfig.host}:${config.shopServerConfig.port}/shop
      ?userId=${userId}&shareId=${shareUserId}&productId=${productId}`;
      res.redirect(encodeURI(url));
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 记录购买链接
exports.addPurchaseRecord = (req, res) => {
  const productId = req.body.productId || 0;
  const productName = req.body.productName || 0;
  const orderId = req.body.orderId || '';
  const shareUserId = req.body.shareId || '';
  const userId = req.body.userId || '';
  const totalPrice = parseFloat(req.body.totalPrice) || 0;
  const timestamp = req.body.timestamp || 0;
  const signature = req.body.signature || '';
  const now = Date.now();
  const resUtil = new HttpSend(req, res);

  // 计算签名 检验参数是否来自合法源
  const signatureInfo = signatureUtil.genSignature({
    productId,
    productName,
    orderId,
    shareUserId,
    userId,
    totalPrice,
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

  if (totalPrice <= 0) {
    resUtil.sendJson(constants.HTTP_SUCCESS);
    return;
  }

  const mainFunction = async () => {
    try {
      Model.sequelize.transaction(async (transaction) => {
        // redis记录总佣金数、下单数、下单用户数
        const date = moment().format('YYYYMMDD');
        const orderRecordKey = redisUtil.getRedisPrefix(10, `${shareUserId}:date_${date}`);
        const commissionKey = redisUtil.getRedisPrefix(6);
        const updateRedis = await redisClient.multi()
          .hincrby(commissionKey, shareUserId, totalPrice)
          .hincrby(orderRecordKey, userId, 1)
          .execAsync();
        if (!updateRedis.length) {
          throw new Error('更新失败');
        }

        // 增加佣金流水记录
        await Model.Commission.create({
          shareId: shareUserId,
          viewerId: userId,
          orderId,
          productId,
          productName,
          operator: 1,
          operatorResult: 1,
          changeNum: totalPrice,
          totalCommission: updateRedis[0],
        }, { transaction });
      }).then(() => resUtil.sendJson(constants.HTTP_SUCCESS));
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统出错');
    }
  };

  mainFunction();
};
