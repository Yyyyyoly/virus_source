const router = require('express').Router();
const shopController = require('../controllers/shop.controller');

const prefix = '/mall';
router.get('/search', shopController.searchProduct);
router.get('/category/:categoryId', shopController.searchProductByCategory);
router.get('/product/:productId', shopController.searchProductByCategory);
router.get('/purchase/:productId', shopController.redirectToShopServer);

// 购买完成后，商城服务器请求用
router.post('/purchaseRecord', shopController.addPurchaseRecord);


module.exports = function (app) {
  app.use(prefix, router);
};
