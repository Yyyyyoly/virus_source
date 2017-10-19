const request = require('request-promise');
const config = require('../../config/config');
const HttpSend = require('../utils/http.util');
const redisClient = require('../../config/redis')(1);
const constants = require('../../config/constants');
const newsController = require('./news.controller');
const Model = require('../models/index');
const redisUtil = require('../utils/redis.util');
const signatureUtil = require('../utils/signature.util');
const moment = require('moment');

// 商城首页
exports.index = (req, res, next) => {
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

      res.render('index', { categories, hotProductList });
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
  const categoryId = req.params.categoryId || 0;

  if (!categoryId) {
    const err = new Error('参数有误');
    next(err);
  }

  const mainFunction = async () => {
    try {
      const productList = await searchProductsWithCondition(categoryId);
      res.render('index', { categoryId, productList });
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

  if (!productId) {
    const err = new Error('参数有误');
    next(err);
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

      res.render('index', { productDetails: repos.data.product });
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
  const resUtil = new HttpSend(req, res);

  const mainFunction = async () => {
    try {
      const productList = await searchProductsWithCondition(categoryId, searchWord);
      resUtil.sendJson(constants.HTTP_SUCCESS, '', { productList });
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};

// 商城  增加商品PV UV记录
const incPVById = async (productInfo, viewerInfo, shareUserId, channel) => {
  // 如果有分享者，先查询分享者信息
  const shareInfo = {
    shareId: shareUserId,
    shareName: '',
    sharePhone: '',
  };
  if (shareUserId !== 0 && shareUserId !== viewerInfo.userId) {
    const data = await Model.User.findOne({ where: { userId: shareUserId } });
    if (!data || !data.dataValues) {
      shareInfo.shareId = 0;
    } else {
      shareInfo.shareName = data.dataValues.userName;
      shareInfo.shareOpenId = data.dataValues.openId;
    }
  }

  Model.sequelize.transaction(async (transaction) => {
    const updateMysql = await Model.PVProducts.create({
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
      shareChannel: channel,
    }, { transaction });
    if (updateMysql && updateMysql.dataValues) {
      if (shareInfo.shareId !== 0) {
        // 更新个人 分享商品总pv排行榜
        const pvUserKey = redisUtil.getRedisPrefix(7, shareInfo.shareId);
        const productInfoKey = redisUtil.getRedisPrefix(12);
        const productBrief = { productName: productInfo.name, price: productInfo.price };
        // 更新个人  分享商品的渠道排行榜
        const channelUserKey = redisUtil.getRedisPrefix(8, shareInfo.shareId);
        // 更新个人  当日分享所有的总浏览uv pv
        const today = moment().format('YYYYMMDD');
        const uvKey = redisUtil.getRedisPrefix(9, `${shareInfo.shareId}:date_${today}`);

        const updateRedis = await redisClient.multi()
          .zincrby(pvUserKey, 1, productInfo.id)
          .hset(productInfoKey, 1, JSON.stringify(productBrief))
          .zincrby(channelUserKey, 1, channel)
          .hincrby(uvKey, viewerInfo.userId, 1)
          .execAsync();

        if (!updateRedis.length) {
          throw new Error('redis update failed');
        }
      }
    }
  }).catch((err) => {
    // Rolled back
    console.log(err);
  });
};

// 跳转至购买链接
exports.redirectToShopServer = (req, res, next) => {
  const productId = req.query.productId || 0;
  const channel = new HttpSend(req, res).getChannel(req);
  const shareUserId = req.query.shareUserId || 0;

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
      const viewerInfo = req.session.user;
      const userId = viewerInfo.userId || 0;
      await incPVById(repos.data.product, userId, shareUserId, channel);

      // 跳转至商城服务器的购买相关页面
      const url = `${config.shopServerConfig.host}:${config.shopServerConfig.port}/shop
      ?userId=${userId}&shareId=${shareUserId}&productId=${productId}&channel=${channel}`;
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
  const orderId = req.body.orderId || '';
  const channel = req.body.channel || 0;
  const shareUserId = req.body.shareId || 0;
  const userId = req.body.userId || 0;
  const totalPrice = parseFloat(req.body.totalPrice) || 0;
  const timestamp = req.body.timestamp || 0;
  const signature = req.body.signature || '';
  const resUtil = new HttpSend(req, res);

  // 计算签名 检验参数是否来自合法源
  const signatureInfo = signatureUtil.genSignature({
    productId,
    orderId,
    channel,
    shareUserId,
    userId,
    totalPrice,
    timestamp,
  }, config.shopServerConfig.privateKey);
  if (signature !== signatureInfo.signature) {
    resUtil.sendJson(104, '签名错误');
    return;
  }

  if (totalPrice <= 0) {
    resUtil.sendJson(constants.HTTP_SUCCESS);
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
