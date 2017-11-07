const router = require('express').Router();
const homeController = require('../controllers/index.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/home';
router.get('/dailyData', authController.isLogin, homeController.getDailyData);

router.get('/details/:type', authController.isLogin, homeController.renderDetails);
router.get('/rankListDetails', authController.isLogin, homeController.getRankList);
router.get('/lineChartDetails', authController.isLogin, homeController.getLineChart);

router.get('/strategy', authController.isLogin, homeController.renderStrategy);

module.exports = function (app) {
  app.use(prefix, router);
};
