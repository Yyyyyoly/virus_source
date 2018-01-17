// 个人资讯模块，基本上继承news.controller

const constants = require('../../config/constants');
const redisClient = require('../../config/redis')(1);
const globalClient = require('../../config/redis')(3);
const redisUtil = require('../utils/redis.util');
const Model = require('../models/index');
const HttpSend = require('../utils/http.util');
const moment = require('moment');
const config = require('../../config/config');
const newsController = require('./news.controller');
const globalController = require('./global.controller');
const logger = require('../utils/log.util').getLogger(constants.LOGGER_LEVEL);

const Op = Model.Sequelize.Op;

const getNewsList = async (orderType, contextType, page) => {
  // 分页中每页的最大数量
  const limit = 15;

  // 按照发布时间最新查找资讯
  const findByNew = async () => {
    const conditions = {
      where: {
        type: { [Op.eq]: constants.TYPE_PERSON_NEWS },
        include: [
          { model: Model.User, required: true },
          { model: Model.JobTitle, required: true },
        ],
      },
      order: [['newsId', 'DESC']],
      offset: limit * (page - 1),
      limit,
    };
    if (contextType !== constants.CONTEXT_PERSON_TOTAL) {
      conditions.where.newsClass = contextType;
    }
    return Model.News.findAndCountAll(conditions);
  };

  // 按照热门程度查找资讯  热门目前按照总浏览量排序
  const findByHot = async () => {
    const rankKey = contextType === redisUtil.getRedisPrefix(2, contextType);
    const [start, end] = [(page - 1) * limit, page * limit];
    const rankList = await redisClient.zrevrangeAsync(rankKey, start, end);
    const count = await redisClient.zcardAsync(rankKey);

    let newsInfos = {
      rows: [],
      count,
    };
    if (rankList.length) {
      // 这种写法等于Op.in:(1,2,3,4)
      const datas = await Model.News.findAll({
        where: { newsId: rankList },
        include: [
          { model: Model.User, required: true },
          { model: Model.JobTitle, required: true },
        ],
      });
      // 按照排行榜的顺序重新排序
      for (const newsId of rankList) {
        for (const data of datas) {
          if (data.dataValues && parseInt(data.dataValues.newsId, 0) === parseInt(newsId, 0)) {
            newsInfos.rows.push({ dataValues: data.dataValues });
            break;
          }
        }
      }
    } else {
      newsInfos = await findByNew();
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
      const getNewsPromises = newsInfos.rows.map(async (newsInfo) => {
        const newsId = newsInfo.dataValues.newsId || 0;
        const supportInfo = await newsController.getPVAndThumpById(newsId);
        return {
          newsId,
          redirectUrl: `/person_news/details/${newsId}`,
          newsClass: newsInfo.dataValues.newsClass,
          title: newsInfo.dataValues.title,
          introduction: newsInfo.dataValues.introduction,
          imgUrl: newsInfo.dataValues.imgUrl,
          createdAt: newsInfo.dataValues.createdAt,
          pv: supportInfo.pvNum,
          thumbUp: supportInfo.thumbUpNum,
          commentNum: supportInfo.commentNum,
          writerRealName: newsInfo.User.dataValues.realName,
          headImgUrl: newsInfo.User.dataValues.headImgUrl,
          hospitalName: newsInfo.User.dataValues.hospitalName,
          jobTitleName: newsInfo.JobTitle.dataValues.title,
        };
      });

      // 将并发的结果按照之前的顺序保存
      for (const newsPromise of getNewsPromises) {
        const info = await newsPromise;
        newLists.push(info);
      }
      return { newLists, totalPage: Math.ceil(newsInfos.count / limit) };
    } catch (error) {
      logger.info(error);
      throw error;
    }
  };

  return mainFunction();
};

// 资讯首页
exports.index = (req, res, next) => {
  // 资讯查找方式  按热门/按最新
  const orderType = parseInt(req.query.order, 0) || constants.HOT_NEWS;
  // 资讯内容分类  按领域分类/全部
  const contextType = parseInt(req.query.context, 0) || constants.CONTEXT_PERSON_TOTAL;
  // 分页
  const page = req.query.page || 1;
  const httpUtil = new HttpSend(req, res);

  const mainFunction = async () => {
    try {
      const rtn = await getNewsList(orderType, contextType, page);

      const newsClass = constants.NEWS_CLASS_LIST.PERSONAL;
      httpUtil.render('news/news', {
        title: '个人资讯', newLists: rtn.newLists, totalPage: rtn.totalPage, newsClass, contextType,
      });
    } catch (err) {
      next(err);
    }
  };
  mainFunction();
};

// 资讯首页
exports.getNewsListByCondition = (req, res) => {
  // 资讯查找方式  按热门/按最新
  const orderType = parseInt(req.query.order, 0) || constants.HOT_NEWS;
  // 资讯内容分类  按领域分类/全部
  const contextType = parseInt(req.query.context, 0) || constants.CONTEXT_PERSON_TOTAL;
  // 分页
  const page = req.query.page || 1;
  const resUtil = new HttpSend(req, res);

  const mainFunction = async () => {
    try {
      const rtn = await getNewsList(orderType, contextType, page);
      resUtil.sendJson(constants.HTTP_SUCCESS, '', { newLists: rtn.newLists, totalPage: rtn.totalPage });
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };
  mainFunction();
};

// 根据资讯id  增加对应的浏览日志
exports.addViewLogByNewsId = async (newsInfo, viewerInfo, shareUserId) => {
  // 如果有分享者，先查询分享者信息
  const shareInfo = {
    shareId: shareUserId,
    shareName: '',
    sharePhone: '',
  };
  if (shareInfo.shareId) {
    if (shareInfo.shareId === viewerInfo.userId) {
      shareInfo.shareName = viewerInfo.userName;
      shareInfo.shareHeadImg = viewerInfo.headImgUrl;
    } else {
      const data = await Model.User.findOne({ where: { userId: shareInfo.shareId } });
      if (!data || !data.dataValues) {
        shareInfo.shareId = '';
      } else {
        shareInfo.shareName = data.dataValues.userName;
        shareInfo.shareHeadImg = data.dataValues.headImgUrl;
      }
    }
  }

  // 查询操作对应的积分数量
  const operateType = shareInfo.shareId && shareInfo.shareId !== viewerInfo.userId ? 2 : 1;
  const pointInfo = await Model.BonusPoint.findOne({ where: { id: operateType } });
  const pointNum = pointInfo && pointInfo.dataValues ? pointInfo.dataValues.pointNum : 0;
  const sharePointNum = pointInfo && pointInfo.dataValues ? pointInfo.dataValues.sharePointNum : 0;
  const writerPointNum = pointInfo && pointInfo.dataValues
    ? pointInfo.dataValues.writerPointNum : 0;

  // 浏览者和分享者（如果有）和原创作者的最新积分，非负数时有效，更新至积分商城
  let viewerNewTotalPoint = -1;
  let shareNewTotalPoint = -1;
  let writerNewTotalPoint = -1;
  Model.sequelize.transaction(async (transaction) => {
    /** *****************************记录资讯浏览日志**************************************** */
    const pvNewsInfo = await Model.PVNews.create({
      newsId: newsInfo.newsId,
      writerId: newsInfo.writerId,
      type: newsInfo.type,
      newsClass: newsInfo.newsClass,
      title: newsInfo.title,
      introduction: newsInfo.introduction,
      viewerId: viewerInfo.userId,
      viewerName: viewerInfo.userName,
      viewerHeadImg: viewerInfo.headImgUrl,
      shareId: shareInfo.shareId || null,
      shareName: shareInfo.shareName,
      shareHeadImg: shareInfo.shareHeadImg,
    }, { transaction });

    /** ************************************更新浏览记录相关redis数据************************************* */
    const today = moment().format('YYYYMMDD');
    // 个人资讯 浏览总榜（决定热门显示顺序）
    const pvTotalKey = redisUtil.getRedisPrefix(2, constants.CONTEXT_PERSON_TOTAL);
    // 个人资讯 分类浏览总榜（决定热门显示顺序）
    const pvContextKey = redisUtil.getRedisPrefix(2, newsInfo.newsClass);

    // 某文章当日所有浏览人 记录（日志记录）
    const newsUvKey = redisUtil.getRedisPrefix(5, `${shareInfo.shareId}:${today}`);

    // 指定文章所有浏览人记录（积分统计时使用，仅在第一次浏览加积分）
    const pvNewsLogKey = redisUtil.getRedisPrefix(15, newsInfo.newsId);
    // 用户分享某文章后的浏览人记录(积分统计时使用，仅在分享后第一次浏览加积分）
    const pvUserNewsLogKey = redisUtil.getRedisPrefix(16, `${newsInfo.newsId}:${shareInfo.shareId}`);

    // 该分享人的热门文章当日排行 (饼状图排行榜使用)
    const shareUserTypeKey = redisUtil.getRedisPrefix(4, `${shareInfo.shareId}:${today}`);
    const shareUserKey = redisUtil.getRedisPrefix(3, `${shareInfo.shareId}:${today}`);

    // 鉴于multi并不会产生回滚，所以一旦exec出错  还是有错误数据会+1
    let updateRedis = [];
    let userPvNum = 0;
    let userNewPVNum = 0;
    if (shareInfo.shareId) {
      updateRedis = await redisClient.multi()
        .zincrby(pvTotalKey, 1, newsInfo.newsId)
        .zincrby(pvContextKey, 1, newsInfo.newsId)
        .hincrby(pvNewsLogKey, viewerInfo.userId, 1)
        .hincrby(pvUserNewsLogKey, viewerInfo.userId, 1)
        .hincrby(newsUvKey, viewerInfo.userId, 1)
        .zincrby(shareUserTypeKey, 1, newsInfo.newsClass)
        .zincrby(`${shareUserKey}:all`, 1, newsInfo.newsId)
        // .zincrby(`${shareUserKey}:${newsInfo.newsClass}`, 1, newsInfo.newsId) 目前前端根据标签自己排序
        .execAsync();
      userPvNum = parseInt(updateRedis[2], 0);
      userNewPVNum = parseInt(updateRedis[3], 0);
    } else {
      updateRedis = await redisClient.multi()
        .zincrby(pvTotalKey, 1, newsInfo.newsId)
        .zincrby(pvContextKey, 1, newsInfo.newsId)
        .hincrby(pvNewsLogKey, viewerInfo.userId, 1)
        .execAsync();
      userPvNum = parseInt(updateRedis[2], 0);
    }

    /** *****************************如果第一次浏览该个人资讯，增加浏览者积分日志************************************* */
    if (userPvNum === 1 && pointNum > 0) {
      const bonusKey = redisUtil.getRedisPrefix(18);
      const totalPoint = await globalClient.hincrbyAsync(bonusKey, viewerInfo.userId, pointNum);
      await Model.PointRecord.create({
        viewerId: viewerInfo.userId,
        shareId: shareInfo.shareId || null,
        operator: 1,
        changeNum: pointNum,
        totalPoint,
        newsId: newsInfo.newsId,
        proofId: pvNewsInfo.dataValues.id,
      }, { transaction });
      viewerNewTotalPoint = totalPoint;
    }


    /** ************************如果第一次浏览该个人资讯(且非本人原创)，增加原创作者积分日志**************************** */
    if (userPvNum === 1 && writerPointNum > 0 &&
      newsInfo.writerId && newsInfo.writerId !== viewerInfo.userId) {
      const bonusKey = redisUtil.getRedisPrefix(18);
      const totalPoint = await globalClient.hincrbyAsync(
        bonusKey,
        newsInfo.writerId,
        writerPointNum,
      );
      await Model.PointRecord.create({
        viewerId: newsInfo.writerId,
        shareId: viewerInfo.userId,
        operator: 6,
        changeNum: writerPointNum,
        totalPoint,
        newsId: newsInfo.newsId,
        proofId: pvNewsInfo.dataValues.id,
      }, { transaction });
      writerNewTotalPoint = totalPoint;
    }

    /** ******************如果有分享者(且非自己)，且被分享人第一次点入该链接，增加分享者积分日志******************** */
    if (shareInfo.shareId && shareUserId !== viewerInfo.userId &&
      userNewPVNum === 1 && sharePointNum > 0
    ) {
      const key = redisUtil.getRedisPrefix(18);
      const totalPoint = await globalClient.hincrbyAsync(key, shareInfo.shareId, sharePointNum);
      await Model.PointRecord.create({
        viewerId: shareInfo.shareId,
        shareId: viewerInfo.userId,
        operator: 2,
        changeNum: sharePointNum,
        totalPoint,
        newsId: newsInfo.newsId,
        proofId: pvNewsInfo.dataValues.id,
      }, { transaction });
      shareNewTotalPoint = totalPoint;
    }
  }).then(() => {
    if (viewerNewTotalPoint >= 0) {
      globalController.addGlobalPoint(viewerInfo.userId, viewerNewTotalPoint);
    }
    if (shareNewTotalPoint >= 0) {
      globalController.addGlobalPoint(shareUserId, shareNewTotalPoint);
    }
    if (writerNewTotalPoint >= 0) {
      globalController.addGlobalPoint(newsInfo.writerId, writerNewTotalPoint);
    }
  }).catch((err) => {
    // Rolled back
    logger.info(err);
  });
};

// 资讯详情页
exports.getNewsDetailById = (req, res, next) => {
  const newsId = parseInt(req.params.newsId, 0) || 0;
  // 分享者id
  const shareId = req.query.shareId || '';
  const userId = req.session.user.userId || '';
  const httpUtil = new HttpSend(req, res);

  if (!newsId || !userId) {
    const error = new Error('参数错误');
    next(error);
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询文章
      const newsInfo = await Model.News.findOne({
        where: { newsId },
        include: [
          { model: Model.User, required: true },
          { model: Model.JobTitle, required: true },
        ],
      });

      if (!newsInfo || !newsInfo.dataValues) {
        throw new Error('该资讯不存在');
      }

      if (newsInfo.dataValues.type !== constants.TYPE_PERSON_NEWS) {
        throw new Error('资讯类型错误');
      }

      // 查询是否已经点过赞
      const thumbUpKey = redisUtil.getRedisPrefix(17, newsId);
      const ifThumb = await redisClient.hgetAsync(thumbUpKey, userId);

      // 查询点赞总数、浏览总数、评论总数
      const supportInfo = await newsController.getPVAndThumpById(newsId);

      // 查询评论列表
      const commentListKey = redisUtil.getRedisPrefix(14, newsId);
      const commentInfos = await redisClient.lrangeAsync(commentListKey, 0, -1);
      const commentLength = commentInfos.length;
      const commentList = [];
      for (let i = (commentLength - 1); i >= 0; i -= 1) {
        commentList.push(JSON.parse(commentInfos[i]));
      }

      const pageInfo = {
        newsId: newsInfo.dataValues.newsId,
        userName: newsInfo.User.dataValues.realName,
        headImgUrl: newsInfo.User.dataValues.headImgUrl,
        hospitalName: newsInfo.User.dataValues.hospitalName,
        jobTitleName: newsInfo.JobTitle.dataValues.title,
        newsClass: newsInfo.dataValues.newsClass,
        title: newsInfo.dataValues.title,
        introduction: newsInfo.dataValues.introduction,
        context: newsInfo.dataValues.context,
        imgUrl: newsInfo.dataValues.imgUrl,
        createdAt: newsInfo.dataValues.createdAt,
        pv: parseInt(supportInfo.pvNum, 0) + 1,
        thumbUp: supportInfo.thumbUpNum,
        commentNum: supportInfo.commentNum,
        commentList,
        ifThumb: ifThumb > 0,
      };


      exports.addViewLogByNewsId(newsInfo.dataValues, req.session.user, shareId);
      const shareUid = shareId || userId;
      const shareLink = encodeURI(`${config.serverHost}/person_news/details/${pageInfo.newsId}?shareId=${shareUid}`);
      const renderUrl = !shareId ? 'news/news-detail' : 'news/news-detail-share';
      httpUtil.render(renderUrl, {
        title: '个人资讯', pageInfo, shareLink, shareUid: shareId,
      });
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  mainFunction();
};

// 根据资讯id  增加对应的转发日志
exports.addTransmitLogByNewsId = async (newsInfo, viewerInfo, shareUserId) => {
  // 如果有分享者，先查询分享者信息
  const shareInfo = {
    shareId: shareUserId,
    shareName: '',
    sharePhone: '',
  };

  if (shareInfo.shareId) {
    if (shareInfo.shareId === viewerInfo.userId) {
      shareInfo.shareName = viewerInfo.userName;
      shareInfo.shareHeadImg = viewerInfo.headImgUrl;
    } else {
      const data = await Model.User.findOne({ where: { userId: shareInfo.shareId } });
      if (!data || !data.dataValues) {
        shareInfo.shareId = '';
      } else {
        shareInfo.shareName = data.dataValues.userName;
        shareInfo.shareHeadImg = data.dataValues.headImgUrl;
      }
    }
  }

  // 查询操作对应的积分数量
  const operateType = shareInfo.shareId && shareInfo.shareId !== viewerInfo.userId ? 4 : 3;
  const pointInfo = await Model.BonusPoint.findOne({ where: { id: operateType } });
  const pointNum = pointInfo && pointInfo.dataValues ? pointInfo.dataValues.pointNum : 0;
  const sharePointNum = pointInfo && pointInfo.dataValues ? pointInfo.dataValues.sharePointNum : 0;
  const writerPointNum = pointInfo && pointInfo.dataValues
    ? pointInfo.dataValues.writerPointNum : 0;

  // 分享者（如果有）和浏览者和原创作者的最新总积分，>=0时更新
  let viewerNewTotalPoint = -1;
  let shareNewTotalPoint = -1;
  let writerNewTotalPoint = -1;
  Model.sequelize.transaction(async (transaction) => {
    /** *****************************记录资讯转发日志**************************************** */
    const transmitInfo = await Model.TransmitNews.create({
      newsId: newsInfo.newsId,
      writerId: newsInfo.writerId,
      type: newsInfo.type,
      newsClass: newsInfo.newsClass,
      title: newsInfo.title,
      introduction: newsInfo.introduction,
      viewerId: viewerInfo.userId,
      viewerName: viewerInfo.userName,
      viewerHeadImg: viewerInfo.headImgUrl,
      shareId: shareInfo.shareId,
      shareName: shareInfo.shareName,
      shareHeadImg: shareInfo.shareHeadImg,
    }, { transaction });

    /** ************************************更新转发记录相关redis数据************************************* */
    // 指定文章所有转发人记录
    const transmitNewsLogKey = redisUtil.getRedisPrefix(21, newsInfo.newsId);
    // 下级的二次转发记录
    const transmitUserNewsLogKey = redisUtil.getRedisPrefix(22, `${newsInfo.newsId}:${shareInfo.shareId}`);

    let updateRedis = [];
    let userTransmitNum = 0;
    let userNewTransmitNum = 0;
    if (shareInfo.shareId) {
      updateRedis = await redisClient.multi()
        .hincrby(transmitNewsLogKey, viewerInfo.userId, 1)
        .hincrby(transmitUserNewsLogKey, viewerInfo.userId, 1)
        .execAsync();
      userTransmitNum = parseInt(updateRedis[0], 0);
      userNewTransmitNum = parseInt(updateRedis[1], 0);
    } else {
      updateRedis = await redisClient.multi()
        .hincrby(transmitNewsLogKey, viewerInfo.userId, 1)
        .execAsync();
      userTransmitNum = parseInt(updateRedis[0], 0);
    }

    /** *****************************如果第一次转发该文章，增加该转发者积分日志************************************* */
    if (userTransmitNum === 1 && pointNum > 0) {
      const bonusKey = redisUtil.getRedisPrefix(18);
      const totalPoint = await globalClient.hincrbyAsync(bonusKey, viewerInfo.userId, pointNum);
      await Model.PointRecord.create({
        viewerId: viewerInfo.userId,
        shareId: shareInfo.shareId,
        operator: 3,
        changeNum: pointNum,
        totalPoint,
        newsId: newsInfo.newsId,
        proofId: transmitInfo.dataValues.id,
      }, { transaction });
      viewerNewTotalPoint = totalPoint;
    }


    /** ************************如果第一次转发该个人资讯(且非本人原创)，增加原创作者积分日志**************************** */
    if (userTransmitNum === 1 && writerPointNum > 0 &&
      newsInfo.writerId && newsInfo.writerId !== viewerInfo.userId) {
      const bonusKey = redisUtil.getRedisPrefix(18);
      const totalPoint = await globalClient.hincrbyAsync(
        bonusKey,
        newsInfo.writerId,
        writerPointNum,
      );
      await Model.PointRecord.create({
        viewerId: newsInfo.writerId,
        shareId: viewerInfo.userId,
        operator: 7,
        changeNum: writerPointNum,
        totalPoint,
        newsId: newsInfo.newsId,
        proofId: transmitInfo.dataValues.id,
      }, { transaction });
      writerNewTotalPoint = totalPoint;
    }

    /** ****************如果有分享者(且不为本人)，且被分享人第一次转发该链接，增加分享者积分日志****************** */
    if (shareInfo.shareId && shareUserId !== viewerInfo.userId &&
      userNewTransmitNum === 1 && sharePointNum > 0
    ) {
      const key = redisUtil.getRedisPrefix(18);
      const totalPoint = await globalClient.hincrbyAsync(key, shareInfo.shareId, sharePointNum);
      await Model.PointRecord.create({
        viewerId: shareInfo.shareId,
        shareId: viewerInfo.userId,
        operator: 4,
        changeNum: sharePointNum,
        totalPoint,
        newsId: newsInfo.newsId,
        proofId: transmitInfo.dataValues.id,
      }, { transaction });
      shareNewTotalPoint = totalPoint;
    }
  }).then(() => {
    // commit
    if (viewerNewTotalPoint >= 0) {
      globalController.addGlobalPoint(viewerInfo.userId, viewerNewTotalPoint);
    }
    if (shareNewTotalPoint >= 0) {
      globalController.addGlobalPoint(shareUserId, shareNewTotalPoint);
    }
    if (writerNewTotalPoint >= 0) {
      globalController.addGlobalPoint(newsInfo.writerId, writerNewTotalPoint);
    }
  }).catch((err) => {
    // Rolled back
    logger.info(err);
  });
};

// 文章分享至朋友圈
exports.shareNewsById = (req, res) => {
  const newsId = parseInt(req.params.newsId, 0) || 0;
  const userId = req.session.user ? req.session.user.userId : '';
  const shareId = req.body.shareId || '';
  const resUtil = new HttpSend(req, res);

  // 检查参数
  if (!newsId || !userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误,积分增加失败');
    return;
  }

  const mainFunction = async () => {
    try {
      const newsInfo = await Model.News.findOne({ where: { newsId } });
      if (!newsInfo || !newsInfo.dataValues) {
        resUtil.sendJson(constants.HTTP_FAIL, '资讯不存在,积分增加失败');
        return;
      }

      if (newsInfo.dataValues.type !== constants.TYPE_PERSON_NEWS) {
        resUtil.sendJson(constants.HTTP_FAIL, '接口调用错误');
        return;
      }

      await exports.addTransmitLogByNewsId(newsInfo.dataValues, req.session.user, shareId);
      resUtil.sendJson(constants.HTTP_SUCCESS);
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误,积分增加失败');
    }
  };

  mainFunction();
};

// 文章点赞
exports.thumbUpNewsById = (req, res) => {
  const newsId = parseInt(req.query.newsId, 0) || 0;
  const resUtil = new HttpSend(req, res);
  const userId = req.session.user ? req.session.user.userId : '';

  // 检查参数
  if (!newsId || !userId) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }

  const mainFunction = async () => {
    try {
      // 查询是否已经点赞
      const thumbUpKey = redisUtil.getRedisPrefix(17, newsId);
      const ifThumb = await redisClient.hincrbyAsync(thumbUpKey, userId, 1);
      if (ifThumb > 1) {
        resUtil.sendJson(constants.HTTP_FAIL, '不能重复点赞');
        return;
      }

      const thumbUpRank = redisUtil.getRedisPrefix(1);
      const newThumbUpNum = await redisClient.zincrbyAsync(thumbUpRank, 1, newsId);

      resUtil.sendJson(constants.HTTP_SUCCESS, '', { newThumbUpNum });
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};

// 文章评论
exports.commentNewsById = (req, res) => {
  const newsId = parseInt(req.body.newsId, 0) || 0;
  const resUtil = new HttpSend(req, res);
  const userId = req.session.user ? req.session.user.userId : '';
  const comment = req.body.comment || '';


  // 检查参数
  if (!newsId || !userId || !comment) {
    resUtil.sendJson(constants.HTTP_FAIL, '参数错误');
    return;
  }

  const mainFunction = async () => {
    try {
      const commentInfo = {
        comment,
        userName: req.session.user.userName,
        userId: req.session.user.userId,
        headImgUrl: req.session.user.headImgUrl,
        realName: req.session.user.realName,
        hospitalName: req.session.user.hospitalName,
        jobTitleId: req.session.user.jobTitleId,
        commentTime: Date.now(),
      };

      const commentRankKey = redisUtil.getRedisPrefix(13);
      const rangeKey = redisUtil.getRedisPrefix(14, newsId);
      await redisClient.multi()
        .rpush(rangeKey, JSON.stringify(commentInfo))
        .zincrby(commentRankKey, 1, newsId)
        .execAsync();

      // 查询评论列表
      const commentInfos = await redisClient.lrangeAsync(rangeKey, 0, -1);
      const commentLength = commentInfos.length;
      const commentList = [];
      for (let i = (commentLength - 1); i >= 0; i -= 1) {
        commentList.push(JSON.parse(commentInfos[i]));
      }
      resUtil.sendJson(constants.HTTP_SUCCESS, '', { commentList });
    } catch (err) {
      logger.info(err);
      resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
    }
  };

  mainFunction();
};
