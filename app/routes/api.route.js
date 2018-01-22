const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

// 第三方api调用  无csrf
const prefix = '/external';
// 积分商城兑换，扣除积分
router.post('/pointRecord', userController.exchangePoints);


// 微信底部菜单增加接口
router.post('/weChat/menuCreate', authController.menuCreate);
// 微信底部菜单删除
router.post('/weChat/menuDelete', authController.menuDelete);


module.exports = function (app) {
  app.use(prefix, router);
};
