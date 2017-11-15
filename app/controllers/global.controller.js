const globalRedis = require('../../config/redis')(3);
const redisUtil = require('../utils/redis.util');
const constants = require('../../config/constants');
const fs = require('fs');
const moment = require('moment');

// 积分推送至汇总key里，以便于积分商城的查询
exports.addGlobalPoint = async (userId, changeNum) => {
  const redisKey = redisUtil.getRedisPrefix(1111, userId);
  const result = await globalRedis.hincrbyAsync(redisKey, constants.REDIS_PREFIX, changeNum);
  if (!result) {
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const record = `${date}  userId:${userId}  changeNum:${changeNum} \n`;
    fs.writeFile(`${__dirname}/../../logs/global_point.txt`, record, { flag: 'a' }, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};
