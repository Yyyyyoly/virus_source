process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./config/config');
const http = require('http');
const models = require('./app/models');
const express = require('./config/express');

const app = express();
const server = http.createServer(app);

models.sequelize.sync().then(function () {
  server.listen(config.serverPort, function () {
    console.log(`Server running at ${config.serverHost}:${config.serverPort}`);
  });
});


