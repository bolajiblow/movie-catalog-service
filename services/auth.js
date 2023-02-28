const JWT = require("jsonwebtoken");
const models = require("../models");
const crypto = require("crypto");
const bcryptjs = require("bcryptjs");
const config = require("../config");

module.exports = {
  signup: async function (data) {
    const existing = await models.users.findOne({ email: data.email });
    if (existing != null) throw new Error("User already exists");
    const md5 = crypto.createHash("md5");
    data.reset = md5.update(data.email).digest("hex");
    const salt = await bcryptjs.genSalt();
    data.password = await bcryptjs.hash(data.password, salt);
    data.salt = salt;
    const user = await models.users.create(data);
    return { message: "user creation success" };
  },

  login: async function (data) {
    const user = await models.users.findOne({ email: data.email });
    if (user == null) throw new Error("User does not exists");
    const valid = await bcryptjs.compare(data.password, user.password);
    if (!valid) throw new Error("Incorrect email or password");
    user.lastlogin = Date.now();
    await user.save();
    return {
      message: "user login success",
      body: {
        token: JWT.sign(
          { user_id: user.id, email: user.email },
          config.jwt_secret
        ),
      },
    };
  },

  verify: async function (data) {
    let user;
    if (!data) throw new Error("Unauthourized");
    const token = data.split(" ")[1];
    JWT.verify(token, config.jwt_secret, (err, payload) => {
      if (err) {
        throw new Error(`Unauthourized: ${err}`);
      }
      user = payload;
    });
    return user;
  },
};
