const constants = {
  // api const
  HTTP_FAIL: 500,
  HTTP_SUCCESS: 200,

  // 短信验证码的过期时间 暂定3分钟
  MESSAGE_EXPIRE_TIME: 180000,
  // 频繁获取短信验证码的最小间隔时间 暂定5分钟
  MESSAGE_MIN_INTERVAL: 300000,
  // 最小间隔时间内，频繁获取短信验证码的最大次数 暂定3次
  MESSAGE_MAX_TIME: 3,

  // 修改密码采用的方式, 1表示通过旧密码修改
  PASSWORD_MOD_BY_OLD: 1,
  // 修改密码采用的方式, 2表示通过短信验证码修改
  PASSWORD_MOD_BY_MESSAGE: 2,
};
