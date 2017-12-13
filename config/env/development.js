module.exports = {
  // development configuration options
  serverPort: 3000,
  serverHost: 'https://localhost',
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


  // point mall config
  pointMallConfig: {
    privateKey: 'medsci-tech-share',
  },

  // qiniu config
  qiNiuConfig: {
    accessKey: 'unt5w-mSHycfoT9XPuonMFj49mu1XOcEs4pBO4vg',
    secretKey: '1Leh1VrCAXFutyg4hzSZ2vSPyNTeESrexYdc1S-H',
    upHost: 'qiniu.zone.Zone_z0',
    bucket: 'med-share',
    showLink: 'http://p025heou9.bkt.clouddn.com',
  },
};
