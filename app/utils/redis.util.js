// 获取redisKey
exports.getRedisPrefix = (type, id = '') => {
  let redisKey = '';
  switch (type) {
    case 1:
      redisKey = 'rank|thumbUp|news'; // 文章点赞总排行 rank|thumbUp|news {newsId:num}
      break;
    case 2:
      redisKey = 'rank|pv|news'; // 文章浏览总排行 rank|pv|news {newsId:num}
      break;
    case 13:
      redisKey = 'rank|comment|news'; // 文章评论总排行 rank|comment|news {newsId:num}
      break;
    case 3:
      redisKey = 'rank|user|pv_news'; // 用户分享出的文章 浏览pv总排行 rank|user|pv_news:userId {newsId:pv_num}
      break;
    case 4:
      redisKey = 'rank|user|uv_news'; // 用户分享出的文章 浏览uv总排行 rank|user|uv_news:userId {newsId:uv_num}
      break;
    case 5:
      redisKey = 'data|user|pv_news'; // 用户所有分享文章的日 uv、pv记录  data|user|pv_news:userId:20171020 {viewerId:pv_num}
      break;
    case 6:
      redisKey = 'data|user|commission'; // 用户佣金总额 data|user|commission {userId:num}
      break;
    case 7:
      redisKey = 'rank|user|pv_product'; // 用户分享出的商品 浏览pv总排行  rank|user|pv_product:userId {productId:pv_num}
      break;
    case 8:
      redisKey = 'rank|user|uv_product'; // 用户分享出的商品 浏览uv总排行 rank|user|uv_product:userId {productId:uv_num}
      break;
    case 9:
      redisKey = 'data|user|pv_product'; // 用户分享所有商品日 uv、pv记录 data|user|pv_product:20171020 {viewerId:pv_num}
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
      redisKey = 'log|thumbUp|news'; // 某文章点赞人次、人数记录
      break;
    case 18:
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

