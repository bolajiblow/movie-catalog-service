const jwt = require("jsonwebtoken");
const config = require("../config");
const models = require("../models");

module.exports = {
  adminAuth: function (req, res, next) {
    try {
      let token = req.headers["X-Access-Token"];
      if (!token) {
        throw new Error("Unauthorized");
      }
      let payload = jwt.verify(token, config.salt);
      let admin = models.admin.findOne({ where: { email: payload.uuid } });
      if (!admin) {
        throw new Error("Invalid Admin");
      }
      req["admin"] = admin;
      next();
    } catch (err) {
      next(err)(err);
    }
  },

  userAuth: function (req, res, next) {
    try {
      let token = req.headers["X-Access-Token"];
      if (!token) {
        throw new Error("Unauthorized");
      }
      let payload = jwt.verify(token, config.salt);
      let user = models.users.findOne({ where: { email: payload.uuid } });
      if (!user) {
        throw new Error("Invalid Users");
      }
      req["user"] = user;
      next();
    } catch (err) {
      next(err)(err);
    }
  },
};
