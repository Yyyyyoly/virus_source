const constants = require('../../config/constants');
const config = require('../../config/config');
const verifyCon = require('./verify.controller');
const HttpSend = require('../utils/http.util');
const Model = require('../models/index');
const crypto = require('crypto');
const redisClient = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');


// 用户中心首页
exports.index = (req, res) => {
  res.render('user', { title: 'user management' });
};

// 密码管理首页
exports.getUserPassword = (req, res, next) => {
  const userId = req.session.user.userId || '';
  if (!userId) {
    const error = new Error('userId error');
    next(error);
  }

  res.render('user', { phone: req.session.user.phone });
};

// 修改密码
exports.modUserPassword = (req, res) => {
  // const userId = req.session.user.userId || '';
  const userId = 1;
  // 目前type有2种方式：1.通过旧密码修改  2.通过短信验证码修改
  const type = parseInt(req.body.type, 0) === constants.PASSWORD_MOD_BY_OLD
    ? constants.PASSWORD_MOD_BY_OLD : constants.PASSWORD_MOD_BY_MESSAGE;
  const captcha = req.body.code || '';
  const newPassword = req.body.password ? crypto.createHash('md5').update(req.body.password).digest('hex') : '';
  const resUtil = new HttpSend(req, res);

  if (!userId || !type || !newPassword) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数有误');
    return;
  }

  const mainFunction = async () => {
    try {
      // 对比旧密码/验证码
      if (type === 2) {
        const cmpResult = verifyCon.CodeVerify(req, captcha);
        if (cmpResult === false) {
          resUtil.sendJson(constants.HTTP_FAIL, '验证码错误');
          return;
        }
      } else {
        const user = await Model.User.findOne({ where: { userId } });
        if (!user || !user.dataValues) {
          resUtil.sendJson(constants.HTTP_FAIL, '用户不存在');
          return;
        }

        if (user.dataValues.password !== crypto.createHash('md5').update(captcha).digest('hex')) {
          resUtil.sendJson(constants.HTTP_FAIL, '旧密码错误');
          return;
        }
      }

      // 修改新密码
      const update = { password: newPassword };
      const updateConditions = { where: { userId } };
      const affectedRows = await Model.User.update(update, updateConditions);
      // 返回成功  或者是直接登出
      if (affectedRows[0] === 1) {
        // resUtil.sendJson(constants.HTTP_SUCCESS, '');
        const redirectUrl = `${config.domain}/auth/logout`;
        res.redirect(redirectUrl);
      } else {
        throw new Error('更新失败');
      }
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统出错');
    }
  };

  mainFunction();
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
    const error = new Error('userId error');
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
  const resUtil = new HttpSend(req, res);

  if (!userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '请先登录');
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
