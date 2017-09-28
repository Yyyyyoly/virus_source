const router = require('express').Router();
const shopController = require('../controllers/shop.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/mall';
router.get('/search', authController.isLogin, shopController.searchProduct);

module.exports = function (app) {
  app.use(prefix, router);
};
