const config = require('../../config/config');
const constants = require('../../config/constants');
const WeChatAPI = require('wechat-api');
const WeChatAuth = require('wechat-oauth');
const tokenRedis = require('../../config/redis')(2);
const redisUtil = require('../utils/redis.util');
const url = require('url');

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

exports.api = () => api;
exports.baseApi = () => baseApi;

// 调用微信JS-SDK时的注入
exports.getWeChatJsConfig = req => new Promise(((resolve) => {
  // 获取config
  const wxConfig = {
    debug: false,
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
    ],
    url: decodeURIComponent(url.format({
      protocol: constants.PROTOCOL,
      host: req.hostname,
      pathname: req.originalUrl,
    })),
  };
  baseApi.getJsConfig(wxConfig, (error, result) => {
    if (error || !result) {
      console.log('get js config err');
      resolve({});
    }
    resolve(result);
  });
}));
