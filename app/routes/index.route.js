const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const indexController = require('../controllers/index.controller');
const shopController = require('../controllers/shop.controller');
const newsController = require('../controllers/news.controller');
const userController = require('../controllers/user.controller');

const prefix = '/';
router.get('/', authController.isLogin, indexController.index);
router.get('/home', authController.isLogin, indexController.index);
router.get('/mall', authController.isLogin, shopController.index);
router.get('/news', authController.isLogin, newsController.index);
router.get('/user', authController.isLogin, userController.index);

module.exports = function (app) {
  app.use(prefix, router);
};
