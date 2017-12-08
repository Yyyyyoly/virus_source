const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const logUtil = require('../app/utils/log.util');

// local require
const config = require('./config');

module.exports = function () {
  const app = express();

  // view engine setup.
  app.set('views', path.join(__dirname, '../app/views'));
  app.set('view options', { debug: true });
  app.set('view engine', 'pug');

  // log when development,
  // compress when production.
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    // 因为pm2中不支持按日期分割日志，为了后续生产环境出bug便于查询，决定加入log4js
    app.use(logUtil.getLog4Js().connectLogger(
      logUtil.getLogger('infoLogger'),
      { format: ':remote-addr :method :url :status :response-time ms' },
    ));
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  // app.use(session({ saveUninitialized: true, resave: true, secret: config.sessionSecret }));
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret,
    store: new RedisStore(config.redisConfig), // 利用redis存储session
  }));

  // always last, but before user middleware.
  app.use(express.static(path.join(__dirname, '../public/')));
  app.locals.asset = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/my-manifest.json')));

  // flash
  require('../app/routes/flash.route')(app);

  // api route
  // mount api before csrf
  require('../app/routes/api.route')(app);

  // csrf
  app.use(csurf({ cookie: true }));
  require('../app/routes/csrf.route')(app);

  // register user routes here.
  require('../app/routes/auth.route')(app);
  require('../app/routes/verify.route')(app);
  require('../app/routes/index.route')(app);
  require('../app/routes/home.route')(app);
  require('../app/routes/shop.route')(app);
  require('../app/routes/news.route')(app);
  require('../app/routes/user.route')(app);
  require('../app/routes/test.route')(app);

  // catch the 404 and render the 404 page.
  app.use((req, res) => {
    res.status(404);
    res.render('404');
  });

  // catch csrf error
  app.use((err, req, res, next) => {
    if (err.code !== 'EBADCSRFTOKEN') {
      next(err);
    } else {
      // handle CSRF token errors here
      res.status(403);
      res.send('error with csrf');
    }
  });

  // error handler,
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.log(err.toString());
    res.status(err.status || 500);
    res.render('500', { error: err.toString() });
  });

  return app;
};
