const constants = {
  // redis key前缀，更换项目时修改，保证不要和之前的重复
  REDIS_PREFIX: 'med',

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

  // 资讯搜索类型 热门
  HOT_NEWS: 1,
  // 资讯搜索类型 最新
  LATEST_NEWS: 2,

  // 资讯内容类型 全部
  CONTEXT_TOTAL: 1,

  // 资讯类型 普通新闻
  TYPE_NEWS: 1,
  // 资讯类型 自测题
  TYPE_ESTIMATE: 2,

  // 资讯分类id对应列表   目前写死
  NEWS_CLASS_LIST: {
    0: '全部', 1: '痛风', 2: '糖尿病', 3: '甲状腺',
  },
};

module.exports = constants;
