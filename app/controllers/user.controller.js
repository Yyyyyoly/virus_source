const constants = require('../../config/constants');
const verifyCon = require('./verify.controller');
const HttpSend = require('../utils/http.util');
const Model = require('../models/index');
const redisClient = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');


// 用户中心首页
exports.index = (req, res) => {
  res.render('user', { title: 'user management' });
};

// 佣金日志详情页
exports.commissionDetails = (req, res, next) => {
  const userId = req.session.user.userId || '';
  if (!userId) {
    const error = new Error('userId error');
    next(error);
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

  if (!userId || !phone || !captcha || !aliPayName || !aliPayAccount) {
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
