module.exports = {
  // development configuration options
  serverPort: 3000,
  serverHost: 'http://localhost',
  sessionSecret: 'xsm_development_secret',

  // mongodb config
  mongoUrl: 'mongodb://localhost/virus_source_app',

  // mysql config
  mysqlConfig: {
    host: '127.0.0.1',
    port: 3306,
    database: 'virus_source_app',
    user: 'root',
    password: 'root',
  },

  // redis config
  redisConfig: {
    host: '127.0.0.1',
    port: '6379',
    pass: '',
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
};