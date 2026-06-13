// src/config/env.js

require("dotenv").config();

const env = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  mongodbUri: process.env.MONGODB_URI,
};

module.exports = env;