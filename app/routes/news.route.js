const router = require('express').Router();
const newsController = require('../controllers/news.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/newsList';
router.get('/details/:_newsId', authController.isLogin, newsController.getNewsDetailById);

module.exports = function (app) {
  app.use(prefix, router);
};
