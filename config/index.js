if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  url: process.env.URL,
  jwt_secret: process.env.JWT_SECRET,
};
