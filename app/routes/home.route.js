const router = require('express').Router();
const homeController = require('../controllers/index.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/home';
router.get('/dailyData', authController.isLogin, homeController.getDailyData);
router.get('/dataDetails/:type', authController.isLogin, homeController.getDataDetails);
router.get('/lineChartDetails/:type', authController.isLogin, homeController.getLineChart);

module.exports = function (app) {
  app.use(prefix, router);
};
