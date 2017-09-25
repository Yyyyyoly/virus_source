const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
  mongoose.Promise = global.Promise;
  const mongodb = mongoose.connect(config.mongoUrl, { useMongoClient: true });

  // register models here

  return mongodb;
};
