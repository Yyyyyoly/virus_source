const redisClient = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');
const HttpSend = require('../utils/http.util');
const constants = require('../../config/constants');
const moment = require('moment');
const Model = require('../models/index');

// 查询每日数据总量统计
const dataStatistics = async (userId, date = moment().format('YYYYMMDD')) => {
  // 查询指定日期浏览文章的uv\pv
  const getNews = async () => {
    const newsUvKey = redisUtil.getRedisPrefix(5, `${userId}:date_${date}`);
    const newsList = await redisClient.hgetallAsync(newsUvKey);

    let uvNews = 0;
    let pvNews = 0;
    for (const key in newsList) {
      uvNews += 1;
      pvNews += parseInt(newsList[key], 0);
    }

    return { uvNews, pvNews };
  };

  // 查询指定日期浏览商品的uv\pv
  const getProducts = async () => {
    const productsUvKey = redisUtil.getRedisPrefix(9, `${userId}:date_${date}`);
    const productList = await redisClient.hgetallAsync(productsUvKey);

    let uvProducts = 0;
    let pvProducts = 0;
    for (const key in productList) {
      uvProducts += 1;
      pvProducts += parseInt(productList[key], 0);
    }

    return { uvProducts, pvProducts };
  };

  // 查询指定日期下单用户数和下单数
  const getPurchaseRecord = async () => {
    const purchaseKey = redisUtil.getRedisPrefix(10, `${userId}:date_${date}`);
    const recordList = await redisClient.hgetallAsync(purchaseKey);

    let userNum = 0;
    let orderNum = 0;
    for (const key in recordList) {
      userNum += 1;
      orderNum += parseInt(recordList[key], 0);
    }

    return { userNum, orderNum };
  };

  const [newsView, productView, purchaseRecord] = await Promise.all([
    getNews(),
    getProducts(),
    getPurchaseRecord(),
  ]);
  return { newsView, productView, purchaseRecord };
};

// 首页
exports.index = (req, res, next) => {
  const userId = req.session.user.userId || 0;
  if (!userId) {
    const error = new Error('请先登录');
    next(error);
  }

  const mainFunction = async () => {
    try {
      // 查询用户的佣金总额
      const commissionKey = redisUtil.getRedisPrefix(6);
      const commissionNum = await redisClient.hgetAsync(commissionKey, userId);

      const datas = await dataStatistics(userId);
      res.render('index', { commissionNum, datas });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 首页 获取每日数据汇总
exports.getDailyData = (req, res) => {
  const userId = req.session.user.userId || 0;
  const date = req.query.date || moment().format('YYYYMMDD');
  const resUtil = new HttpSend(req, res);

  if (!userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '请先登录');
    return;
  }

  const mainFunction = async () => {
    try {
      const datas = await dataStatistics(userId, date);

      resUtil.sendJson(constants.HTTP_SUCCESS, '', {
        newsView: datas.newsView,
        productView: datas.productView,
        purchaseRecord: datas.purchaseRecord,
      });
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统出错');
    }
  };

  mainFunction();
};

// 获取折线图数据
const getLineChartInfoByType = async (userId, type = 1, days = 5) => {
  try {
    const startDate = moment().subtract(days, 'days').format('YYYY-MM-DD 00:00:00');
    const endDate = moment().format('YYYY-MM-DD HH:mm:ss');

    let recordList = [];
    const dataList = [];
    // 人数
    if (type === 1) {
      recordList = await Model.PVNews.findAll({
        attributes: [
          [Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%m%d'), 'date'],
          'viewerUniqueId',
        ],
        where: {
          shareId: userId,
          createdAt: { $gte: startDate, $lte: endDate },
        },
        group: [
          'viewerUniqueId',
          Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%Y-%m-%d'),
        ],
      });

      for (let i = 1; i <= days; i += 1) {
        const date = moment().subtract(days - i, 'days').format('MMDD');
        const numInfos = recordList.filter(data =>
          parseInt(data.dataValues.date, 0) === parseInt(date, 0));
        dataList.push({
          date,
          num: numInfos.length || 0,
        });
      }
    } else {
      // 人次
      recordList = await Model.PVNews.findAll({
        attributes: [
          [Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%m%d'), 'date'],
          [Model.sequelize.fn('COUNT', Model.sequelize.col('id')), 'num'],
        ],
        where: {
          shareId: userId,
          createdAt: { $gte: startDate, $lte: endDate },
        },
        group: Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%m%d'),
      });
      for (let i = 1; i <= days; i += 1) {
        const date = moment().subtract(days - i, 'days').format('MMDD');
        const numInfos = recordList.filter(data =>
          parseInt(data.dataValues.date, 0) === parseInt(date, 0));
        dataList.push({
          date,
          num: numInfos.length === 0 ? 0 : numInfos[0].dataValues.num,
        });
      }
    }

    return dataList;
  } catch (err) {
    throw err;
  }
};

// 获取折线图json数据
exports.getLineChart = (req, res) => {
  const days = parseInt(req.query.days, 0) || 5;
  const type = parseInt(req.params.type, 0) || 0;
  const userId = req.session.user ? req.session.user.userId : 0;
  const resUtil = new HttpSend(req, res);

  if (days <= 0 || !type || !userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }

  const mainFunction = async () => {
    try {
      // 获取折线图
      const dataList = getLineChartInfoByType(userId, type, days);

      resUtil.sendJson(200, '', { dataList });
    } catch (err) {
      console.log(err);
      resUtil.sendJson(500, '系统错误');
    }
  };

  mainFunction();
};


// 浏览文章 详情页
const detailsByNews = (req, res, next) => {
  const days = parseInt(req.query.days, 0) || 5;
  const type = parseInt(req.params.type, 0) || 0;
  const userId = req.session.user ? req.session.user.userId : 0;

  if (days <= 0 || !type || !userId) {
    const error = new Error('参数错误');
    next(error);
  }

  const getHotNewsList = async () => {
    const newsList = await redisClient.zrevrangeAsync([redisUtil.getRedisPrefix(3, userId), 0, 4, 'WITHSCORES']);
    const hotNewsList = [];
    const newsTitles = await redisClient.hgetallAsync(redisUtil.getRedisPrefix(11));
    for (let i = 0; i < newsList.length; i += 2) {
      hotNewsList.push({
        newsId: newsList[i],
        newsTitle: newsTitles[newsList[i]],
        viewNum: newsList[i + 1],
      });
    }
    return hotNewsList;
  };

  const getHotChannelList = async () => {
    const channelList = await redisClient.zrevrangeAsync([redisUtil.getRedisPrefix(4, userId), 0, 4, 'WITHSCORES']);
    const hotChannelList = [];
    for (let j = 0; j < channelList.length; j += 2) {
      hotChannelList.push({
        channelId: channelList[j],
        viewNum: channelList[j + 1],
      });
    }
    return hotChannelList;
  };

  const mainFunction = async () => {
    try {
      const [dataList, hotNewsList, hotChannelList] = await Promise.all([
        // 获取折线图
        getLineChartInfoByType(userId, type, days),
        // 获取热门文章排行榜
        getHotNewsList(),
        // 获取热门渠道排行榜
        getHotChannelList(),
      ]);

      res.render('index', { dataList, hotNewsList, hotChannelList });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 浏览商品 详情页
const detailsByProducts = (req, res, next) => {
  const days = parseInt(req.query.days, 0) || 5;
  const type = parseInt(req.params.type, 0) || 0;
  const userId = req.session.user ? req.session.user.userId : 0;

  if (days <= 0 || !type || !userId) {
    const error = new Error('参数错误');
    next(error);
  }

  const getHotProductList = async () => {
    const productList = await redisClient.zrevrangeAsync([redisUtil.getRedisPrefix(7, userId), 0, 4, 'WITHSCORES']);
    const hotProductList = [];
    const productBriefs = await redisClient.hgetallAsync(redisUtil.getRedisPrefix(12));
    for (let i = 0; i < productList.length; i += 2) {
      const productInfo = JSON.parse(productBriefs[productList[i]]);
      hotProductList.push({
        productId: productList[i],
        productName: productInfo.productName,
        price: parseFloat(productInfo.price),
        viewNum: productList[i + 1],
      });
    }
    return hotProductList;
  };

  const getHotChannelList = async () => {
    const channelList = await redisClient.zrevrangeAsync([redisUtil.getRedisPrefix(8, userId), 0, 4, 'WITHSCORES']);
    const hotChannelList = [];
    for (let j = 0; j < channelList.length; j += 2) {
      hotChannelList.push({
        channelId: channelList[j],
        viewNum: channelList[j + 1],
      });
    }
    return hotChannelList;
  };

  const mainFunction = async () => {
    try {
      const [dataList, hotProductList, hotChannelList] = await Promise.all([
        // 获取折线图
        getLineChartInfoByType(userId, type, days),
        // 获取热门商品排行榜
        getHotProductList(),
        // 获取热门渠道排行榜
        getHotChannelList(),
      ]);


      res.render('index', { dataList, hotProductList, hotChannelList });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 下单相关 详情页
const detailsByOrder = (req, res, next) => {
};

// 首页 进入数据详情
exports.getDataDetails = (req, res, next) => {
  const type = parseInt(req.params.type, 0) || 0;
  switch (type) {
    // 浏览文章用户数
    // 浏览文章次数
    case 1:
    case 2:
      detailsByNews(req, res, next);
      break;
    // 浏览商品用户数
    // 浏览商品次数
    case 3:
    case 4:
      detailsByProducts(req, res, next);
      break;
    // 下单用户数
    // 下单数
    case 5:
    case 6:
      detailsByOrder(req, res, next);
      break;
    default:
      next(new Error('参数错误'));
  }
};

