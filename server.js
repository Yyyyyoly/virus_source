process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./config/config');
const express = require('./config/express');
const mysql = require('./config/sequelize');
const mongoose = require('./config/mongoose');

// database must go first
const mysql = mysql();
const monogdb = mongoose();
const app = express();
app.listen(config.serverPort);

module.exports = app;
console.log(`Server running at ${config.serverHost}:${config.serverPort}`);
