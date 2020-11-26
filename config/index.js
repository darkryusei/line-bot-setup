const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  accessToken: process.env.accessToken,
  secret: process.env.secret,
  richMenu: process.env.richMenu,
  port: process.env.port,
};
