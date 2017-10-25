const constants = require('../../config/constants');
const verifyCon = require('./verify.controller');
const HttpSend = require('../utils/http.util');
const Model = require('../models/index');
const redisClient = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');
const moment = require('moment');


// 用户中心首页
exports.index = (req, res) => {
  res.render('user', { user: req.session.user });
};

// 佣金日志详情页
exports.commissionDetails = (req, res, next) => {
  const userId = req.session.user.userId || '';
  if (!userId) {
    const error = new Error('userId error');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询佣金总额
      const commissionKey = redisUtil.getRedisPrefix(6);
      const commissionNum = await redisClient.hgetAsync(commissionKey, userId);

      // 查询佣金明细日志
      const logInfos = await Model.Commission.findAll({ where: { shareId: userId } });
      const logLists = [];
      for (const log of logInfos) {
        logLists.push({
          time: log.dataValues.createdAt,
          changeNum: log.dataValues.changeNum,
          totalNum: log.dataValues.totalCommission,
          operator: log.dataValues.operator,
          operatorResult: log.dataValues.operatorResult,
        });
      }

      res.render('index', { commissionNum, logLists });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 佣金申请页面
exports.withdrawPage = (req, res, next) => {
  const userId = req.session.user.userId || '';

  if (!userId) {
    const error = new Error('参数错误');
    next(error);
    return;
  }

  const commissionKey = redisUtil.getRedisPrefix(6);
  redisClient.hget(commissionKey, userId).then((commissionNum) => {
    res.render('index', { commissionNum });
  });
};

// 佣金申请提现
exports.withdraw = (req, res) => {
  const userId = req.session.user.userId || '';
  const changeNum = req.body.money || 0;
  const aliPayAccount = req.body.aliPayAccount || '';
  const aliPayAccountName = req.body.aliPayAccountName || '';
  const phone = req.body.phone || '';
  const captcha = req.body.captcha || '';
  const resUtil = new HttpSend(req, res);

  if (!userId || !phone || !captcha || !aliPayAccountName || !aliPayAccount) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数有误');
    return;
  }

  // 验证手机号验证码是否有效
  if (verifyCon.CodeVerify(req, captcha) !== true) {
    resUtil.sendJson(constants.HTTP_FAIL, '验证码错误');
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询佣金总额
      const commissionKey = redisUtil.getRedisPrefix(6);
      const commissionNum = await redisClient.hgetAsync(commissionKey, userId);

      if (changeNum <= 0 || changeNum > commissionNum) {
        resUtil.sendJson(constants.HTTP_FAIL, '提现金额不正确，请重新输入');
        return;
      }

      // 日志记录，redis总金额同步
      Model.sequelize.transaction(async (transaction) => {
        const updateRedis = await redisClient.hincrbyAsync(commissionKey, userId, 0 - changeNum);
        if (!updateRedis) {
          throw new Error('redis update failed');
        }

        await Model.Commission.create({
          shareId: userId,
          operator: 2,
          operatorResult: 0,
          changeNum: 0 - changeNum,
          totalCommission: parseFloat(updateRedis),
          phone,
          aliPayAccount,
          aliPayAccountName,
        }, { transaction });
      }).catch((err) => {
        if (err.message !== 'redis update failed') {
          // 数据库插入失败，redis回滚
          redisClient.hincrby(commissionKey, userId, changeNum);
        }
        throw err;
      });
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};


// 积分日志详情页
exports.bonusPointDetails = (req, res, next) => {
  const userId = req.session.user.userId || '';
  const startDate = moment().format('YYYYMMDD 00:00:00');
  const endDate = moment().format('YYYYMMDD 23:59:59');

  if (!userId) {
    const error = new Error('userId error');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询积分总额
      const pointKey = redisUtil.getRedisPrefix(18);
      const pointNum = await redisClient.hgetAsync(pointKey, userId);

      // 查询积分明细日志
      const logInfos = await Model.PointRecord.findAll({
        where: {
          viewerId: userId,
          createdAt: { $gte: startDate, $lte: endDate },
        },
        limit: 10,
        order: [['createdAt', 'DESC']],
      });
      const logLists = [];
      for (const log of logInfos) {
        logLists.push({
          recordId: log.dataValues.recordId,
          time: log.dataValues.createdAt,
          changeNum: log.dataValues.changeNum,
          totalNum: log.dataValues.totalPoint,
          operator: log.dataValues.operator,
          operatorResult: log.dataValues.operatorResult,
        });
      }

      res.render('index', { pointNum, logLists });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};


// 按天查询日志详情
exports.bonusPointDetailsByDay = (req, res, next) => {
  const userId = req.session.user.userId || '';
  const date = req.query.date || moment().format('YYYYMMDD');
  const page = parseInt(req.query.page, 0) || 1;
  const limit = 10;

  // 分页总数
  let totalPage = 1;
  // 当日累计新增
  let incrSum = 0;
  // 当日累计减少
  let decrSum = 0;
  const startDate = moment(date, 'YYYYMMDD').format('YYYY-MM-DD 00:00:00');
  const endDate = moment(date, 'YYYYMMDD').format('YYYY-MM-DD 23:59:59');

  if (!userId) {
    const error = new Error('userId error');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询积分明细日志
      const logInfos = await Model.PointRecord.findAndCountAll({
        where: {
          viewerId: userId,
          createdAt: { $gte: startDate, $lte: endDate },
        },
        offset: (page - 1) * limit,
        limit,
      });

      totalPage = logInfos.count;
      const logLists = [];
      for (const log of logInfos.rows) {
        if (log.dataValues.changeNum < 0) {
          decrSum += parseInt(log.dataValues.changeNum, 0);
        } else {
          incrSum += parseInt(log.dataValues.changeNum, 0);
        }
        logLists.push({
          recordId: log.dataValues.recordId,
          time: log.dataValues.createdAt,
          changeNum: log.dataValues.changeNum,
          totalNum: log.dataValues.totalPoint,
          operator: log.dataValues.operator,
          operatorResult: log.dataValues.operatorResult,
        });
      }

      res.render('index', {
        date, totalPage, page, decrSum, incrSum, logLists,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};


// 根据pointRecordId 查询积分记录的详细情况
exports.qryDetailsByRecordId = (req, res, next) => {
  const userId = req.session.user.userId || '';
  const recordId = req.query.recordId || 0;


  if (!userId || !recordId) {
    const error = new Error('参数有误');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      const logInfo = await Model.PointRecord.findOne({
        where: { recordId, viewerId: userId },
        include: [
          { model: Model.User, as: 'Share' },
          { model: Model.News },
        ],
      });

      if (!logInfo.dataValues) {
        throw new Error('查询失败');
      }

      const newsTitle = logInfo.News ? logInfo.News.dataValues.title : '文章已被删除';
      const friendName = logInfo.Share ? logInfo.Share.dataValues.userName : '自己';
      const data = {
        time: logInfo.dataValues.createdAt,
        changeNum: logInfo.dataValues.changeNum,
        friendName,
        operator: logInfo.dataValues.operator,
        newsTitle,
      };

      res.render('index', data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 建议页面
exports.getAdvicePage = (req, res) => {
  res.render('index', {});
};

// 上传建议
exports.giveAdvice = (req, res) => {
  const userId = req.session.user.userId || '';
  const advice = req.query.advice || '';
  const resUtils = new HttpSend(req, res);


  if (!userId || !advice) {
    resUtils.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }


  Model.Advice.create({ userId, advice }).then(() => {
    resUtils.sendJson(constants.HTTP_SUCCESS);
  }).catch((err) => {
    console.log(err);
    resUtils.sendJson(constants.HTTP_FAIL, '参数错误系统错误');
  });
};
