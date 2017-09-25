const router = require('express').Router();
const indexController = require('../controllers/index.controller');

const prefix = '/';
router.get('/', indexController.index);
router.get('/instruction', indexController.instruction);
router.get('/customer-service', indexController.customerService);
router.get('/about', indexController.about);

module.exports = function (app) {
  app.use(prefix, router);
};
