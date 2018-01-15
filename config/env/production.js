module.exports = {
  // production configuration options
  serverPort: 7000,
  serverHost: 'http://medtong-share.medsci-tech.com',
  sessionSecret: 'xsm_production_secret',

  // mysql config
  mysqlConfig: {
    host: 'rm-2ze62b8v9ox9m35k7.mysql.rds.aliyuncs.com',
    port: 3306,
    database: 't_virus_source',
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
    //encodingAESKey: 'F3LIW8XvsHH41nCLcKCSGufnCfKNdLxqaYMM5TjelgV',
  },

  // shop server config
  shopServerConfig: {
    host: 'http://shop.medsci-tech.com',
    port: 80,
    privateKey: 'medTong-shop-server',
  },

  // point mall config
  pointMallConfig: {
    privateKey: 'medTong-share',
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
