const Model = require('../models/index');
const HttpSend = require('../utils/http.util');
const config = require('../../config/config');
const constants = require('../../config/constants');
const url = require('url');
const tokenRedis = require('../../config/redis')(2);
const dataRedis = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');
const qiniu = require('qiniu');
const weChatUtil = require('../utils/wechat.util');
const logger = require('../app/utils/log.util').getLogger(constants.LOGGER_LEVEL);

const api = weChatUtil.api();
const baseApi = weChatUtil.baseApi();

// 自动登陆、自动注册
const autoLoginAndRegister = (req, res) => {
  const openId = req.query.openId || '';
  const userName = req.query.userName || '';
  const sex = req.query.sex || 1;
  const province = req.query.province || '湖北';
  const city = req.query.city || '武汉';
  const country = req.query.country || '中国';
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
      // 是否需要更新redis中存储的用户缩略信息，只在新注册或发生关键信息变化时更新
      let updateRedisBrief = false;

      // 不存在则自动注册
      if (!userInfo || !userInfo.dataValues) {
        updateRedisBrief = true;
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
      } else if (userName !== userInfo.dataValues.userName || sex !== userInfo.dataValues.sex ||
        province !== userInfo.dataValues.province || city !== userInfo.dataValues.city ||
        country !== userInfo.dataValues.country || headImgUrl !== userInfo.dataValues.headImgUrl
      ) {
        if (userName !== userInfo.dataValues.userName ||
          headImgUrl !== userInfo.dataValues.headImgUrl) {
          updateRedisBrief = true;
        }
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

      if (updateRedisBrief) {
        // 异步记录一下用户的昵称和头像缩略信息，
        // 以免某些排行榜需要显示下级头像、昵称之类
        const briefUserKey = redisUtil.getRedisPrefix(25);
        dataRedis.hsetAsync(
          briefUserKey,
          userInfo.dataValues.userId,
          JSON.stringify({
            userName: userInfo.dataValues.userName,
            headImgUrl: userInfo.dataValues.headImgUrl,
          }),
        );
      }

      // 如果有跳转前页面，先进入
      const originalUrl = req.session.originalUrl || `${config.serverHost}/`;

      req.session.originalUrl = null;
      res.redirect(originalUrl);
    } catch (err) {
      logger.info(err);
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
    const weChatUrl = api.getAuthorizeURL(`${config.serverHost}/auth/weChat/code`, '', 'snsapi_userinfo');
    res.redirect(weChatUrl);
  } else {
    const error = new Error('请从微信浏览器登入');
    logger.info('请从微信浏览器登入');
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
      const options = {
        openid: result.data.openid, // 必须
        lang: 'zh_CN', // zh_CN 简体，zh_TW 繁体，en 英语
      };
      api.getUser(options, (error, userInfo) => {
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
  //   openId: 'oDCXE0kspqJuLMT7JacQIhoxih6I',
  //   userName: '新君同学',
  //   sex: 1,
  //   province: 'Hubei',
  //   city: 'Wuhan',
  //   country: 'China',
  //   headImgUrl: 'http://wx.qlogo.cn/mmhead/DYAIOgq83eoU7Zpe8yvbIMGLwy5s610uJpE1YAD3eGI6lzZpoiaLZ6A/0',
  // };
  // req.session.user = {
  //   userId: 'o82p90sZgb-aPqbUC7ejWUitE_Fg',
  //   openId: 'oDCXE0nnqjKT02Gt5GA_zAwejGLQ',
  //   userName: '叫我女王大人',
  //   sex: 2,
  //   province: 'Hubei',
  //   city: 'Wuhan',
  //   country: 'China',
  //   headImgUrl: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM61WMU23LmA22f7BZPc8TJpNbmaUEDjYeKZcianIHUeNiaw/0',
  // };
  // const briefUserKey = redisUtil.getRedisPrefix(25);
  // dataRedis.hsetAsync(
  //   briefUserKey,
  //   req.session.user.userId,
  //   JSON.stringify({
  //     userName: req.session.user.userName,
  //     headImgUrl: req.session.user.headImgUrl,
  //   }),
  // );
  const userInfo = req.session.user || {};

  // 记载用户的起始url，方便登录/注册后跳转
  const originalUrl = decodeURIComponent(url.format({
    protocol: constants.PROTOCOL,
    host: req.hostname,
    pathname: req.originalUrl,
  }));
  req.session.originalUrl = originalUrl;

  if (!userInfo || !userInfo.userId) {
    res.redirect(`${config.serverHost}/auth/login`);
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

// 分享好友，生成二维码
exports.getQrCodePage = (req, res, next) => {
  const userId = req.session.user.userId || '';
  const httpUtil = new HttpSend(req, res);

  const mainFunction = async () => {
    const ticketKey = redisUtil.getRedisPrefix(996, userId);
    const ticket = await tokenRedis.getAsync(ticketKey);
    if (!ticket) {
      baseApi.createTmpQRCode(1, 86400, (err, data) => {
        if (err) {
          logger.info(err);
          next(err);
        } else {
          tokenRedis.setAsync(ticketKey, data.ticket, 'EX', 86400);
          const qrCodeUrl = baseApi.showQRCodeURL(data.ticket);
          httpUtil.render('user/share', { title: '分享给好友', qrCodeUrl });
        }
      });
    } else {
      const qrCodeUrl = baseApi.showQRCodeURL(ticket);
      httpUtil.render('user/share', { title: '分享给好友', qrCodeUrl });
    }
  };
  mainFunction();
};

// 微信 增加底部菜单
exports.menuCreate = (req, res) => {
  const resUtil = new HttpSend(req, res);
  const menu = {
    button: [
      {
        name: '每日数据',
        type: 'view',
        url: `${config.serverHost}`,
      },
      {
        name: '我要分享',
        sub_button: [
          {
            name: '热文资讯',
            type: 'view',
            url: `${config.serverHost}/news`,
          },
          {
            name: '健康商城',
            type: 'view',
            url: `${config.serverHost}/mall`,
          },
        ],
      },
      {
        name: '个人中心',
        type: 'view',
        url: `${config.serverHost}/user`,
      },
    ],
  };
  baseApi.createMenu(menu, (err, result) => {
    if (err || result.errcode) {
      resUtil.sendJson(constants.HTTP_FAIL, err || result.errmsg);
    } else {
      resUtil.sendJson(constants.HTTP_SUCCESS, err || result.errmsg);
    }
  });
};

exports.menuDelete = (req, res) => {
  const resUtil = new HttpSend(req, res);
  baseApi.removeMenu((err, result) => {
    if (err || result.errcode) {
      resUtil.sendJson(constants.HTTP_FAIL, err || result.errmsg);
    } else {
      resUtil.sendJson(constants.HTTP_SUCCESS, err || result.errmsg);
    }
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

