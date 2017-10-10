const router = require('express').Router();
const newsController = require('../controllers/news.controller');

const prefix = '/news';
// 资讯相关操作
router.get('/details/:newsId', newsController.getNewsDetailById);
router.post('/details/thumb', newsController.thumbUpNewsById);
router.post('/details/comment', newsController.commentNewsById);

// 自测题相关操作
router.get('/tests/:newsId', newsController.getTestDetailById);
router.post('/tests/:newsId', newsController.finishTestById);

module.exports = function (app) {
  app.use(prefix, router);
};
