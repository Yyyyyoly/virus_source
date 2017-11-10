const Model = require('../models/index');
const HttpSend = require('../utils/http.util');
const config = require('../../config/config');
const constants = require('../../config/constants');
const WeChatAPI = require('wechat-api');
const WeChatAuth = require('wechat-oauth');
const url = require('url');
const tokenRedis = require('../../config/redis')(2);
const redisUtil = require('../utils/redis.util');
const qiniu = require('qiniu');

// 微信维护授权AccessToken的方法
const api = new WeChatAuth(
  config.weChatConfig.appId,
  config.weChatConfig.appSecret,
  (openid, callback) => {
    // 获取对应的全局token的方法
    const keys = redisUtil.getRedisPrefix(999, openid);
    tokenRedis.getAsync(keys).then((token) => {
      callback(null, JSON.parse(token));
    });
  },
  ((openid, token, callback) => {
    // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
    // 这样才能在cluster模式及多机情况下使用
    const keys = redisUtil.getRedisPrefix(999, openid);
    tokenRedis.setAsync(keys, JSON.stringify(token)).then(() => {
      callback(null);
    });
  }),
);


// 微信维护全局基础信息AccessToken的方法
const baseApi = new WeChatAPI(
  config.weChatConfig.appId,
  config.weChatConfig.appSecret,
  (callback) => {
    // 获取对应的全局token的方法
    const keys = redisUtil.getRedisPrefix(997);
    tokenRedis.getAsync(keys).then((token) => {
      callback(null, JSON.parse(token));
    });
  },
  ((token, callback) => {
    const keys = redisUtil.getRedisPrefix(997);
    tokenRedis.setAsync(keys, JSON.stringify(token)).then(() => {
      callback(null);
    });
  }),
);

// 定义微信维护jssdk ticketToken的方法
baseApi.registerTicketHandle(
  (type, callback) => {
    // 获取对应的全局ticket的方法
    const keys = redisUtil.getRedisPrefix(998, type);
    tokenRedis.getAsync(keys).then((ticket) => {
      callback(null, JSON.parse(ticket));
    });
  },
  ((type, ticket, callback) => {
    // 设置全局ticket的方法
    const keys = redisUtil.getRedisPrefix(998, type);
    tokenRedis.setAsync(keys, JSON.stringify(ticket)).then(() => {
      callback(null);
    });
  }),
);

// 自动登陆、自动注册
const autoLoginAndRegister = (req, res) => {
  const openId = req.query.openId || '';
  const userName = req.query.userName || '';
  const sex = req.query.sex || 1;
  const province = req.query.province || 'Hubei';
  const city = req.query.city || 'Wuhan';
  const country = req.query.country || 'China';
  const headImgUrl = req.query.headImgUrl || '';
  const unionId = req.query.unionId || '';
  const resUtil = new HttpSend(req, res);

  // 参数验证
  if (!unionId) {
    resUtil.sendJson(constants.HTTP_FAIL, '获取微信相关信息失败');
    return;
  }

  const mainFunction = async () => {
    try {
      let userInfo = await Model.User.findOne({ where: { userId: unionId } });

      // 不存在则自动注册
      if (!userInfo || !userInfo.dataValues) {
        userInfo = await Model.User.create({
          userId: unionId,
          openId,
          userName,
          sex,
          province,
          city,
          country,
          headImgUrl,
        });
        // 首次进入系统，render规则说明页面
        req.session.firstTime = true;
      } else if (userName !== userInfo.dataValues.userName || sex !== userInfo.dataValues.sex ||
        province !== userInfo.dataValues.province || city !== userInfo.dataValues.city ||
        country !== userInfo.dataValues.country || headImgUrl !== userInfo.dataValues.headImgUrl
      ) {
        // 如果存在但是发生了信息变更，更新信息
        await Model.User.update({
          userName,
          sex,
          province,
          city,
          country,
          headImgUrl,
        }, { where: { userId: unionId } });
      }

      req.session.user = {
        userName: userInfo.dataValues.userName,
        createdAt: userInfo.dataValues.createdAt,
        userId: userInfo.dataValues.userId,
        openId: userInfo.dataValues.openId,
        sex: userInfo.dataValues.sex,
        province: userInfo.dataValues.province,
        city: userInfo.dataValues.city,
        country: userInfo.dataValues.country,
        headImgUrl: userInfo.dataValues.headImgUrl,
      };

      // 如果有跳转前页面，先进入
      let originalUrl = '';
      if (req.session.firstTime === true) {
        req.session.firstTime = false;
        originalUrl = req.session.originalUrl || `${config.serverHost}:${config.serverPort}/home/strategy`;
      } else {
        originalUrl = req.session.originalUrl || `${config.serverHost}:${config.serverPort}/`;
      }

      req.session.originalUrl = null;
      res.redirect(originalUrl);
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '自动登陆出错');
    }
  };

  mainFunction();
};

// 登录请求主入口
exports.login = (req, res, next) => {
  const weChatFlag = exports.isFromWeChat(req);
  if (weChatFlag) {
    // 跳转 获取用户授权的code  微信不接受80端口以外的回调
    const weChatUrl = api.getAuthorizeURL(`${config.serverHost}/auth/weChatCode`, '', 'snsapi_userinfo');
    res.redirect(weChatUrl);
  } else {
    const error = new Error('请从微信浏览器登入');
    console.log('请从微信浏览器登入');
    next(error);
  }
};

// 获取用户微信userInfo
exports.weChatCodeGet = (req, res) => {
  const code = req.query.code || '';
  api.getAccessToken(code, (err, result) => {
    if (err || !result || !result.data) {
      res.end(result.errCode);
    } else {
      api.getUser(result.data.openid, (error, userInfo) => {
        if (error || !userInfo) {
          res.end(error);
        }

        req.query.unionId = userInfo.unionid || '';
        req.query.openId = userInfo.openid || '';
        req.query.userName = userInfo.nickname || '';
        req.query.sex = userInfo.sex || 1;
        req.query.province = userInfo.province || '';
        req.query.city = userInfo.city || '';
        req.query.country = userInfo.country || '';
        req.query.headImgUrl = userInfo.headimgurl || '';
        autoLoginAndRegister(req, res);
      });
    }
  });
};

// 中间件：判断是否已经登录
exports.isLogin = (req, res, next) => {
  // req.session.user = {
  //   userId: 'o82p90mawNIGJ6lmo0vDDN9YSTtU',
  //   openId: 'od25_00ewsBeY-MbFC788-9DJh1s',
  //   userName: '新君同学',
  //   sex: 1,
  //   province: 'Hubei',
  //   city: 'Wuhan',
  //   country: 'China',
  //   headImgUrl: 'http://wx.qlogo.cn/mmhead/DYAIOgq83eoU7Zpe8yvbIMGLwy5s610uJpE1YAD3eGI6lzZpoiaLZ6A/0',
  // };
  // req.session.user = {
  //   userId: 'o82p90sZgb-aPqbUC7ejWUitE_Fg',
  //   openId: 'od25_03YZ8710e3Qja7CD1TCdTa4',
  //   userName: '叫我女王大人',
  //   sex: 2,
  //   province: 'Hubei',
  //   city: 'Wuhan',
  //   country: 'China',
  //   headImgUrl: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM61WMU23LmA22f7BZPc8TJpNbmaUEDjYeKZcianIHUeNiaw/0',
  // };
  const userInfo = req.session.user || {};

  // 记载用户的起始url，方便登录/注册后跳转
  const originalUrl = url.format({
    protocol: req.protocol,
    host: req.hostname,
    pathname: req.originalUrl,
  });

  req.session.originalUrl = originalUrl;

  if (!userInfo || !userInfo.userId) {
    res.redirect(`${config.serverHost}:${config.serverPort}/auth/login`);
  } else {
    next();
  }
};

// 判断请求是否来自微信客户端
exports.isFromWeChat = (req) => {
  const ua = req.header('user-agent').toLowerCase();
  const flags = ua.match(/MicroMessenger/i);
  if (flags && flags[0] === 'micromessenger') {
    return true;
  }
  return false;
};

// 调用微信JS-SDK时的注入
exports.getWeChatJsConfig = (req) => {
  // 获取ticket
  baseApi.getTicket((err, data) => {
    if (err || !data) {
      console.log('get ticket err');
      return {};
    }
    // 获取config
    const wxConfig = {
      debug: true,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
      ],
      url: url.format({
        protocol: req.protocol,
        host: req.hostname,
        pathname: req.originalUrl,
      }),
    };
    baseApi.getJsConfig(wxConfig, (error, result) => {
      if (err || !result) {
        console.log('get js config err');
        return {};
      }
      return result;
    });
  });
};

// 微信绑定域名时会回调的接口
exports.checkSignature = (req, res) => {
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

// 获取七牛云的上传凭证
exports.getQiNiuToken = (req, res) => {
  const resUtil = new HttpSend(req, res);
  const mac = new qiniu.auth.digest.Mac(config.qiNiuConfig.accessKey, config.qiNiuConfig.secretKey);
  const options = {
    scope: config.qiNiuConfig.bucket,
    returnBody: `{"key":"$(key)"$(key)","hash":"$(etag)","state":"SUCCESS","url":"${config.qiNiuConfig.showLink}/$(key)","title":"$(key)","original":"$(key)"}`,
  };
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken = putPolicy.uploadToken(mac);
  resUtil.sendJson(constants.HTTP_SUCCESS, '', { uploadToken });
};

