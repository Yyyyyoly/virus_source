module.exports = {
  // development configuration options
  serverPort: 3000,
  serverHost: 'http://share.medsci-tech.com',
  // serverHost: 'http://localhost',
  sessionSecret: 'xsm_development_secret',

  // mysql config
  mysqlConfig: {
    host: 'rm-2ze62b8v9ox9m35k7o.mysql.rds.aliyuncs.com',
    port: 3306,
    database: 'virus_source_app',
    username: 't_virus_source',
    password: 'test_123',
  },

  // redis config
  redisConfig: {
    host: 'r-2zebafe77a6fd114.redis.rds.aliyuncs.com',
    port: '6379',
    password: 'xuLU5900',
    ttl: 1800,
    logErrors: true,
  },

  // ali dayu message config
  messageConfig: {
    accessKeyId: 'LTAIFC2edkuCup8n',
    secretAccessKey: 'P1fm0jjHJqDPlL892Dcjr0rGnqo2xb',
    MessageTemplete: 'SMS_94765019',
    MessageSignName: '迈德科技',
  },

  // weChat config
  weChatConfig: {
    appId: 'wxb7e964d18e56c250',
    appSecret: '7a4f11e20bc12b5aa16c06879108680f',
    token: 'medsci',
    encodingAESKey: 'F3LIW8XvsHH41nCLcKCSGufnCfKNdLxqaYMM5TjelgV',
  },

  // shop server config
  shopServerConfig: {
    host: 'http://localhost',
    port: 8080,
    privateKey: 'xsm_development_secret',
  },

  // qiniu config
  qiNiuConfig: {
    accessKey: 'mrFUPeTjAbXn6eYl-K8ydEUW4EBV10Rc4DojZXbA',
    secretKey: '0q9mSTZgKQtfQEZuILfiK44LXuvrYkdpACkTFEoY',
    upHost: 'qiniu.zone.Zone_z0',
    bucket: 'wyg569983202',
    showLink: 'http://oybluf8g8.bkt.clouddn.com',
  },
};
