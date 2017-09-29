// 获取redisKey
exports.getRedisPrefix = (type, id) => {
  let redisKey = '';
  switch (type) {
    case 1:
      redisKey = 'data|pv|news'; // 文章的浏览记录
      break;
    case 2:
      redisKey = 'data|pv|user'; // 用户的浏览记录
      break;
    case 3:
      redisKey = 'data|thumbUp|news'; // 文章的点赞记录
      break;
    case 4:
      redisKey = 'data|thumbUp|user'; // 用户的点赞记录
      break;
    case 5:
      redisKey = 'range|pv|news'; // 文章浏览排行榜
      break;
    default:
      break;
  }

  return `${redisKey}:${id}`;
};

