const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/user';
router.get('/userCommission', authController.isLogin, userController.commissionDetails);
router.get('/withdrawCommission', authController.isLogin, userController.withdrawPage);
router.post('/withdrawCommission', authController.isLogin, userController.withdraw);

module.exports = function (app) {
  app.use(prefix, router);
};
