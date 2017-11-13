const router = require('express').Router();
const authController = require('../controllers/auth.controller');

const prefix = '/auth';
// 登录+自动注册
router.get('/login', authController.login);

// 微信授权后的回调函数
router.get('/weChat/code', authController.weChatCodeGet);
// 绑定微信公众号时的验证接口
router.get('/weChat/bind', authController.checkSignature);
// 微信底部菜单增加接口
router.post('/weChat/menuCreate', authController.menuCreate);

// 获取七牛云上传token的接口
router.get('/qiNiuToken', authController.isLogin, authController.getQiNiuToken);

module.exports = function (app) {
  app.use(prefix, router);
};
