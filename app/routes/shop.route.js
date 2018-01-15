const router = require('express').Router();
const shopController = require('../controllers/shop.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/mall';
// 此版本不包含商城，所以这里注释掉
// router.get('/list', authController.isLogin, shopController.getProductJsonList);
// router.get('/search', authController.isLogin, shopController.searchProduct);
// router.get('/product/:productId', authController.isLogin, shopController.getDetailsById);
// router.get('/purchase', authController.isLogin, shopController.redirectToShopServer);


module.exports = function (app) {
  app.use(prefix, router);
};
