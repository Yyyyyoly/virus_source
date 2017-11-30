const log4js = require('log4js');

log4js.configure({
  appenders: {
    console: { type: 'console' }, // 控制台输出
    infoLogger: {
      type: 'dateFile',
      filename: `${__dirname}/../../logs/info`,
      pattern: '_yyyy-MM-dd.log',
      alwaysIncludePattern: true,
    },
    errLogger: {
      type: 'dateFile',
      filename: `${__dirname}/../../logs/err`,
      pattern: '_yyyy-MM-dd.log',
      alwaysIncludePattern: true,
    },
  },
  categories: {
    errLogger: { appenders: ['errLogger'], level: 'error' },
    infoLogger: { appenders: ['infoLogger'], level: 'info' },
    normal: { appenders: ['console'], level: 'info' },
    default: { appenders: ['console'], level: 'trace' },
  },
  replaceConsole: true,
  pm2: true,
});

exports.getLog4Js = function () {
  return log4js;
};

exports.getLogger = function (name = 'normal') {
  const logger = log4js.getLogger(name);
  return logger;
};
