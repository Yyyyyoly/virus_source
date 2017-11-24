process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.TZ = 'Asia/Shanghai';

const config = require('./config/config');
const models = require('./app/models');
const app = require('./config/express')();
// // 项目内加openssl
// const https = require('https');
// const fs = require('fs');
//
// const credentials = {
//   key: fs.readFileSync(`${__dirname}/pem/214354661570662.key`),
//   cert: fs.readFileSync(`${__dirname}/pem/214354661570662.pem`),
// };
// const httpsServer = https.createServer(credentials, app);

models.sequelize.sync().then(() => {
  app.listen(config.serverPort, () => {
    console.log(`Server running at ${config.serverHost}:${config.serverPort}`);
  });
});

