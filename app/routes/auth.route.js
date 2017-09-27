const router = require('express').Router();
const authController = require('../controllers/auth.controller');

const prefix = '/auth';
router.get('/register', authController.registerGet);
router.post('/register', authController.registerPost);
router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);
router.get('/logout', authController.logoutGet);
router.get('/weChatCode', authController.weChatCodeGet);

router.get('/bindWechat', authController.checkSignature);
module.exports = function (app) {
  app.use(prefix, router);
};
