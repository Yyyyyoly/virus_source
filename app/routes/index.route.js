const router = require('express').Router();
const indexController = require('../controllers/index.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/';
router.get('/', authController.isLogin, indexController.index);
router.get('/instruction', authController.isLogin, indexController.instruction);
router.get('/service', authController.isLogin, indexController.service);
router.get('/about', authController.isLogin, indexController.about);

module.exports = function (app) {
  app.use(prefix, router);
};
