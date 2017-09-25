const config = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    'dialect': 'mysql',
    'host': config.host,
    'port': config.port,
  }
);

module.exports = sequelize;
