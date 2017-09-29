const redis = require('redis');
const bluebird = require('bluebird');
const config = require('./config');

// 目前:
// redis-session存在0库  这个主要存储session
// 其余业务数据记录在1库
module.exports = function (type) {
  const redisConfig = config.redisConfig || { host: '127.0.0.1', port: '6379' };
  if (type) {
    redisConfig.db = 1;
  } else {
    redisConfig.db = 0;
  }

  const client = redis.createClient(redisConfig);

  bluebird.promisifyAll(redis.RedisClient.prototype);

  bluebird.promisifyAll(redis.Multi.prototype);

  client.on('error', (err) => {
    console.log(`Error: ${err}`);
  });

  return client;
};
