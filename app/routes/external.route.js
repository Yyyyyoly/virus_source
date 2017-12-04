const router = require('express').Router();
const shopController = require('../controllers/shop.controller');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

// 第三方api调用  无csrf
const prefix = '/external';
// 购买完成后，商城服务器请求用
router.post('/purchaseRecord', shopController.addPurchaseRecord);
// 积分商城兑换，扣除积分
router.post('/pointRecord', userController.exchangePoints);


// 微信底部菜单增加接口
router.post('/weChat/menuCreate', authController.menuCreate);
// 微信底部菜单删除
router.post('/weChat/menuDelete', authController.menuDelete);


module.exports = function (app) {
  app.use(prefix, router);
};
