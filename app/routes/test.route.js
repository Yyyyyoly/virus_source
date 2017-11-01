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

module.exports = function (app) {
  app.use(prefix, router);
};
