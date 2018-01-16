const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const indexController = require('../controllers/index.controller');
const personController = require('../controllers/personNews.controller');
const newsController = require('../controllers/news.controller');
const userController = require('../controllers/user.controller');

const prefix = '/';
router.get('/', authController.isLogin, indexController.index);
// router.get('/mall', authController.isLogin, shopController.index);
router.get('/person_news', authController.isLogin, authController.isBindPhone, personController.index);
router.get('/news', authController.isLogin, newsController.index);
router.get('/user', authController.isLogin, userController.index);

module.exports = function (app) {
  app.use(prefix, router);
};
