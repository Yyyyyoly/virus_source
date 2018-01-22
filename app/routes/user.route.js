const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/user';
// 积分相关
router.get('/bonusPoint', authController.isLogin, userController.bonusPointDetails);
router.get('/bonusPoint/dayLog/render', authController.isLogin, userController.renderBonusPointDetailsByDay);
router.get('/bonusPoint/dayLog/json', authController.isLogin, userController.jsonBonusPointDetailsByDay);
router.get('/bonusPoint/idLog', authController.isLogin, userController.qryDetailsByRecordId);

// 意见和反馈
router.get('/advice', authController.isLogin, userController.getAdvicePage);
router.post('/advice', authController.isLogin, userController.giveAdvice);

// 分享给好友
router.get('/qrCode', authController.isLogin, authController.getQrCodePage);

// 绑定手机号
router.get('/phone', authController.isLogin, userController.renderBindPage);
router.post('/phone', authController.isLogin, userController.bindPhone);

module.exports = function (app) {
  app.use(prefix, router);
};
