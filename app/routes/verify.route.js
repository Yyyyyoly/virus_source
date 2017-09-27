const router = require('express').Router();
const verifyController = require('../controllers/verify.controller');

const prefix = '/verify';
router.post('/sendMessage', verifyController.MessageSend);

module.exports = function (app) {
  app.use(prefix, router);
};
