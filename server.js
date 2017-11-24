process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.TZ = 'Asia/Shanghai';

const config = require('./config/config');
const models = require('./app/models');
const app = require('./config/express')();
// 项目内加openssl
const https = require('https');
const fs = require('fs');

const credentials = {
  key: fs.readFileSync('./pem/privatekey.pem'),
  cert: fs.readFileSync('./pem/certificate.pem'),
};
const httpsServer = https.createServer(credentials, app);

models.sequelize.sync().then(() => {
  httpsServer.listen(config.serverPort, () => {
    console.log(`Server running at ${config.serverHost}:${config.serverPort}`);
  });
});

