module.exports = {
  // production configuration options
  serverPort: 9000,
  serverHost: 'http://localhost',
  sessionSecret: 'xsm_production_secret',

  // mysql config
  mysqlConfig: {
    host: '127.0.0.1',
    port: 3306,
    database: 'virus_source_app',
    username: 'root',
    password: 'root',
  },

  // redis config
  redisConfig: {
    host: '127.0.0.1',
    port: '6379',
    password: '',
    ttl: 1800,
    logErrors: true,
  },

  // ali dayu config
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
    token: 'wangyg',
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
    // 申请的空间名
    bucket: 'wyg569983202',
  },
};
