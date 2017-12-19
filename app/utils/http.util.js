const weChatUtil = require('./wechat.util');

class HttpSend {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  // 统一的sendJson方法
  sendJson(errCode = 200, reason = '', params = '') {
    return this.res.send(JSON.stringify({ errCode, reason, params }));
  }

  // 统一的render方法
  async render(path, params) {
    const newsParams = params;
    newsParams.wxConfig = await weChatUtil.getWeChatJsConfig(this.req);
    return this.res.render(path, newsParams);
  }

  // 把字节流转成json字符串，因为那个该死的外包
  transferJson() {
    return new Promise((resolve) => {
      let body = '';
      let jsonStr = '';
      this.req.on('data', (chunk) => {
        body += chunk; // 读取参数流转化为字符串
      });
      this.req.on('end', () => {
        // 读取参数流结束后将转化的body字符串解析成 JSON 格式
        try {
          jsonStr = JSON.parse(body);
        } catch (err) {
          jsonStr = null;
        }
        resolve(jsonStr);
      });
    });
  }
}

module.exports = HttpSend;
