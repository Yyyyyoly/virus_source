const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/user';
router.get('/userPassword', authController.isLogin, userController.getUserPassword);
router.post('/userPassword', authController.isLogin, userController.modUserPassword);

module.exports = function (app) {
  app.use(prefix, router);
};
