const router = require('express').Router();
const shopController = require('../controllers/shop.controller');
const userController = require('../controllers/user.controller');

const prefix = '/external';
// 购买完成后，商城服务器请求用
router.post('/purchaseRecord', shopController.addPurchaseRecord);
// 积分商城兑换，扣除积分
router.post('/pointRecord', userController.exchangePoints);


module.exports = function (app) {
  app.use(prefix, router);
};
