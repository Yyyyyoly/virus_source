const globalRedis = require('../../config/redis')(3);
const redisUtil = require('../utils/redis.util');
const constants = require('../../config/constants');
const fs = require('fs');
const moment = require('moment');
const logger = require('../app/utils/log.util').getLogger(constants.LOGGER_LEVEL);

// 积分推送至汇总key里，以便于积分商城的查询
exports.addGlobalPoint = async (userId, newTotalNum) => {
  const redisKey = redisUtil.getRedisPrefix(1111, userId);
  const result = await globalRedis.hsetAsync(redisKey, constants.REDIS_PREFIX, newTotalNum);
  // 更新成功后，覆盖返回0，新增返回1
  if (parseInt(result, 0) !== 1 && parseInt(result, 0) !== 0) {
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const record = `${date}  userId:${userId}  newTotalNum:${newTotalNum} \n`;
    fs.writeFile(`${__dirname}/../../logs/global_point.txt`, record, { flag: 'a' }, (err) => {
      if (err) {
        logger.info(err);
      }
    });
  }
};
