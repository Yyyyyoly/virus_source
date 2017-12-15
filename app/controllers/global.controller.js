const globalRedis = require('../../config/redis')(3);
const redisUtil = require('../utils/redis.util');
const constants = require('../../config/constants');
const fs = require('fs');
const moment = require('moment');
const logger = require('../utils/log.util').getLogger(constants.LOGGER_LEVEL);

// 积分推送至汇总key里，以便于积分商城的查询
exports.addGlobalPoint = async (userId, newTotalNum) => {
  const redisKey = redisUtil.getRedisPrefix(1111, userId);
  const result = await globalRedis.hsetAsync(redisKey, constants.REDIS_PREFIX, newTotalNum);
  // 更新成功后，覆盖返回0，新增返回1
  if (parseInt(result, 0) !== 1 && parseInt(result, 0) !== 0) {
    const record = `userId:${userId}  newTotalNum:${newTotalNum}`;
    exports.writeLog('global_point', record);
  }
};

// 通用写日志文件的方法，防止有需要记载日志文件的
exports.writeLog = async (filename, logInfos) => {
  const date = moment().format('YYYY-MM-DD HH:mm:ss');
  const record = `${date} :  ${logInfos} \n`;
  fs.writeFile(`${__dirname}/../../logs/${filename}_${date.substr(0, 10)}.log`, record, { flag: 'a' }, (err) => {
    if (err) {
      logger.info(err);
    }
  });
};
