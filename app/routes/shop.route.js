const router = require('express').Router();
const shopController = require('../controllers/shop.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/mall';
router.get('/search', authController.isLogin, shopController.searchProduct);
router.get('/category', authController.isLogin, shopController.searchProductByCategory);
router.get('/product/:productId', authController.isLogin, shopController.searchProductById);
router.get('/purchase', authController.isLogin, shopController.redirectToShopServer);

// 购买完成后，商城服务器请求用
router.post('/purchaseRecord', shopController.addPurchaseRecord);


module.exports = function (app) {
  app.use(prefix, router);
};
