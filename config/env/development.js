module.exports = {
  // development configuration options
  serverPort: 3000,
  serverHost: 'http://localhost',
  sessionSecret: 'xsm_development_secret',

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
    password: 'root',
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
    appId: 'wx3ae6e4b87579e542',
    appSecret: '2077caf7478e9a00ce4854b2a7c98e99',
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
