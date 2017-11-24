const router = require('express').Router();
const shopController = require('../controllers/shop.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/mall';
router.get('/search', authController.isLogin, shopController.searchProduct);
router.get('/category', authController.isLogin, shopController.searchProductByCategory);
router.get('/product/:productId', authController.isLogin, shopController.searchProductById);
router.get('/purchase', authController.isLogin, shopController.redirectToShopServer);


module.exports = function (app) {
  app.use(prefix, router);
};
