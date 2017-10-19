// 获取redisKey
exports.getRedisPrefix = (type, id = '') => {
  let redisKey = '';
  switch (type) {
    case 1:
      redisKey = 'rank|thumbUp|news'; // 文章点赞总排行
      break;
    case 2:
      redisKey = 'rank|pv|news'; // 文章浏览总排行
      break;
    case 13:
      redisKey = 'rank|comment|news'; // 文章评论总排行
      break;
    case 3:
      redisKey = 'rank|user|pv_news'; // 用户分享出的文章 浏览总排行
      break;
    case 4:
      redisKey = 'rank|user|chanel_news'; // 用户文章分享渠道总排行
      break;
    case 5:
      redisKey = 'data|user|pv_news'; // 用户文章日 uv、pv记录
      break;
    case 6:
      redisKey = 'data|user|commission'; // 用户佣金总额
      break;
    case 7:
      redisKey = 'rank|user|pv_product'; // 用户分享出的商品 浏览总排行
      break;
    case 8:
      redisKey = 'rank|user|chanel_product'; // 用户商品分享渠道总排行
      break;
    case 9:
      redisKey = 'data|user|pv_product'; // 用户商品日 uv、pv记录
      break;
    case 10:
      redisKey = 'data|user|purchase_record'; // 用户分享商品后，日购买记录
      break;
    case 11:
      redisKey = 'brief_rank_info|news'; // 一些排行中需要显示的精简news信息，减小mysql压力
      break;
    case 12:
      redisKey = 'brief_rank_info|products'; // 一些排行中需要显示的精简product信息
      break;
    case 14:
      redisKey = 'list|comment|news'; // 文章评论列表
      break;
    case 15:
      redisKey = 'log|pv|news'; // 某文章浏览人次、人数记录
      break;
    case 16:
      redisKey = 'log|pv|user|news'; // 某用户分享出的某文章浏览人次、人数记录
      break;
    case 17:
      redisKey = 'data|user|bonus_points'; // 用户积分总数
      break;
    case 999:
      redisKey = 'weChat|token'; // 一些排行中需要显示的精简product信息
      break;
    default:
      break;
  }

  return !id ? redisKey : `${redisKey}:${id}`;
};

