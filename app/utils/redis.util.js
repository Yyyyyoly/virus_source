// 获取redisKey
exports.getRedisPrefix = (type, id = '') => {
  let redisKey = '';
  switch (type) {
    case 1:
      redisKey = 'rank|thumbUp|news'; // 文章点赞排行榜
      break;
    case 2:
      redisKey = 'rank|pv|news'; // 文章浏览排行榜
      break;
    default:
      break;
  }

  return !id ? redisKey : `${redisKey}:${id}`;
};

