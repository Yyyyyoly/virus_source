const constants = require('../../config/constants');
const redisClient = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');
const Model = require('../models/index');
const HttpSend = require('../utils/http.util');

// 根据资讯id  查询点赞总数和浏览总数
exports.getPVAndThumpById = async (newsId) => {
  const thumbUpKey = redisUtil.getRedisPrefix(1);
  const pvKey = redisUtil.getRedisPrefix(2);
  const [pvNum, thumbUpNum] = await Promise.all([
    redisClient.zscoreAsync(pvKey, newsId),
    redisClient.zscoreAsync(thumbUpKey, newsId),
  ]);

  return {
    pvNum: parseInt(pvNum[0], 0) || 0,
    thumbUpNum: parseInt(thumbUpNum[0], 0) || 0,
  };
};

// 资讯首页
exports.index = function (req, res, next) {
  // 资讯查找方式  按热门/按最新
  const orderType = parseInt(req.query.order, 0) || constants.HOT_NEWS;
  // 资讯内容分类  按领域分类/全部
  const contextType = parseInt(req.query.context, 0) || constants.CONTEXT_TOTAL;
  // 分页
  const page = req.query.page || 1;
  // 分页中每页的最大数量
  const limit = 10;

  // 按照发布时间最新查找资讯
  const findByNew = async () => {
    const conditions = {
      order: [['newsId', 'DESC']],
      offset: limit * (page - 1),
      limit,
    };
    if (contextType !== constants.CONTEXT_TOTAL) {
      conditions.where = { type: contextType };
    }
    const newsInfos = await Model.News.findAll(conditions);
    return newsInfos;
  };

  // 按照热门程度查找资讯  热门目前按照当月总浏览量排序
  const findByHot = async () => {
    const rankKey = contextType === constants.CONTEXT_TOTAL ?
      redisUtil.getRedisPrefix(2) :
      redisUtil.getRedisPrefix(2, contextType);
    const [start, end] = [(page - 1) * limit, page * limit];
    const rankList = await redisClient.zrevrangeAsync([rankKey, start, end]);

    let newsInfos = [];
    if (rankList.length) {
      const datas = await Model.News.findAll({ where: { newsId: { $in: rankList[0] } } });
      // 按照排行榜的顺序重新排序
      for (const newsId of rankList[0]) {
        for (const data of datas) {
          if (data.dataValues && parseInt(data.dataValues.newsId, 0) === parseInt(newsId, 0)) {
            newsInfos.push({ dataValues: data.dataValues });
            break;
          }
        }
      }
    } else {
      newsInfos = findByNew();
    }

    return newsInfos;
  };

  const mainFunction = async () => {
    try {
      let newsInfos = [];
      const newLists = [];
      if (orderType === constants.HOT_NEWS) {
        newsInfos = await findByHot();
      } else {
        newsInfos = await findByNew();
      }

      // 并发查询每个资讯的点赞数和访问数
      const getNewsPromises = newsInfos.map(async (newsInfo) => {
        const newsId = newsInfo.dataValues.newsId || 0;
        const supportInfo = await exports.getPVAndThumpById(newsId);
        let redirectUrl = '/news/details';
        if (parseInt(newsInfo.dataValues.redirectUrl, 0) === 2) {
          redirectUrl = '/news/tests';
        }
        return {
          newsId,
          redirectUrl: `${redirectUrl}/${newsId}`,
          type: newsInfo.dataValues.type,
          title: newsInfo.dataValues.title,
          introduction: newsInfo.dataValues.introduction,
          imgUrl: newsInfo.dataValues.imgUrl,
          createdAt: newsInfo.dataValues.createdAt,
          pv: supportInfo.pvNum,
          thumbUp: supportInfo.thumbUpNum,
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

// 根据资讯id和用户id  增加对应的pv统计日志
exports.incPVById = async (newsInfo, writerInfo, viewerInfo) => {
  const pvTotalKey = redisUtil.getRedisPrefix(2);
  const pvContextKey = redisUtil.getRedisPrefix(2, newsInfo.type);

  Model.sequelize.transaction(async (transaction) => {
    const updateMysql = await Model.PV.create({
      newsId: newsInfo.newsId,
      redirectUrl: newsInfo.redirectUrl,
      type: newsInfo.type,
      title: newsInfo.title,
      introduction: newsInfo.introduction,
      imgUrl: newsInfo.imgUrl,
      context: newsInfo.context,
      writerId: writerInfo.userId,
      writerName: writerInfo.userName,
      writerPhone: writerInfo.phone,
      writerOpenId: writerInfo.openId,
      viewerId: viewerInfo.userId,
      viewerName: viewerInfo.userName,
      viewerPhone: viewerInfo.phone,
      viewerOpenId: viewerInfo.openId,
    }, { transaction });
    if (updateMysql && updateMysql.dataValues) {
      // 更新pv总排行榜、月排行榜、分类月排行榜
      // 不过鉴于multi并不会产生回滚，所以一旦exec出错  还是有错误数据会+1
      const uptdateRedis = await redisClient.multi()
        .zincrby(pvTotalKey, 1, newsInfo.newsId)
        .zincrby(pvContextKey, 1, newsInfo.newsId)
        .execAsync();
      if (uptdateRedis.length !== 2) {
        throw new Error('redis update failed');
      }
    }
  }).catch((err) => {
    // Rolled back
    console.log(err);
  });
};

// 资讯详情页
exports.getNewsDetailById = function (req, res, next) {
  const newsId = parseInt(req.params.newsId, 0) || 0;

  if (!newsId) {
    const error = new Error('参数错误');
    next(error);
  }

  const mainFunction = async () => {
    try {
      // 查询文章及作者详情
      const newsInfo = await Model.News.findOne({
        where: { newsId },
        include: { model: Model.User },
      });

      if (!newsInfo || !newsInfo.dataValues || !newsInfo.User) {
        const error = new Error('该资讯不存在');
        next(error);
      }

      // 查询点赞总数和浏览总数
      const supportInfo = await exports.getPVAndThumpById(newsId);

      const pageInfo = {
        newsId: newsInfo.dataValues.newsId,
        userName: newsInfo.User.dataValues.userName,
        type: newsInfo.dataValues.type,
        title: newsInfo.dataValues.title,
        introduction: newsInfo.dataValues.introduction,
        context: newsInfo.dataValues.context,
        imgUrl: newsInfo.dataValues.imgUrl,
        createdAt: newsInfo.dataValues.createdAt,
        pv: supportInfo.pvNum,
        thumbUp: supportInfo.thumbUpNum,
      };

      //  增加文章的浏览量
      const viewer = req.session.user || {
        phone: '11111111111',
        userName: '游客',
        createdAt: '2017-10-10 00:00:00',
        userId: 0,
        openId: '',
      };
      exports.incPVById(newsInfo.dataValues, newsInfo.User.dataValues, viewer);

      res.render('index', { pageInfo });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 文章点赞
exports.thumbUpNewsById = function (req, res) {
  const newsId = parseInt(req.body.newsId, 0) || 0;
  const resUtil = new HttpSend(req, res);

  // 检查参数
  if (!newsId) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }

  const mainFunction = async () => {
    try {
      const thumbUpKey = redisUtil.getRedisPrefix(1);

      const uptdateRedis = await redisClient.zincrbyAsync(thumbUpKey, 1, newsId);

      resUtil.sendJson(constants.HTTP_SUCCESS, '', { newThumbUpNum: uptdateRedis[0] });
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};

// 文章评论 预留
exports.commentNewsById = function (req, res) {
  res.render('index', { title: 'index page' });
};

// 自测题详情页
exports.getTestDetailById = function (req, res, next) {
  const newsId = parseInt(req.params.newsId, 0) || 0;

  if (!newsId) {
    const err = new Error('参数错误');
    next(err);
  }

  const mainFunction = async () => {
    try {
      // 查询自测题题目
      const questionLists = await Model.SelfTest.findAll({
        where: { newsId },
        order: [['order', 'ASC']],
      });

      if (!questionLists.length) {
        throw new Error('自测题不存在');
      }

      const questLists = [];
      let type = 0;
      for (const questionInfo of questionLists) {
        type = type || questionInfo.dataValues.type;
        questLists.push({
          order: questionInfo.dataValues.order,
          newsId: questionInfo.dataValues.newsId,
          testId: questionInfo.dataValues.testId,
          imgUrl: questionInfo.dataValues.imgUrl,
          question: questionInfo.dataValues.question,
          options: questionInfo.dataValues.options,
        });
      }

      res.render('index', { type, questLists });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 提交自测题
exports.finishTestById = function (req, res) {
  const newsId = parseInt(req.params.newsId, 0) || 0;
  const choiceList = req.body.choiceList ? JSON.parse(req.body.choiceList) : {};
  const resUtil = new HttpSend(req, res);

  // 检查参数
  if (!newsId || !choiceList) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }

  const calScore = async () => {
    const questionLists = await Model.SelfTest.findAll({
      where: { newsId },
      order: [['order', 'ASC']],
    });
    if (questionLists.length === 0) {
      throw new Error('自测题不存在');
    }

    let totalScore = 0;
    for (const questionInfo of questionLists) {
      const order = questionInfo.dataValues.order || 0;
      const userChoice = choiceList[order];
      const scores = JSON.parse(questionInfo.dataValues.scores || '');
      totalScore += parseInt(scores[userChoice], 0);
    }

    return totalScore;
  };

  const qryEstimate = async (totalScore) => {
    const estimate = await Model.SelfTestEstimate.findOne({
      where: {
        newsId,
        minScore: { $lte: totalScore },
        maxScore: { $gt: totalScore },
      },
    });
    if (!estimate || !estimate.dataValues) {
      throw new Error('自测结果查询失败');
    }

    return estimate.dataValues;
  };

  const uptRecord = async (totalScore, estimateInfo) => {
    // 如果是游客登录 就不保存了
    if (!req.session.user || !req.session.user.userId) {
      return true;
    }

    // 查询自测题相关信息
    const newsInfo = await Model.News.findOne({
      where: { newsId },
    });

    await Model.SelfTestRecord.create({
      userId: req.session.user.userId,
      userName: req.session.user.userName,
      userPhone: req.session.user.phone,
      userOpenId: req.session.user.openId,
      totalScore,
      estimateId: estimateInfo.estimateId,
      estimate: estimateInfo.estimate,
      newsId,
      type: newsInfo.dataValues.type || 0,
      introduction: newsInfo.dataValues.introduction || '',
    });

    return true;
  };

  const mainFunction = async () => {
    try {
      // 查询自测题题目,计算得分
      const totalScore = await calScore();

      // 根据分数查询评价
      const estimateInfo = await qryEstimate(totalScore);

      // 异步更新评价结果至日志中
      uptRecord(totalScore, estimateInfo);

      resUtil.sendJson(constants.HTTP_SUCCESS, '', { totalScore, estimateMsg: estimateInfo.estimate });
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};
