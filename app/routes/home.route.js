const router = require('express').Router();
const homeController = require('../controllers/index.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/home';
router.get('/dailyData', authController.isLogin, homeController.getDailyData);

module.exports = function (app) {
  app.use(prefix, router);
};
