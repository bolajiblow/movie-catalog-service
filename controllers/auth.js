const validators = require("../validators");
const services = require("../services/auth");

module.exports = {
  signup: function (req, res, next) {
    let { error: validateError, value: params } = validators.auth.signup(
      req.body
    );

    if (validateError) {
      next(validateError);
      return;
    }
    services
      .signup(params)
      .then((resp) => {
        res.send({ status: "success", data: resp });
      })
      .catch((err) => {
        next(err);
      });
  },

  login: function (req, res, next) {
    let { error: validateError, value: params } = validators.auth.login(
      req.body
    );

    if (validateError) {
      next(validateError);
    }
    services
      .login(params)
      .then((resp) => {
        res.send({ status: "success", data: resp });
      })
      .catch((err) => {
        next(err);
      });
  },

  verify: async function (req, res, next) {
    await services
      .verify(req.headers.authorization)
      .then((resp) => {
        req.user = resp;
        next();
      })
      .catch((err) => next(err));
  },
};
