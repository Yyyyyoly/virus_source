process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./config/config');
const models = require('./app/models');
const app = require('./config/express')();

models.sequelize.sync().then(function () {
  app.listen(config.serverPort, function () {
    console.log(`Server running at ${config.serverHost}:${config.serverPort}`);
  });
});


