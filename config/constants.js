const constants = {
  // redis key前缀，更换项目时修改，保证不要和之前的重复
  REDIS_PREFIX: 'medTongTest',

  // 请求类型，之前用req.protocol 但是经过nginx转发后https修改为http 会造成错误，所以写在常量里
  PROTOCOL: 'http',

  // log4js 记录日志登记
  LOGGER_LEVEL: 'infoLogger',

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

  // 热文资讯内容类型 默认0为全部
  CONTEXT_TOTAL: 0,
  // 个人资讯内容类型 默认999为全部
  CONTEXT_PERSON_TOTAL: 999,

  // 资讯类型 普通新闻
  TYPE_NEWS: 1,
  // 资讯类型 自测题
  TYPE_ESTIMATE: 2,
  // 资讯类型 个人发布新闻
  TYPE_PERSON_NEWS: 3,

  // 资讯分类  id对应列表   目前写死
  NEWS_CLASS_LIST: {
    // 热文资讯分类
    OFFICIAL: {
      0: '全部', 1: '痛风', 2: '糖尿病', 3: '甲状腺', 4: '自测题',
    },
    // 个人资讯分类
    PERSONAL: {
      99: '全部', 98: '消毒棒', 97: '护足霜', 96: '清呤卫士',
    },
  },
};

module.exports = constants;
