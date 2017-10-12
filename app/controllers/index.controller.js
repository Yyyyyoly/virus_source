const redisClient = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');
const moment = require('moment');

// 查询每日数据总量统计
exports.dataStatistics = (userId, date = moment.format('YYYYMMDD')) => {

};

// 首页
exports.index = (req, res, next) => {
  const userId = req.session.user.userId || 0;
  if (!userId) {
    const error = new Error('请先登录');
    next(error);
  }

  const mainFunction = async () => {
    try {
      // 查询用户的佣金总额
      const commissionKey = redisUtil.getRedisPrefix(5);
      const commissionNum = await redisClient.hgetAsync(commissionKey, userId);

      const datas = await exports.dataStatistics(userId);
      res.render('index', { commissionNum, datas });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};
