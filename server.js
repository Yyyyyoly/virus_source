process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('./config/express');
const mongoose = require('./config/mongoose');
const config = require('./config/config');

// mongodb must go first
const monogdb = mongoose();
const app = express();
app.listen(config.serverPort);

module.exports = app;
console.log(`Server running at ${config.domain}:${config.serverPort}`);
