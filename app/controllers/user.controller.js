const constants = require('../../config/constants');
const verifyCon = require('./verify.controller');
const HttpSend = require('../utils/http.util');
const Model = require('../models/index');
const redisClient = require('../../config/redis')(1);
const globalClient = require('../../config/redis')(3);
const redisUtil = require('../utils/redis.util');
const moment = require('moment');
const signatureUtil = require('../utils/signature.util');
const config = require('../../config/config');
const globalController = require('./global.controller');
const logger = require('../utils/log.util').getLogger(constants.LOGGER_LEVEL);

const Op = Model.Sequelize.Op;

// 渲染绑定手机号页面
exports.renderBindPage = (req, res) => {
  const httpUtil = new HttpSend(req, res);
  httpUtil.render('index', { title: '绑定手机号' });
};

// 绑定user表中的手机号、便于积分转化
exports.bindPhone = (req, res) => {
  const userId = req.session.user ? req.session.user.userId : '';
  const phone = req.body.phone || '';
  const captcha = req.body.captcha || '';
  const remark = req.body.remark || '';
  const resUtil = new HttpSend(req, res);

  if (!userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '请先登录');
    return;
  }

  if (!phone || !captcha) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数不能为空');
    return;
  }

  Model.User.update({ phone, remark }, { where: { userId } }).then(() => {
    resUtil.sendJson(constants.HTTP_SUCCESS, '手机号绑定成功');
  }).catch((err) => {
    logger.info(err);
    resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
  });
};

// 用户中心首页
exports.index = (req, res) => {
  const httpUtil = new HttpSend(req, res);
  const user = {
    userName: req.session.user.userName,
    sex: req.session.user.sex,
    province: req.session.user.province,
    city: req.session.user.city,
    country: req.session.user.country,
    headImgUrl: req.session.user.headImgUrl,
  };
  httpUtil.render('user/user', { user, title: '个人中心' });
};

// 佣金日志详情页
exports.commissionDetails = (req, res, next) => {
  const userId = req.session.user ? req.session.user.userId : '';
  const httpUtil = new HttpSend(req, res);

  if (!userId) {
    const error = new Error('userId error');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询佣金总额
      const commissionKey = redisUtil.getRedisPrefix(6);
      const commissionNum = await globalClient.hgetAsync(commissionKey, userId) || 0;

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

      httpUtil.render('user/commission', { commissionNum: parseFloat(commissionNum / 100) || 0.00, logLists });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 佣金申请页面
exports.withdrawPage = (req, res, next) => {
  const userId = req.session.user ? req.session.user.userId : '';
  const httpUtil = new HttpSend(req, res);

  if (!userId) {
    const error = new Error('参数错误');
    next(error);
    return;
  }

  const commissionKey = redisUtil.getRedisPrefix(6);
  globalClient.hget(commissionKey, userId).then((commissionNum) => {
    httpUtil.render('user/withdraw', { commissionNum: parseFloat(commissionNum / 100) || 0.00 });
  });
};

// 佣金申请提现
exports.withdraw = (req, res) => {
  const userId = req.session.user ? req.session.user.userId : '';
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
      const commissionNum = await globalClient.hgetAsync(commissionKey, userId) || 0;

      if (changeNum <= 0 || changeNum > parseFloat(commissionNum / 100)) {
        resUtil.sendJson(constants.HTTP_FAIL, '提现金额不正确，请重新输入');
        return;
      }

      // 日志记录，redis总金额同步
      Model.sequelize.transaction(async (transaction) => {
        const newChangeNum = 0 - (changeNum * 100);
        const updateRedis = await redisClient.hincrbyAsync(commissionKey, userId, newChangeNum);
        if (!updateRedis) {
          throw new Error('redis update failed');
        }

        await Model.Commission.create({
          shareId: userId,
          operator: 2,
          operatorResult: 0,
          changeNum: 0 - changeNum,
          totalCommission: parseFloat(updateRedis / 100) || 0.00,
          phone,
          aliPayAccount,
          aliPayAccountName,
        }, { transaction });
      }).then(() => {
        resUtil.sendJson(constants.HTTP_SUCCESS);
      }).catch((err) => {
        if (err.message !== 'redis update failed') {
          // 数据库插入失败，redis回滚
          redisClient.hincrby(commissionKey, userId, changeNum);
        }
        throw err;
      });
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};

// 积分日志详情页
exports.bonusPointDetails = (req, res, next) => {
  const userId = req.session.user ? req.session.user.userId : '';
  const startDate = moment().format('YYYY-MM-DD 00:00:00');
  const endDate = moment().format('YYYY-MM-DD 23:59:59');
  const httpUtil = new HttpSend(req, res);

  if (!userId) {
    const error = new Error('userId error');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询积分总额
      const pointKey = redisUtil.getRedisPrefix(18);
      const pointNum = await globalClient.hgetAsync(pointKey, userId) || 0;

      // 查询积分明细日志
      const logInfos = await Model.PointRecord.findAll({
        where: {
          viewerId: userId,
          createdAt: { [Op.gte]: startDate, [Op.lte]: endDate },
        },
        limit: 10,
        order: [['createdAt', 'DESC']],
      });
      const logLists = [];
      for (const log of logInfos) {
        logLists.push({
          recordId: log.dataValues.recordId,
          time: log.dataValues.createdAt,
          changeNum: Math.abs(log.dataValues.changeNum),
          totalNum: log.dataValues.totalPoint,
          operator: log.dataValues.operator,
          operatorResult: log.dataValues.operatorResult,
        });
      }

      httpUtil.render('user/credits', { pointNum, logLists });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 按天查询日志详情
const bonusPointDetailsByDay = async (userId, date, page, limit) => {
  try {
    const startDate = moment(date, 'YYYYMMDD').format('YYYY-MM-DD 00:00:00');
    const endDate = moment(date, 'YYYYMMDD').format('YYYY-MM-DD 23:59:59');

    // 查询积分明细日志
    const logInfos = await Model.PointRecord.findAndCountAll({
      where: {
        viewerId: userId,
        createdAt: { [Op.gte]: startDate, [Op.lte]: endDate },
      },
      order: [['createdAt', 'DESC']],
      offset: (page - 1) * limit,
      limit,
    }) || [];

    // 总页数
    const totalPage = Math.ceil(logInfos.count / limit);
    // 当日累计新增
    let incrSum = 0;
    // 当日累计减少
    let decrSum = 0;
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
        changeNum: Math.abs(log.dataValues.changeNum),
        totalNum: log.dataValues.totalPoint,
        operator: log.dataValues.operator,
        operatorResult: log.dataValues.operatorResult,
      });
    }

    return {
      date, totalPage, page, decrSum: Math.abs(decrSum), incrSum, logLists,
    };
  } catch (err) {
    logger.info(err);
    throw err;
  }
};

exports.renderBonusPointDetailsByDay = (req, res, next) => {
  const httpUtil = new HttpSend(req, res);
  const userId = req.session.user ? req.session.user.userId : '';
  const date = req.query.date || moment().format('YYYYMMDD');
  const page = parseInt(req.query.page, 0) || 1;
  const limit = 10;

  if (!userId) {
    const error = new Error('userId error');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      const today = moment().format('YYYYMMDD');
      let data = {
        date, totalPage: 1, page, decrSum: 0, incrSum: 0, logLists: [],
      };
      if (parseInt(date, 0) <= parseInt(today, 0)) {
        data = await bonusPointDetailsByDay(userId, date, page, limit);
      }

      httpUtil.render('user/credits-list', data);
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

exports.jsonBonusPointDetailsByDay = (req, res) => {
  const httpUtil = new HttpSend(req, res);
  const userId = req.session.user ? req.session.user.userId : '';
  const date = req.query.date || moment().format('YYYYMMDD');
  const page = parseInt(req.query.page, 0) || 1;
  const limit = 10;

  if (!userId) {
    httpUtil.sendJson(constants.HTTP_FAIL, '请先登录');
    return;
  }

  const mainFunction = async () => {
    try {
      const today = moment().format('YYYYMMDD');
      let data = {
        date, totalPage: 1, page, decrSum: 0, incrSum: 0, logLists: [],
      };
      if (parseInt(date, 0) <= parseInt(today, 0)) {
        data = await bonusPointDetailsByDay(userId, date, page, limit);
      }

      httpUtil.sendJson(constants.HTTP_SUCCESS, '', data);
    } catch (err) {
      logger.info(err);
      httpUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};


// 根据pointRecordId 查询积分记录的详细情况
exports.qryDetailsByRecordId = (req, res, next) => {
  const userId = req.session.user ? req.session.user.userId : '';
  const recordId = req.query.recordId || 0;
  const httpUtil = new HttpSend(req, res);

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

      if (!logInfo || !logInfo.dataValues) {
        throw new Error('参数有误，查询失败');
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

      httpUtil.render('user/credits-detail', data);
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 建议页面
exports.getAdvicePage = (req, res) => {
  const httpUtil = new HttpSend(req, res);
  httpUtil.render('user/feedback', { title: '建议和反馈' });
};

// 上传建议
exports.giveAdvice = (req, res) => {
  const userId = req.session.user ? req.session.user.userId : '';
  const advice = req.body.advice || '';
  const resUtils = new HttpSend(req, res);


  if (!userId || !advice) {
    resUtils.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }


  Model.Advice.create({ userId, advice }).then(() => {
    resUtils.sendJson(constants.HTTP_SUCCESS);
  }).catch((err) => {
    logger.info(err);
    resUtils.sendJson(constants.HTTP_FAIL, '系统错误');
  });
};

// 积分商城调用   兑换积分
exports.exchangePoints = (req, res) => {
  // 记录一下积分商城扣除的请求日志，以便以后查询
  globalController.writeLog('post_from_pointShop', JSON.stringify(req.body));

  const userId = req.body.userId || '';
  const point = parseInt(req.body.point, 0) || 0;
  const timestamp = req.body.timestamp || '0';
  const signature = req.body.signature || '';
  const now = Date.now();
  const resUtil = new HttpSend(req, res);

  if (!timestamp || !signature || point <= 0 || !userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数不能为空');
    return;
  }

  if (parseInt(timestamp, 0) < now - (5 * 60 * 1000) || parseInt(timestamp, 0) > now) {
    resUtil.sendJson(408, '请求已经超时');
    return;
  }

  // 计算签名 检验参数是否来自合法源
  const signatureInfo = signatureUtil.genSignature({
    userId,
    point,
    timestamp,
  }, config.pointMallConfig.privateKey);

  if (signature !== signatureInfo.signature) {
    resUtil.sendJson(104, '签名错误');
    return;
  }

  const mainFunction = async () => {
    try {
      // 检查积分是否超出扣除上限
      const bonusKey = redisUtil.getRedisPrefix(18);
      const myPoint = await globalClient.hgetAsync(bonusKey, userId);
      if (parseInt(myPoint, 0) < point) {
        resUtil.sendJson(constants.HTTP_FAIL, '积分超过最大兑换上限');
        return;
      }


      const globalBonusKey = redisUtil.getRedisPrefix(1111, userId);
      const result = await globalClient.multi()
        .hincrby(bonusKey, userId, (0 - point))
        .hincrby(globalBonusKey, constants.REDIS_PREFIX, (0 - point))
        .execAsync();

      if (result.length === 2) {
        const data = await Model.PointRecord.create({
          viewerId: userId,
          operator: 5,
          changeNum: (0 - point),
          totalPoint: result[0],
          proofId: 0,
        });
        if (data) {
          resUtil.sendJson(constants.HTTP_SUCCESS);
        } else {
          resUtil.sendJson(constants.HTTP_FAIL, '数据库日志增加错误');
        }
      } else {
        resUtil.sendJson(constants.HTTP_FAIL, 'redis扣除错误');
      }
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统出错');
    }
  };

  mainFunction();
};
