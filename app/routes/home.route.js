const router = require('express').Router();
const homeController = require('../controllers/index.controller');
const authController = require('../controllers/auth.controller');

const prefix = '/home';
// 按照日期查询首页汇总数据
router.get('/dailyData', authController.isLogin, homeController.getDailyData);

// 查询统计详情 列表页
router.get('/details/list/:type', authController.isLogin, homeController.getListDetails);
// 查询统计详情 饼图页
router.get('/details/pie/:type', authController.isLogin, homeController.getPieDetails);

// 首页折线图按照日期查询接口
router.get('/lineChartDetails', authController.isLogin, homeController.getLineChart);

// 策略引导页面
router.get('/strategy/point', authController.isLogin, homeController.renderStrategyPoint);

module.exports = function (app) {
  app.use(prefix, router);
};
