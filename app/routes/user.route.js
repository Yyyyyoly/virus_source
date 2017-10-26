const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/user';
router.get('/commission', authController.isLogin, userController.commissionDetails);
router.get('/commission/withdraw', authController.isLogin, userController.withdrawPage);
router.post('/commission/withdraw', authController.isLogin, userController.withdraw);

router.get('/bonusPoint', authController.isLogin, userController.bonusPointDetails);
router.get('/bonusPoint/dayLog', authController.isLogin, userController.bonusPointDetailsByDay);
router.get('/bonusPoint/idLog', authController.isLogin, userController.qryDetailsByRecordId);

router.get('/advice', authController.isLogin, userController.getAdvicePage);
router.post('/advice', authController.isLogin, userController.giveAdvice);

// 绑定手机号
router.get('/phone', authController.isLogin, userController.renderBindPage);
router.post('/phone', authController.isLogin, userController.bindPhone);

module.exports = function (app) {
  app.use(prefix, router);
};
