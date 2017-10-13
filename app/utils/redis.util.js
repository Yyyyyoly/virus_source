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
      redisKey = 'data|commission'; // 用户佣金总额
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
    default:
      break;
  }

  return !id ? redisKey : `${redisKey}:${id}`;
};

