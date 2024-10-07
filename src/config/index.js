/* eslint-disable no-undef */
const { config } = require("dotenv");

config();
const env = process.env.NODE_ENV;
config({ path: `.env.${env}`, override: true });

const Config = {
  portApp: process.env.PORT_APP,
  env,
};

module.exports = Config;
