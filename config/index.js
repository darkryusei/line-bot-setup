const dotenv = require("dotenv");
dotenv.config();

// module.exports = {
//   accessToken:
//     process.env.accessToken ||
//     "k0ooJQMReRmTLufPlqV53b7vGQFTTE1e4QTusGQQCh781Ws9O0WfFz9Xm0f076QlvYSEuN17x+mUjCRx9o++PL8n9tQXriEFYLIP/Lp09CnYnIMJMqdvrKPoUUxGk3+BbAqbT/uyN7qgOUGYETssGwdB04t89/1O/w1cDnyilFU=",
//   secret: process.env.secret || "a646aea70d404ba73a50d2f5d2518380",
//   richMenu: process.env.richMenu || "richmenu-741425b57f96903e1d8615fe56eefd84",
//   port: process.env.port || 3000,
// };
module.exports = {
  accessToken: process.env.accessToken,
  secret: process.env.secret,
  richMenu: process.env.richMenu,
  port: process.env.port,
};
