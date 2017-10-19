const constants = require('../../config/constants');
const redisClient = require('../../config/redis')(1);
const redisUtil = require('../utils/redis.util');
const Model = require('../models/index');
const HttpSend = require('../utils/http.util');
const moment = require('moment');
const config = require('../../config/config');

// 根据资讯id  查询点赞总数、浏览总数、评论总数
exports.getPVAndThumpById = async (newsId) => {
  const thumbUpKey = redisUtil.getRedisPrefix(1);
  const pvKey = redisUtil.getRedisPrefix(2);
  const commentKey = redisUtil.getRedisPrefix(13);
  const [pvNum, thumbUpNum, commentNum] = await Promise.all([
    redisClient.zscoreAsync(pvKey, newsId),
    redisClient.zscoreAsync(thumbUpKey, newsId),
    redisClient.zscoreAsync(commentKey, newsId),
  ]);

  return {
    pvNum: pvNum || 0,
    thumbUpNum: thumbUpNum || 0,
    commentNum: commentNum || 0,
  };
};

// 资讯首页
exports.index = (req, res, next) => {
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
          commentNum: supportInfo.commentNum,
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

// 根据资讯id  增加对应的统计日志
exports.addLogByNewsId = async (newsInfo, viewerInfo, shareUserId, channel) => {
  // 如果有分享者，先查询分享者信息
  const shareInfo = {
    shareId: shareUserId,
    shareName: '',
    sharePhone: '',
  };
  if (shareUserId !== 0 && shareUserId !== viewerInfo.userId) {
    const data = await Model.User.findOne({ where: { userId: shareUserId } });
    if (!data || !data.dataValues) {
      shareInfo.shareId = 0;
    } else {
      shareInfo.shareName = data.dataValues.userName;
      shareInfo.shareOpenId = data.dataValues.openId;
    }
  }

  // 查询操作对应的积分数量
  const pointInfo = await Model.BonusPoint.findOne({ where: { id: 1 } });
  const pointNum = parseInt(pointInfo.dataValues.pointNum, 0);

  Model.sequelize.transaction(async (transaction) => {
    /** *****************************记录资讯浏览日志**************************************** */
    await Model.PVNews.create({
      newsId: newsInfo.newsId,
      redirectUrl: newsInfo.redirectUrl,
      type: newsInfo.type,
      title: newsInfo.title,
      introduction: newsInfo.introduction,
      viewerId: viewerInfo.userId,
      viewerName: viewerInfo.userName,
      viewerOpenId: viewerInfo.openId,
      shareId: shareInfo.shareId,
      shareName: shareInfo.shareName,
      shareOpendId: shareInfo.shareOpenId,
      shareChannel: channel,
    }, { transaction });

    /** *****************************更新浏览记录相关redis数据**************************************** */
    // 更新文章浏览总榜
    const pvTotalKey = redisUtil.getRedisPrefix(2);
    // 更新文章分类浏览总榜
    const pvContextKey = redisUtil.getRedisPrefix(2, newsInfo.type);
    // 更新个人  分享文章的热门排行榜
    const pvUserKey = redisUtil.getRedisPrefix(3, shareInfo.shareId);
    const newsTitleKey = redisUtil.getRedisPrefix(11);
    // 更新个人  分享文章的渠道排行榜
    const channelUserKey = redisUtil.getRedisPrefix(4, shareInfo.shareId);
    // 更新个人  当日分享文章的浏览uv pv
    const today = moment().format('YYYYMMDD');
    const uvKey = redisUtil.getRedisPrefix(5, `${shareInfo.shareId}:date_${today}`);
    // 文章浏览用户
    const pvNewsLogKey = redisUtil.getRedisPrefix(15, newsInfo.newsId);
    // 转发浏览用户
    const pvUserNewsLogKey = redisUtil.getRedisPrefix(16, `${newsInfo.newsId}:uid_${shareInfo.shareId}`);

    // 鉴于multi并不会产生回滚，所以一旦exec出错  还是有错误数据会+1
    let updateRedis = [];
    let userPvNum = 0;
    let userNewPVNum = 0;
    if (shareInfo.shareId !== 0) {
      updateRedis = await redisClient.multi()
        .zincrby(pvTotalKey, 1, newsInfo.newsId)
        .zincrby(pvContextKey, 1, newsInfo.newsId)
        .zincrby(pvUserKey, 1, newsInfo.newsId)
        .hset(newsTitleKey, newsInfo.newsId, newsInfo.title)
        .zincrby(channelUserKey, 1, channel)
        .hincrby(uvKey, viewerInfo.userId, 1)
        .hincrby(pvNewsLogKey, viewerInfo.userId, 1)
        .hincrby(pvUserNewsLogKey, viewerInfo.userId, 1)
        .execAsync();
      userPvNum = parseInt(updateRedis[6], 0);
      userNewPVNum = parseInt(updateRedis[7], 0);
    } else {
      updateRedis = await redisClient.multi()
        .zincrby(pvTotalKey, 1, newsInfo.newsId)
        .zincrby(pvContextKey, 1, newsInfo.newsId)
        .hincrby(pvNewsLogKey, viewerInfo.userId, 1)
        .execAsync();
      userPvNum = parseInt(updateRedis[2], 0);
    }
    if (!updateRedis.length) {
      throw new Error('redis update failed');
    }


    /** *****************************检查是否为第一次浏览，如果是，增加浏览者积分日志******************************* */
    if (userPvNum === 1) {
      const bonusPointKey = redisUtil.getRedisPrefix(17);
      const totalPoint = await redisClient.hincrbyAsync(bonusPointKey, viewerInfo.userId, pointNum);
      await Model.PointRecord.create({
        viewerId: viewerInfo.userId,
        shareId: shareInfo.shareId,
        operator: 1,
        changeNum: pointNum,
        totalPoint,
        newsId: newsInfo.newsId,
      }, { transaction });
    }

    /** ************************如果有分享者，且被分享人第一次点入，增加分享者积分日志************************** */
    if (shareInfo.shareId !== 0 && userNewPVNum === 1) {
      const bonusPointKey = redisUtil.getRedisPrefix(17);
      const totalPoint = await redisClient.hincrbyAsync(bonusPointKey, shareInfo.shareId, pointNum);
      await Model.PointRecord.create({
        viewerId: shareInfo.shareId,
        operator: 5,
        changeNum: pointNum,
        totalPoint,
        newsId: newsInfo.newsId,
      }, { transaction });
    }
  }).catch((err) => {
    // Rolled back
    console.log(err);
  });
};

// 资讯详情页
exports.getNewsDetailById = (req, res, next) => {
  const newsId = parseInt(req.params.newsId, 0) || 0;
  // 分享者id
  const shareUid = req.query.shareUid ? parseInt(req.query.shareUid, 0) : 0;
  // 分享渠道id
  const channel = new HttpSend(req, res).getChannel(req);
  const userId = req.session.user.userId || 0;

  if (!newsId || !userId) {
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

      // 查询点赞总数、浏览总数、评论总数
      const supportInfo = await exports.getPVAndThumpById(newsId);

      // 查询评论列表
      const commentListKey = redisUtil.getRedisPrefix(14);
      const commentList = await redisClient.lrangeAsync(commentListKey, 0, -1);

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
        commentNum: supportInfo.commentNum,
        commentList,
      };


      exports.addLogByNewsId(newsInfo.dataValues, req.session.user, shareUid, channel);

      const shareLink = encodeURI(`${config.shopServerConfig.host}:${config.shopServerConfig.port}/news/details/${pageInfo.newsId}?shareUid=${userId}`);
      res.render('index', { pageInfo, shareLink, shareUserId: shareUid });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 文章点赞
exports.thumbUpNewsById = (req, res) => {
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

      const newThumbUpNum = await redisClient.zincrbyAsync(thumbUpKey, 1, newsId);

      resUtil.sendJson(constants.HTTP_SUCCESS, '', { newThumbUpNum });
    } catch (err) {
      console.log(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};

// 文章评论 预留
exports.commentNewsById = (req, res) => {
  res.render('index', { title: 'index page' });
};

// 自测题详情页
exports.getTestDetailById = (req, res, next) => {
  const newsId = parseInt(req.params.newsId, 0) || 0;
  // 分享者id
  const shareUid = req.query.shareUid ? parseInt(req.query.shareUid, 0) : 0;
  // 分享渠道id
  const channel = new HttpSend(req, res).getChannel(req);

  if (!newsId) {
    const err = new Error('参数错误');
    next(err);
  }

  const mainFunction = async () => {
    try {
      // 检查newsId是否正确
      const newsInfo = await Model.News.findOne({ where: { newsId } });
      if (!newsInfo || !newsInfo.dataValues) {
        throw new Error('自测题不存在');
      }

      // 查询自测题题目
      const questionLists = await Model.SelfTest.findAll({
        where: { newsId },
        order: [['order', 'ASC']],
      });
      if (!questionLists.length) {
        throw new Error('自测题题目正在完善，目前无法使用');
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


      // 记录浏览日志
      exports.addLogByNewsId(newsInfo.dataValues, req.session.user, shareUid, channel);

      res.render('index', { type, questLists });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  mainFunction();
};

// 提交自测题
exports.finishTestById = (req, res) => {
  const newsId = parseInt(req.params.newsId, 0) || 0;
  const choiceList = req.body.choiceList ? JSON.parse(req.body.choiceList) : {};
  const resUtil = new HttpSend(req, res);

  // 检查参数
  if (!newsId || !req.body.choiceList) {
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
