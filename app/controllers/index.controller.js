const redisClient = require('../../config/redis')(1);
const globalClient = require('../../config/redis')(3);
const redisUtil = require('../utils/redis.util');
const HttpSend = require('../utils/http.util');
const constants = require('../../config/constants');
const moment = require('moment');
const Model = require('../models/index');
const logger = require('../utils/log.util').getLogger(constants.LOGGER_LEVEL);

const Op = Model.Sequelize.Op;

// 查询每日数据总量统计
const dataStatistics = async (userId, date = moment().format('YYYYMMDD')) => {
  // 查询指定日期浏览文章的uv\pv
  const getNews = async () => {
    const newsUvKey = redisUtil.getRedisPrefix(5, `${userId}:${date}`);
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
    const productsUvKey = redisUtil.getRedisPrefix(9, `${userId}:${date}`);
    const productList = await redisClient.hgetallAsync(productsUvKey);

    let uvProducts = 0;
    let pvProducts = 0;
    for (const key in productList) {
      uvProducts += 1;
      pvProducts += parseInt(productList[key], 0);
    }

    return { uvProducts, pvProducts };
  };

  // 查询指定日期下单用户数和下单商品总数
  const getPurchaseRecord = async () => {
    const purchaseKey = redisUtil.getRedisPrefix(10, `${userId}:${date}`);
    const productKey = redisUtil.getRedisPrefix(8, `${userId}:${date}`);
    const [purchaseList, typeList] = await Promise.all([
      redisClient.hgetallAsync(purchaseKey),
      redisClient.zrangeAsync(productKey, 0, -1, 'WITHSCORES'),
    ]);

    const userNum = purchaseList ? Object.keys(purchaseList).length : 0;
    const typeLength = typeList ? typeList.length : 0;
    let orderNum = 0; // 今日下单商品总数
    for (let i = 0; i < typeLength; i += 2) {
      orderNum += parseInt(typeList[i + 1], 0);
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
      case 5:
        mysqlModel = Model.Commission;
        break;
      default:
        mysqlModel = Model.ProductPurchase;
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
          createdAt: { [Op.gte]: startDate, [Op.lte]: endDate },
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
      // 文章PV  商品PV  下单商品总数
      const selectCol = type === 6 ?
        Model.sequelize.fn('SUM', Model.sequelize.col('num')) : Model.sequelize.fn('COUNT', 1);
      recordList = await mysqlModel.findAll({
        attributes: [
          [Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%m%d'), 'date'],
          [selectCol, 'num'],
        ],
        where: {
          shareId: userId,
          createdAt: { [Op.gte]: startDate, [Op.lte]: endDate },
        },
        group: Model.sequelize.fn('DATE_FORMAT', Model.sequelize.col('createdAt'), '%Y%m%d'),
      });

      // 处理数据成为可以通过日期下标访问的对象
      const formatList = {};
      const length = recordList.length || 0;
      for (let k = 0; k < length; k += 1) {
        const datetime = recordList[k].dataValues.date;
        formatList[datetime] = parseInt(recordList[k].dataValues.num, 0);
      }

      for (let i = 1; i <= days; i += 1) {
        const date = moment().subtract(days - i, 'days').format('MMDD');
        dataList.push({ date, num: formatList[date] || 0 });
      }
    }

    return dataList;
  } catch (err) {
    throw err;
  }
};

// 首页
exports.index = (req, res, next) => {
  const userId = req.session.user.userId || '';
  const httpUtil = new HttpSend(req, res);

  if (!userId) {
    const error = new Error('请先登录');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      const commissionKey = redisUtil.getRedisPrefix(6);
      const pointKey = redisUtil.getRedisPrefix(18);

      const [commissionNum, pointNum, datas, lineChartPoint, lineChartCommission] =
        await Promise.all([
          globalClient.hgetAsync(commissionKey, userId), // 查询用户的佣金总额
          globalClient.hgetAsync(pointKey, userId), // 查询用户的积分数量
          dataStatistics(userId), // 查询统计数据
          getLineChartInfoByType(userId, 1, 7), // 查询uv折线图
          getLineChartInfoByType(userId, 6, 7), // 查询下单商品数
        ]);

      httpUtil.render('index/index', {
        title: '首页',
        commissionNum: parseInt(commissionNum, 0) || 0,
        pointNum: parseInt(pointNum, 0) || 0,
        datas,
        lineChartPoint,
        lineChartCommission,
      });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 首页 积分策略显示页面
exports.renderStrategyPoint = (req, res, next) => {
  const userId = req.session.user ? req.session.user.userId : '';
  const httpUtil = new HttpSend(req, res);

  if (!userId) {
    const err = new Error('请先去登录');
    next(err);
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询用户的佣金总额
      const bonusKey = redisUtil.getRedisPrefix(18);
      let pointNum = await globalClient.hgetAsync(bonusKey, userId);
      pointNum = parseInt(pointNum, 0) || 0;

      httpUtil.render('index/strategy-news', { title: '积分推广攻略', commissionNum: pointNum });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 首页 佣金策略显示页面
exports.renderStrategyCommission = (req, res, next) => {
  const userId = req.session.user ? req.session.user.userId : '';
  const httpUtil = new HttpSend(req, res);

  if (!userId) {
    const err = new Error('请先去登录');
    next(err);
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询用户的佣金总额
      const commissionKey = redisUtil.getRedisPrefix(6);
      let commissionNum = await globalClient.hgetAsync(commissionKey, userId);
      commissionNum = parseInt(commissionNum, 0) || 0;

      httpUtil.render('index/strategy-goods', { title: '佣金推广攻略', commissionNum });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 首页 获取每日数据汇总
exports.getDailyData = (req, res) => {
  const userId = req.session.user.userId || '';
  const date = req.query.date || moment().format('YYYYMMDD');
  const resUtil = new HttpSend(req, res);

  if (!userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '请先登录');
    return;
  }

  const mainFunction = async () => {
    try {
      const datas = await dataStatistics(userId, date);

      resUtil.sendJson(constants.HTTP_SUCCESS, '', datas);
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统出错');
    }
  };

  mainFunction();
};

// 获取折线图json数据
exports.getLineChart = (req, res) => {
  const days = parseInt(req.query.days, 0) || 5;
  const type = parseInt(req.query.type, 0) || 0;
  const userId = req.session.user ? req.session.user.userId : '';
  const resUtil = new HttpSend(req, res);

  if (days <= 0 || !type || !userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }

  const mainFunction = async () => {
    try {
      // 获取折线图
      const dataList = await getLineChartInfoByType(userId, type, days);

      resUtil.sendJson(constants.HTTP_SUCCESS, '', { dataList });
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};


// 获取统计详情列表页面
exports.getListDetails = (req, res, next) => {
  const type = parseInt(req.params.type, 0) || 0;
  const date = req.query.date || moment().format('YYYYMMDD');
  const userId = req.session.user ? req.session.user.userId : '';
  const resUtil = new HttpSend(req, res);

  if (!type || !userId || !date) {
    next(new Error('参数错误'));
    return;
  }

  const mainFunction = async () => {
    try {
      let sqlModel = '';
      switch (type) {
        case 1:
          sqlModel = Model.PVNews;
          break;
        case 2:
          sqlModel = Model.PVProducts;
          break;
        default:
          sqlModel = Model.Commission;
      }

      const startDate = moment(date, 'YYYYMMDD').format('YYYY-MM-DD 00:00:00');
      const endDate = moment(date, 'YYYYMMDD').format('YYYY-MM-DD 23:59:59');
      const resultList = await sqlModel.findAll({
        where: {
          shareId: userId,
          createdAt: { [Op.gte]: startDate, [Op.lte]: endDate },
        },
        order: [['createdAt', 'DESC']],
      }) || { dataValues: [] };

      // 查询用户缩略信息
      const idList = await resultList.map(value => value.dataValues.viewerId);
      const userBriefKey = redisUtil.getRedisPrefix(25);
      const userInfoList = idList.length ? await redisClient.hmgetAsync(userBriefKey, idList) : [];

      // 去重，多次访问只显示第一次的时间
      const ifExist = {};
      const list = [];
      for (let i = 0; i < resultList.length; i += 1) {
        if (!ifExist[resultList[i].dataValues.viewerId]) {
          ifExist[resultList[i].dataValues.viewerId] = true;
          list.push({
            time: resultList[i].dataValues.createdAt,
            userName: JSON.parse(userInfoList[i]).userName,
          });
        }
      }

      const titles = { 1: '浏览文章用户数', 2: '浏览商品用户数', 3: '下单用户数' };
      resUtil.render('index/user-list', { total: list.length, list, title: titles[type] });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 获取统计详情饼状图页面
exports.getPieDetails = (req, res, next) => {
  const type = parseInt(req.params.type, 0) || 1;
  const date = req.query.date || moment().format('YYYYMMDD');
  const userId = req.session.user ? req.session.user.userId : '';
  const resUtil = new HttpSend(req, res);

  if (!type || !userId || !date) {
    next(new Error('参数错误'));
    return;
  }

  const mainFunction = async () => {
    try {
      let typeKey = '';
      let rankKeyByType = '';
      let briefKey = '';
      let briefClassKey = '';
      switch (type) {
        case 1:
          typeKey = redisUtil.getRedisPrefix(4, `${userId}:${date}`);
          rankKeyByType = redisUtil.getRedisPrefix(3, `${userId}:${date}`);
          briefKey = redisUtil.getRedisPrefix(11);
          break;
        case 2:
          typeKey = redisUtil.getRedisPrefix(24, `${userId}:${date}`);
          rankKeyByType = redisUtil.getRedisPrefix(23, `${userId}:${date}`);
          briefKey = redisUtil.getRedisPrefix(12);
          briefClassKey = redisUtil.getRedisPrefix(26);
          break;
        default:
          typeKey = redisUtil.getRedisPrefix(8, `${userId}:${date}`);
          rankKeyByType = redisUtil.getRedisPrefix(7, `${userId}:${date}`);
          briefKey = redisUtil.getRedisPrefix(12);
          briefClassKey = redisUtil.getRedisPrefix(26);
      }

      // 全部排行列表
      const list = await redisClient.zrevrangeAsync(`${rankKeyByType}:all`, 0, -1, 'WITHSCORES') || [];
      // 饼图的分类列表
      const typeList = await redisClient.zrevrangeAsync(typeKey, 0, -1, 'WITHSCORES') || [];
      // 所有商品/资讯的简介
      const ids = list.filter((item, index) => (index % 2 === 0));
      const briefIntroduction = ids.length ? await redisClient.hmgetAsync(briefKey, ids) : [];
      // 所有商品/资讯的类别
      const briefClassInfos = briefClassKey === '' ? constants.NEWS_CLASS_LIST : await redisClient.hgetallAsync(briefClassKey);

      const pieList = [];
      for (let j = 0; j < typeList.length; j += 2) {
        pieList.push({
          cat_id: typeList[j],
          cat_name: briefClassInfos[typeList[j]],
          num: typeList[j + 1],
        });
      }

      const formatList = [];
      for (let i = 0; i < list.length; i += 2) {
        const briefInfo = JSON.parse(briefIntroduction[(i / 2)]);
        formatList.push({
          id: list[i],
          name: briefInfo.name,
          num: parseInt(list[i + 1], 0),
          cat_name: briefClassInfos[briefInfo.cat],
          cat_id: briefInfo.cat,
          price: briefInfo.price || 0, // 查询资讯浏览人次时这个字段没用
        });
      }

      const titles = { 1: '浏览文章次数', 2: '浏览商品次数', 3: '下单商品数' };
      if (type === 1) {
        resUtil.render('index/count', { typePie: pieList, rank: formatList, title: titles[type] });
      } else {
        resUtil.render('index/count-commission', { typePie: pieList, rank: formatList, title: titles[type] });
      }
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

