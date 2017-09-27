const config = require('../../config/config');
const SMSClient = require('@alicloud/sms-sdk/index');
const randomstring = require('randomstring');
const HttpSend = require('../utils/http.util');
const constants = require('../../config/constants');

const smsClient = new SMSClient({
  accessKeyId: config.messageConfig.accessKeyId,
  secretAccessKey: config.messageConfig.secretAccessKey,
});

// 获取短信验证码
exports.MessageSend = function (req, res) {
  const phone = req.body.phone || '';
  // {验证码获取频次,频次控制时间}
  const getTimes = req.session.getTimes || { count: 0, expire_time: 0 };
  const resUtil = new HttpSend(req, res);

  // 验证手机号是否正确
  if (!phone || phone.length !== 11 || !(/^1[34578]\d{9}$/.test(phone))) {
    resUtil.sendJson(constants.HTTP_FAIL, '手机号格式不正确');
    return;
  }

  // 验证获取短信是否过于频繁（目前定义5分钟3次）
  if (getTimes.count >= constants.MESSAGE_MAX_TIME
    && !getTimes.expire_time
    && getTimes.expire_time >= Date.now()) {
    resUtil.sendJson(constants.HTTP_FAIL, '获取短信验证码频繁，请稍后再试');
    return;
  }

  // 生成验证码并发送
  const randNum = randomstring.generate({
    length: 6,
    charset: 'numeric',
  });

  smsClient.sendSMS({
    PhoneNumbers: phone,
    SignName: config.messageConfig.MessageSignName,
    TemplateCode: config.messageConfig.MessageTemplete,
    TemplateParam: `{"number":"${randNum}"}`,
  }).then((response) => {
    const { Code } = response;
    if (Code === 'OK') {
      const now = Date.now();
      // 保存验证码及过期时间
      req.session.verifyCode = {
        verify_code: randNum,
        expire_time: now + constants.MESSAGE_EXPIRE_TIME,
      };

      if (getTimes.expire_time && getTimes.expire_time >= now) {
        req.session.getTimes.count += 1;
      } else {
        req.session.getTimes = { count: 1, expire_time: now + constants.MESSAGE_MIN_INTERVAL };
      }

      resUtil.sendJson(constants.HTTP_SUCCESS, '');
      return;
    }
    resUtil.sendJson(constants.HTTP_FAIL, '获取验证码失败');
  }).catch((err) => {
    console.log(err);
    resUtil.sendJson(constants.HTTP_FAIL, '系统错误');
  });
};

// 验证码比对
exports.CodeVerify = function (req, code = 0) {
  const verifyCode = req.session.verifyCode || {};

  // 缺少或已过期
  if (!verifyCode || verifyCode.expire_time < Date.now()) {
    return false;
  }

  // 验证码错误
  if (!code || !verifyCode.verify_code || verifyCode.verify_code !== code) {
    return false;
  }

  req.session.verifyCode = {};

  return true;
};

