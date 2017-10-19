const router = require('express').Router();
const newsController = require('../controllers/news.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/news';
// 资讯相关操作
router.get('/details/:newsId', authController.isLogin, newsController.getNewsDetailById);
router.post('/details/thumb', authController.isLogin, newsController.thumbUpNewsById);
router.post('/details/comment', authController.isLogin, newsController.commentNewsById);

// 自测题相关操作
router.get('/tests/:newsId', authController.isLogin, newsController.getTestDetailById);
router.post('/tests/:newsId', authController.isLogin, newsController.finishTestById);

module.exports = function (app) {
  app.use(prefix, router);
};
