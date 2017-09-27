process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.TZ = 'Asia/Shanghai';

const config = require('./config/config');
const models = require('./app/models');
const app = require('./config/express')();

models.sequelize.sync().then(() => {
  app.listen(config.serverPort, () => {
    console.log(`Server running at ${config.serverHost}:${config.serverPort}`);
  });
});

