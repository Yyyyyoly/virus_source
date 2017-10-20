const router = require('express').Router();
const homeController = require('../controllers/index.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/home';
router.get('/dailyData', authController.isLogin, homeController.getDailyData);
router.get('/rankListDetails/:type', authController.isLogin, homeController.getRankList);
router.get('/lineChartDetails/:type', authController.isLogin, homeController.getLineChart);

module.exports = function (app) {
  app.use(prefix, router);
};
