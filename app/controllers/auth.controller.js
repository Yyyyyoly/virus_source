const Model = require('../models/index');
const HttpSend = require('../utils/http.util');
const config = require('../../config/config');
const constants = require('../../config/constants');
const verifyCon = require('./verify.controller');
const crypto = require('crypto');
const OAuth = require('wechat-oauth');
const url = require('url');

// render注册页面
exports.registerGet = function (req, res) {
  const userInfo = req.session.user || {};

  if (!userInfo || !userInfo.uid) {
    res.render('auth/register');
  } else {
    const redirectUrl = `${config.serverHost}:${config.serverPort}/`;
    res.redirect(redirectUrl);
  }
};

// 注册请求
exports.registerPost = function (req, res) {
  const user = req.session.user || '';
  const openId = user.openId || '';
  const verifyCode = req.body.verifyCode || '';
  const phone = req.body.phone || '';
  const password = req.body.password ? crypto.createHash('md5').update(req.body.password).digest('hex') : '';
  const resUtil = new HttpSend(req, res);

  // 检查参数
  if (!verifyCode || !phone || !password) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }

  // 验证短信验证码
  if (verifyCon.CodeVerify(req, verifyCode) === false) {
    resUtil.sendJson(constants.HTTP_FAIL, '验证码不正确');
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询是否已经注册
      const condition = openId ? { $or: [{ phone }, { openId }] } : { phone };
      let userInfo = await Model.User.findOne({ where: condition });

      // 如果已经注册
      if (userInfo) {
        // 注册请求来自普通网页端
        if (!openId) {
          resUtil.sendJson(constants.HTTP_FAIL, '该手机号已经被注册');
          return;
        }
        // 注册请求来自微信端
        if (userInfo.dataValues.phone === phone) {
          if (userInfo.dataValues.openId) {
            resUtil.sendJson(constants.HTTP_FAIL, '该手机号已经被注册');
            return;
          }
          // 绑定微信
          const updateOptions = { openId };
          const updateConditions = { where: { userId: userInfo.userId } };
          await Model.User.update(updateOptions, updateConditions);
          userInfo.dataValues.openId = openId;
        } else {
          resUtil.sendJson(constants.HTTP_FAIL, '该微信号已被绑定');
          return;
        }
      } else {
        userInfo = await Model.User.create({ openId, phone, password });
      }

      req.session.user = {
        phone: userInfo.dataValues.phone,
        userName: userInfo.dataValues.userName,
        createdAt: userInfo.dataValues.createdAt,
        userId: userInfo.dataValues.userId,
        openId: userInfo.dataValues.openId,
      };

      // 如果有跳转前页面，先进入
      const originalUrl = req.session.originalUrl || `${config.serverHost}:${config.serverPort}/`;
      req.session.originalUrl = null;
      res.redirect(originalUrl);
    } catch (error) {
      console.log(error);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};

// render登录页面
exports.loginGet = function (req, res) {
  const userInfo = req.session.user || {};

  if (!userInfo || !userInfo.uid) {
    // 是否来自微信客户端, 是则自动登陆
    const weChatFlag = exports.isFromWeChat(req);
    if (weChatFlag) {
      exports.loginPost(req, res);
    } else {
      res.render('auth/login');
    }
  } else {
    const redirectUrl = `${config.serverHost}:${config.serverPort}/`;
    res.redirect(redirectUrl);
  }
};

// 处理来自其他浏览器的登录
exports.loginPostFromOther = function (req, res) {
  const phone = req.body.phone || '';
  const password = req.body.password || '';
  const resUtil = new HttpSend(req, res);

  // 参数验证
  if (!phone || !password) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }

  Model.User.findOne({ where: { phone } }).then((responseUser) => {
    if (!responseUser || !responseUser.dataValues) {
      const registerUrl = `${config.serverHost}:${config.serverPort}/auth/register`;
      res.redirect(registerUrl);
      return;
    }

    const md5Password = crypto.createHash('md5').update(password).digest('hex');
    if (responseUser.password !== md5Password) {
      resUtil.sendJson(constants.HTTP_FAIL, '密码错误');
      return;
    }

    req.session.user = {
      phone: responseUser.dataValues.phone,
      userName: responseUser.dataValues.userName,
      createdAt: responseUser.dataValues.createdAt,
      userId: responseUser.dataValues.userId,
      openId: responseUser.dataValues.openId,
    };

    // 如果有跳转前页面，先进入
    const originalUrl = req.session.originalUrl || `${config.serverHost}:${config.serverPort}/`;
    req.session.originalUrl = null;
    res.redirect(originalUrl);
  }).catch((err) => {
    console.log(err);
    resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
  });
};

// 处理来自微信的登录
exports.loginGetFromWeChat = function (req, res) {
  const openId = req.query.openId || '';
  const resUtil = new HttpSend(req, res);

  // 参数验证
  if (!openId) {
    resUtil.sendJson(constants.HTTP_FAIL, '获取微信相关信息失败');
    return;
  }

  Model.User.findOne({ where: { openId } }).then((responseUser) => {
    if (!responseUser || !responseUser.dataValues) {
      req.session.user = { openId };
      const registerUrl = `${config.serverHost}:${config.serverPort}/auth/register`;
      res.redirect(registerUrl);
      return;
    }

    req.session.user = {
      phone: responseUser.dataValues.phone,
      userName: responseUser.dataValues.userName,
      createdAt: responseUser.dataValues.createdAt,
      userId: responseUser.dataValues.userId,
      openId: responseUser.dataValues.openId,
    };

    // 如果有跳转前页面，先进入
    const originalUrl = req.session.originalUrl || `${config.serverHost}:${config.serverPort}/`;
    req.session.originalUrl = null;
    res.redirect(originalUrl);
  }).catch((err) => {
    console.log(err);
    resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
  });
};

// 登录请求主入口
exports.loginPost = function (req, res) {
  const weChatFlag = exports.isFromWeChat(req);
  if (weChatFlag) {
    // 跳转 获取用户授权的code  微信不接受80端口以外的回调
    const api = new OAuth(config.weChatConfig.appId, config.weChatConfig.appSecret);
    const weChatUrl = api.getAuthorizeURL(`${config.serverHost}/auth/weChatCode`, '', 'snsapi_base');
    res.redirect(weChatUrl);
  } else {
    exports.loginPostFromOther(req, res);
  }
};

// 获取用户openId
exports.weChatCodeGet = function (req, res) {
  const code = req.query.code || '';
  const api = new OAuth(config.weChatConfig.appId, config.weChatConfig.appSecret);
  api.getAccessToken(code, (err, result) => {
    if (err || !result || !result.data) {
      res.end(result.errCode);
    } else {
      req.query.openId = result.data.openid || '';
      exports.loginGetFromWeChat(req, res);
    }
  });
};

// 登出请求
exports.logoutGet = function (req, res) {
  req.session.destroy();
  res.redirect(`${config.serverHost}:${config.serverPort}`);
};

// 中间件：判断是否已经登录
exports.isLogin = function (req, res, next) {
  // const userInfo = req.session.user || {};
  //
  // // 记载用户的起始url，方便登录/注册后跳转
  // const originalUrl = url.format({
  //   protocol: req.protocol,
  //   host: req.get('host'),
  //   pathname: req.originalUrl,
  // });
  // req.session.originalUrl = originalUrl;
  //
  // if (!userInfo || !userInfo.uid) {
  //   res.redirect(`${config.serverHost}:${config.serverPort}/auth/login`);
  // } else {
  //   next();
  // }
  req.session.user = {
    phone: '18721586265',
    userName: 'test1',
    createdAt: '2017-09-27 11:17:06',
    userId: '1',
    openId: 'akshuidhoqhewio',
  };
  next();
};

// 判断请求是否来自微信客户端
exports.isFromWeChat = function (req) {
  const ua = req.header('user-agent').toLowerCase();
  const flags = ua.match(/MicroMessenger/i);
  if (flags && flags[0] === 'micromessenger') {
    return true;
  }
  return false;
};


exports.checkSignature = function (req, res) {
  const token = config.weChatConfig.token || '';
  const timestamp = req.query.timestamp || '';
  const nonce = req.query.nonce || '';
  const signature = req.query.signature || '';
  const echostr = req.query.echostr || '';
  const key = [token, timestamp, nonce].sort().join('');
  // 将token （自己设置的） 、timestamp（时间戳）、nonce（随机数）三个参数进行字典排序
  const sha1 = require('crypto').createHash('sha1');
  // 将上面三个字符串拼接成一个字符串再进行sha1加密
  sha1.update(key);
  const result = sha1.digest('hex') === signature;
  if (result) {
    res.end(echostr);
  } else {
    res.end(result);
  }
};

