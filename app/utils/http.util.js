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
    // 之前放在class外部引用，结果因为auth.controller'也引用了HttpSend，造成相互引用，加载死循环了
    const authController = require('../controllers/auth.controller');
    const newsParams = params;
    newsParams.wxConfig = await authController.getWeChatJsConfig(this.req);
    return this.res.render(path, newsParams);
  }
}

module.exports = HttpSend;
