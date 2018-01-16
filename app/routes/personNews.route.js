const router = require('express').Router();
const personController = require('../controllers/personNews.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/person_news';
const middlewares = [
  authController.isLogin,
  authController.isBindPhone,
];

router.get('/list', middlewares, personController.getNewsListByCondition);

// 资讯相关操作
router.get('/details/:newsId', middlewares, personController.getNewsDetailById);
router.get('/details/operator/thumb', middlewares, personController.thumbUpNewsById);
router.post('/details/operator/comment', middlewares, personController.commentNewsById);

// 微信分享成功后回调
router.post('/share/:newsId', middlewares, personController.shareNewsById);

module.exports = function (app) {
  app.use(prefix, router);
};
