module.exports = {
  // development configuration options
  serverPort: 3000,
  serverHost: 'http://118.31.16.48',
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
    password: '',
    ttl: 1800,
    db: 0,
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
    token: 'wangyg',
  },
};
