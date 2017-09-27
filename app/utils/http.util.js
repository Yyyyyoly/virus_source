const http = require('http');
const querystring = require('querystring');

class HttpSend {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  // 统一的sendJson方法
  sendJson(errCode = 200, reason = '', params = '') {
    return this.res.send(JSON.stringify({ errCode, reason, params }));
  }

  // 统一的外部http请求方法
  static httpRequest(server, data, callback) {
    // 参数
    let resData = '';
    let errCode = 200;
    let options = '';

    // 需要传递的参数
    const postData = querystring.stringify(data);

    // 根据请求种类选择不同的方法
    if (server.method === 'get') {
      options = `${server.host + server.path}?${postData}`;
    } else {
      options = {
        hostname: server.host,
        port: server.port || '80',
        path: server.path,
        method: server.method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.from(postData, 'utf-8'),
        },
      };
    }

    const request = http.request(options, (response) => { // 请求
      errCode = response.statusCode;
      response.setEncoding('utf8');
      response.on('data', (rtnData) => {
        resData += rtnData;
      });
      response.on('end', () => {
        try {
          resData = JSON.parse(resData);
          callback(errCode, resData);
        } catch (err) {
          errCode = 401;
          callback(errCode, err);
        }
      });
    });

    request.on('error', (err) => {
      errCode = 400;
      callback(errCode, err);
    });
    request.write(postData);
    request.end();
  }
}

module.exports = HttpSend;
