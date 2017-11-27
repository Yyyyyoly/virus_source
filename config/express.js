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
  app.use(csurf({ cookie: true }));

  // register external routes here.
  require('../app/routes/external.route')(app);

  // csrf
  require('../app/routes/csrf.route')(app);
  // flash
  require('../app/routes/flash.route')(app);

  // always last, but before user middleware.
  app.use(express.static(path.join(__dirname, '../public/')));
  app.locals.asset = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/my-manifest.json')));


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

  // error handler,
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('500', { error: err.toString() });
  });

  return app;
};
