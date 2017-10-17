const request = require('request-promise');
const config = require('../../config/config');
const HttpSend = require('../utils/http.util');
const constants = require('../../config/constants');
const newsController = require('./news.controller');

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

// 商城  增加PV UV记录
const incPVById = async (newsInfo, viewerInfo, shareUserId, channel) => {
  // 如果有分享者，先查询分享者信息
  const shareInfo = {
    shareId: shareUserId,
    shareName: '',
    sharePhone: '',
  };
  if (shareUserId !== 0) {
    const data = await Model.User.findOne({ where: { userId: shareUserId } });
    if (!data || !data.dataValues) {
      shareInfo.shareId = 0;
    } else {
      shareInfo.shareName = data.dataValues.userName;
      shareInfo.sharePhone = data.dataValues.phone;
    }
  }

  // 获取游客/登录会员的唯一id
  const viewerUniqueId = !viewerInfo.userId ? viewerInfo.cookieId : viewerInfo.userId;
  Model.sequelize.transaction(async (transaction) => {
    const updateMysql = await Model.PVNews.create({
      newsId: newsInfo.newsId,
      redirectUrl: newsInfo.redirectUrl,
      type: newsInfo.type,
      title: newsInfo.title,
      introduction: newsInfo.introduction,
      viewerId: viewerInfo.userId,
      viewerUniqueId,
      viewerName: viewerInfo.userName,
      viewerPhone: viewerInfo.phone,
      shareId: shareInfo.shareId,
      shareName: shareInfo.shareName,
      sharePhone: shareInfo.sharePhone,
      shareChannel: channel,
    }, { transaction });
    if (updateMysql && updateMysql.dataValues) {
      // 更新文章浏览总榜
      const pvTotalKey = redisUtil.getRedisPrefix(2);
      // 更新文章分类浏览总榜
      const pvContextKey = redisUtil.getRedisPrefix(2, newsInfo.type);
      // 更新个人  分享文章的热门排行榜
      const pvUserKey = redisUtil.getRedisPrefix(3, shareInfo.shareId);
      // 更新个人  分享文章的渠道排行榜
      const channelUserKey = redisUtil.getRedisPrefix(4, shareInfo.shareId);
      // 更新个人  当日分享文章的浏览uv pv
      const today = moment().format('YYYYMMDD');
      const uvKey = redisUtil.getRedisPrefix(5, `${shareInfo.shareId}:date_${today}`);

      // 鉴于multi并不会产生回滚，所以一旦exec出错  还是有错误数据会+1
      let uptdateRedis = [];
      if (shareUserId !== 0) {
        uptdateRedis = await redisClient.multi()
          .zincrby(pvTotalKey, 1, newsInfo.newsId)
          .zincrby(pvContextKey, 1, newsInfo.newsId)
          .zincrby(pvUserKey, 1, `${newsInfo.newsId}@@${newsInfo.title}`)
          .zincrby(channelUserKey, 1, newsInfo.newsId)
          .hincrby(uvKey, viewerUniqueId, 1)
          .execAsync();
      } else {
        uptdateRedis = await redisClient.multi()
          .zincrby(pvTotalKey, 1, newsInfo.newsId)
          .zincrby(pvContextKey, 1, newsInfo.newsId)
          .execAsync();
      }
      if (!uptdateRedis.length) {
        throw new Error('redis update failed');
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
      const viewerInfo = newsController.getVistorCookie(req);
      await incPVById(repos.data.product, viewerInfo, shareUserId, channel);

      // 跳转至商城服务器的购买相关页面
      const url = `${config.shopServerConfig.host}:${config.shopServerConfig.port}/shop?userId=${viewerInfo.cookieId}&shareId=${}`;
      res.redirect();
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};
