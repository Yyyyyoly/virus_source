const router = require('express').Router();

const prefix = '/test';
router.get('/index', (req, res) => {
  res.render('index/index');
});
router.get('/count', (req, res) => {
  res.render('index/count');
});
router.get('/strategy', (req, res) => {
  res.render('index/strategy');
});
router.get('/news', (req, res) => {
  res.render('news/news');
});
router.get('/news-detail', (req, res) => {
  res.render('news/news-detail');
});
router.get('/user', (req, res) => {
  res.render('user/user');
});
router.get('/commission', (req, res) => {
  res.render('user/commission');
});
router.get('/credits', (req, res) => {
  res.render('user/credits');
});
router.get('/credits-detail', (req, res) => {
  res.render('user/credits-detail');
});
router.get('/credits-list', (req, res) => {
  res.render('user/credits-list');
});
router.get('/withdraw', (req, res) => {
  res.render('user/withdraw');
});

module.exports = function (app) {
  app.use(prefix, router);
};
