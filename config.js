const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  email: process.env.EMAIL,
  password: process.env.EMAIL_PASSWORD,
  port: process.env.SERVER_PORT,
  url: process.env.BASE_URL
};
