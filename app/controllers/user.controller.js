const constants = require('../../config/constants');
const config = require('../../config/config');
const verifyCon = require('./verify.controller');
const HttpSend = require('../utils/http.util');
const Model = require('../models/index');
const crypto = require('crypto');

// 用户中心首页
exports.index = function (req, res) {
  res.render('user', { title: 'user management' });
};

// 密码管理首页
exports.getUserPassword = function (req, res, next) {
  const userId = req.session.user.userId || '';
  if (!userId) {
    const error = new Error('userId error');
    next(error);
  }

  res.render('user', { phone: req.session.user.phone });
};


// 修改密码
exports.modUserPassword = function (req, res) {
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
