const router = require('express').Router();
const authController = require('../controllers/auth.controller');

const prefix = '/auth';
router.get('/login', authController.login);
router.get('/weChatCode', authController.weChatCodeGet);

router.get('/bindWechat', authController.checkSignature);
module.exports = function (app) {
  app.use(prefix, router);
};
