const crypto = require('crypto');
const config = require('../../config/config');


// 生成签名（返回带签名的参数列表）
// 若传入params中存在timestamp则使用params中的timestamp进行计算
module.exports.genSignature = function (params, privateKey = '') {
  const signatureParams = params;
  const keys = Object.keys(signatureParams);

  if (!keys.length) {
    signatureParams.signature = '';
    return signatureParams;
  }

  // 没有额外的密钥  就取配置中的默认密钥
  privateKey = privateKey || config.shopServerConfig.privateKey;

  // 加入时间戳
  signatureParams.timestamp = signatureParams.timestamp || new Date().getTime();

  const s = keys.sort().map(key => `${key}:${JSON.stringify(signatureParams[key]) || ''}`).join(',');
  const signatureString = s ? `${s},privateKey:${privateKey}` : `privateKey:${privateKey}`;
  // note: crypto objects are not reusable
  // 之前的做法:
  // const crypto = require('crypto').createHash('sha1');
  // crypto.update().digest()会在第二次的调用时候报错Digest already called
  signatureParams.signature = crypto.createHash('sha1').update(signatureString, 'utf8').digest('hex');
  // 返回带签名的参数列表
  return signatureParams;
};
