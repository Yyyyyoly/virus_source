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
      let commissionNum = await redisClient.hgetAsync(commissionKey, userId);
      commissionNum = parseInt(commissionNum, 0) || 0;

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
    let mysqlModel = {};
    switch (type) {
      case 1:
      case 2:
        mysqlModel = Model.PVNews;
        break;
      case 3:
      case 4:
        mysqlModel = Model.PVProducts;
        break;
      default:
        mysqlModel = Model.Commission;
    }

    // 文章UV  商品UV  下单用户数
    if (type === 1 || type === 3 || type === 5) {
      recordList = await mysqlModel.findAll({
        attributes: [
          [Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%m%d'), 'date'],
          'viewerId',
        ],
        where: {
          shareId: userId,
          createdAt: { $gte: startDate, $lte: endDate },
        },
        group: [
          'viewerId',
          Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%Y%m%d'),
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
    } else if (type === 2 || type === 4 || type === 6) {
      // 文章PV  商品PV  下单数
      recordList = await mysqlModel.findAll({
        attributes: [
          [Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%m%d'), 'date'],
          [Model.sequelize.fn('COUNT', Model.sequelize.col('id')), 'num'],
        ],
        where: {
          shareId: userId,
          createdAt: { $gte: startDate, $lte: endDate },
        },
        group: Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%Y%m%d'),
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

// 处理一下zrange的返回值，改成对象
const formatZrangeReturn = (list) => {
  if (list.constructor !== Array || list.length === 0) {
    return {};
  }

  const max = list.length;
  const formatObject = {};
  for (let i = 0; i < max; i += 2) {
    formatObject[list[i]] = list[i + 1];
  }
  return formatObject;
};

// 获取排行列表数据
exports.getRankList = (req, res) => {
  const type = parseInt(req.query.type, 0) || 0;
  const limit = 10;
  const page = parseInt(req.query.page, 0) || 1;
  const userId = req.session.user.userId || 0;
  const resUtil = new HttpSend(req, res);
  const hotList = [];
  let totalPage = 1;

  if (page < 1 || (type <= 1 && type >= 8)) {
    resUtil.sendJson(500, '参数有误');
    return;
  }

  const startIndex = (page - 1) * limit;
  const endIndex = (page * limit) - 1;

  // 根据type查找对应的redisKey
  const getRedisKeyByType = () => {
    const today = moment().format('YYYYMMDD');
    let viewKeyToday = '';
    let viewKeyTotal = '';
    let logKey = '';
    switch (type) {
      case 1:
      case 2:
        // 文章uv
        viewKeyToday = redisUtil.getRedisPrefix(4, `${userId}:date_${today}`);
        viewKeyTotal = redisUtil.getRedisPrefix(4, userId);
        logKey = redisUtil.getRedisPrefix(11);
        break;
      case 3:
      case 4:
        // 文章pv
        viewKeyToday = redisUtil.getRedisPrefix(3, `${userId}:date_${today}`);
        viewKeyTotal = redisUtil.getRedisPrefix(3, userId);
        logKey = redisUtil.getRedisPrefix(11);
        break;
      case 5:
      case 6:
        // 商品uv
        viewKeyToday = redisUtil.getRedisPrefix(8, `${userId}:date_${today}`);
        viewKeyTotal = redisUtil.getRedisPrefix(8, userId);
        logKey = redisUtil.getRedisPrefix(12);
        break;
      case 7:
      case 8:
        // 商品pv
        viewKeyToday = redisUtil.getRedisPrefix(7, `${userId}:date_${today}`);
        viewKeyTotal = redisUtil.getRedisPrefix(7, userId);
        logKey = redisUtil.getRedisPrefix(12);
        break;
      default:
        break;
    }
    return { viewKeyToday, viewKeyTotal, logKey };
  };

  const mainFunction = async () => {
    try {
      const keys = getRedisKeyByType();
      let formatViewTotal = [];
      let viewTodayList = [];
      let viewTotalList = [];
      let info = [];
      let totalPageNum = 0;
      // 当日热门榜
      if (type === 1 || type === 3 || type === 5 || type === 7) {
        [viewTodayList, viewTotalList, info, totalPageNum] = await Promise.all([
          redisClient.zrevrangeAsync(keys.viewKeyToday, startIndex, endIndex, 'WITHSCORES'),
          redisClient.zrevrangeAsync(keys.viewKeyTotal, 0, -1, 'WITHSCORES'),
          redisClient.hgetallAsync(keys.logKey),
          redisClient.zcardAsync(keys.viewKeyToday),
        ]);
        formatViewTotal = formatZrangeReturn(viewTotalList);
      } else if (type === 2 || type === 4 || type === 6 || type === 8) {
        // 累计热门榜
        [viewTodayList, viewTotalList, info, totalPageNum] = await Promise.all([
          redisClient.zrevrangeAsync(keys.viewKeyToday, 0, -1, 'WITHSCORES'),
          redisClient.zrevrangeAsync(keys.viewKeyTotal, startIndex, endIndex, 'WITHSCORES'),
          redisClient.hgetallAsync(keys.logKey),
          redisClient.zcardAsync(keys.viewKeyToday),
        ]);
        formatViewTotal = formatZrangeReturn(viewTodayList);
      }

      totalPage = Math.ceil(totalPageNum / limit);
      for (let i = 0; i < viewTodayList.length; i += 2) {
        hotList.push({
          id: viewTodayList[i],
          info: info[viewTodayList[i]],
          currentViewNum: viewTodayList[i + 1],
          totalViewNum: formatViewTotal[viewTodayList[i]],
        });
      }

      resUtil.sendJson(constants.HTTP_SUCCESS, '', { totalPage, page, hotList });
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统出错');
    }
  };

  mainFunction();
};

