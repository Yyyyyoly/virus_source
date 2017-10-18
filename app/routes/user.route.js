const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/user';
router.get('/userPassword', authController.isLogin, userController.getUserPassword);
router.post('/userPassword', authController.isLogin, userController.modUserPassword);


router.get('/userCommission', authController.isLogin, userController.commissionDetails);
router.get('/withdrawCommission', authController.isLogin, userController.withdrawPage);
router.post('/withdrawCommission', authController.isLogin, userController.withdraw);

module.exports = function (app) {
  app.use(prefix, router);
};
