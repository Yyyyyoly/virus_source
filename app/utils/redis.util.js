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
    case 7:
      redisKey = 'rank|user|pv_products'; // 用户分享出的商品 浏览pv总排行  rank|user|pv_products:userId {productId:pv_num}
      break;
    case 8:
      redisKey = 'rank|user|uv_products'; // 用户分享出的商品 浏览uv总排行 rank|user|uv_products:userId {productId:uv_num}
      break;


    case 5:
      redisKey = 'data|user|pv_news'; // 用户所有分享文章的日 uv、pv记录  data|user|pv_news:userId:20171020 {viewerId:pv_num}
      break;
    case 9:
      redisKey = 'data|user|pv_products'; // 用户分享所有商品日 uv、pv记录 data|user|pv_products:20171020 {viewerId:pv_num}
      break;
    case 10:
      redisKey = 'data|user|purchase_record'; // 用户分享商品后，日购买记录
      break;


    case 6:
      redisKey = 'data|user|commission'; // 用户佣金总额 data|user|commission {userId:num}
      break;
    case 18:
      redisKey = 'data|user|bonus_points'; // 用户积分总数
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
      redisKey = 'log|pv|news'; // 某文章浏览人次、人数记录 log|pv|news:newsId {userId:pv_num}
      break;
    case 16:
      redisKey = 'log|pv|user|news'; // 某用户分享出的某文章浏览人次、人数记录 log|pv|user|news:newsId:uid_1:20171020 {viewerId:pv_num}
      break;
    case 17:
      redisKey = 'log|thumbUp|news'; // 某文章点赞人次、人数记录
      break;
    case 19:
      redisKey = 'log|pv|products'; // 某商品浏览人次、人数记录 log|pv|products:productId {userId:pv_num}
      break;
    case 20:
      redisKey = 'log|pv|user|products'; // 某用户分享出的某商品浏览人次、人数记录 log|pv|user|products:pid:uid_1:20171020 {viewerId:pv_num}
      break;
    case 21:
      redisKey = 'log|transmit|news'; // 某文章转发人次、人数记录 log|transmit|news:newsId {userId:num}
      break;
    case 22:
      redisKey = 'log|transmit|user|news'; // 某用户分享出的某文章转发人次、人数 log|transmit|user|news:newsId:uid_1:20171020 {uid:_num}
      break;


    case 998:
      redisKey = 'weChat|jsapi_ticket'; // wechat全局存储jsapi_ticket
      break;
    case 999:
      redisKey = 'weChat|token'; // wechat全局存储token
      break;
    default:
      break;
  }

  return !id ? redisKey : `${redisKey}:${id}`;
};

