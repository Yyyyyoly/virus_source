module.exports = {
  // production configuration options
  serverPort: 9000,
  serverHost: 'https://share.medsci-tech.com',
  sessionSecret: 'xsm_production_secret',

  // mysql config
  mysqlConfig: {
    host: 'rm-2ze62b8v9ox9m35k7o.mysql.rds.aliyuncs.com',
    port: 3306,
    database: 'virus_source',
    username: 'virus_source',
    password: 'virus_source_123$%^',
  },

  // redis config
  redisConfig: {
    host: 'r-2zebafe77a6fd114.redis.rds.aliyuncs.com',
    port: '6379',
    password: 'xuLU5900',
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
    appId: 'wx3ae6e4b87579e542',
    appSecret: '2077caf7478e9a00ce4854b2a7c98e99',
    token: 'medsci',
    encodingAESKey: 'F3LIW8XvsHH41nCLcKCSGufnCfKNdLxqaYMM5TjelgV',
  },

  // shop server config
  shopServerConfig: {
    host: 'http://shop.medsci-tech.com',
    port: 80,
    privateKey: 'medsci-tech-shop-server',
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
