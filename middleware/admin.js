const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = {
  auth: function (req, res, next) {
    try {
      var token = req.headers["X-Access-Token"];
      if (!token) {
        throw new Error("Unauthorized");
      }
      jwt.verify(token, config.salt);
      next();
    } catch (err) {
      next(err)(err);
    }
  },
};
