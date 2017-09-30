const constants = require('../../config/constants');
const redisClient = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');
const Model = require('../models/index');

exports.index = function (req, res, next) {
  // 资讯查找方式  按热门/按最新
  const orderType = parseInt(req.query.orderType, 0) || constants.HOT_NEWS;
  // 资讯内容分类  按领域分类/全部
  const contextType = parseInt(req.query.contextType, 0) || constants.CONTEXT_TOTAL;
  // 分页
  const page = req.query.page || 1;
  // 分页中每页的最大数量
  const limit = 10;

  const mainFunction = async () => {
    try {
      let newsInfos = [];
      const newLists = [];
      if (orderType === constants.HOT_NEWS) {
        // 热门的规则 目前按照当月浏览量排序
        const currentMonth = new Date().getMonth() + 1;
        const rangeKey = redisUtil.getRedisPrefix(5, `month:${currentMonth}`);
        const rankList = redisClient.multi().zrange(rangeKey, 'totalNum').execAsync();
      } else {
        // 最新的规则 目前按照创建时间排序
        const conditions = {
          order: [['newsId', 'DESC']],
          offset: limit * (page - 1),
          limit,
        };
        if (contextType !== constants.CONTEXT_TOTAL) {
          conditions.where = { type: contextType };
        }
        newsInfos = await Model.News.findAll(conditions);
      }

      // 并发查询每个资讯的点赞数和访问数
      const getNewsPromises = newsInfos.map(async (newsInfo) => {
        const pvKey = redisUtil.getRedisPrefix(1, newsInfo.dataValues.newsId);
        const thumbUpKey = redisUtil.getRedisPrefix(3, newsInfo.dataValues.newsId);
        const [pvNum, thumbUpNum] = await Promise.all([
          redisClient.multi().hget(pvKey, 'totalNum').execAsync(),
          redisClient.multi().hget(thumbUpKey, 'totalNum').execAsync(),
        ]);

        return {
          newsId: newsInfo.dataValues.newsId,
          redirectUrl: newsInfo.dataValues.redirectUrl,
          type: newsInfo.dataValues.type,
          title: newsInfo.dataValues.title,
          introduction: newsInfo.dataValues.introduction,
          imgUrl: newsInfo.dataValues.imgUrl,
          createdAt: newsInfo.dataValues.createdAt,
          pv: parseInt(pvNum[0], 0) || 0,
          thumbUp: parseInt(thumbUpNum[0], 0) || 0,
        };
      });

      // 将并发的结果按照之前的顺序保存
      for (const newsPromise of getNewsPromises) {
        const info = await newsPromise;
        newLists.push(info);
      }

      res.render('index', { title: 'index page', newLists });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  mainFunction();
};

exports.getNewsDetailById = function (req, res) {
  res.render('index', { title: 'index page' });
};
