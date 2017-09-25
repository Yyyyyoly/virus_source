const config = require('./config');
const Sequelize = require('sequelize');

module.exports = function () {
  const mysql = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      'dialect': 'mysql',
      'host': config.host,
      'port': config.port,
    }
  );

  return mysql;
};
