const crypto = require('crypto');

// 生成签名（返回带签名的参数列表）
// 若传入params中存在timestamp则使用params中的timestamp进行计算
module.exports.genSignature = function (params, privateKey) {
  // 临时参数
  const tempParams = {};

  // 复制参数到临时参数
  for (const item in params) {
    if (params[item].constructor === Array || params[item].constructor === Object) {
      tempParams[item] = JSON.parse(JSON.stringify(params[item]));
    } else {
      tempParams[item] = params[item];
    }
  }

  // 加入时间戳
  tempParams.timestamp = tempParams.timestamp || new Date().getTime();

  // key按照字典顺序排序
  const paramKeys = Object.keys(tempParams).sort((a, b) => (a > b ? 1 : -1));

  // 组建加密字符串
  let tempStr = '';
  for (let i = 0; i < paramKeys.length; i += 1) {
    if (tempParams[paramKeys[i]].constructor === Array ||
      tempParams[paramKeys[i]].constructor === Object) {
      tempStr += paramKeys[i] + JSON.stringify(tempParams[paramKeys[i]]);
    } else {
      if (tempParams[paramKeys[i]] === false) {
        tempParams[paramKeys[i]] = 'false';
      }
      if (tempParams[paramKeys[i]] === 0) {
        tempParams[paramKeys[i]] = '0';
      }
      if (tempParams[paramKeys[i]] === null || tempParams[paramKeys[i]] === undefined) {
        tempParams[paramKeys[i]] = '';
      }

      tempStr += paramKeys[i] + tempParams[paramKeys[i]];
    }
  }

  // 私钥
  tempStr += privateKey;

  // 计算签名
  tempParams.signature = crypto.createHash('sha1').update(encodeURIComponent(tempStr)).digest('hex');

  // 返回带签名的参数列表
  return tempParams;
};
