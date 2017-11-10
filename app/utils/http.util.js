const authController = require('../controllers/auth.controller');

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
  render(path, params) {
    const newsParams = params;
    authController.getWeChatJsConfig(this.req, (data) => {
      newsParams.wxConfig = data;
      return this.res.render(path, newsParams);
    });
  }
}

module.exports = HttpSend;
