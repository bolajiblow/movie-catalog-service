const validators = require("../validators");
const services = require("../services");

module.exports = {
  create: function (req, res, next) {
    let { error: validateError, value: params } = validators.movies.create(
      req.body
    );

    if (validateError) {
      next(validateError);
      return;
    }
    services.movies
      .create(params)
      .then((resp) => {
        res.send({ status: "success", data: resp });
      })
      .catch((err) => {
        next(err);
      });
  },

  get: function (req, res, next) {
    let { error: validateError, value: params } = validators.movies.get(
      req.params
    );
    if (validateError) {
      next(validateError);
    }

    services.movies
      .get(params)
      .then((resp) => {
        res.send({ status: "success", data: resp });
      })
      .catch((err) => {
        next(err);
      });
  },

  search: async function (req, res, next) {
    try {
      let { error: validateError, value: params } = validators.movies.search(
        req.body
      );
      let perPage = Number(req.query.perPage) || 30;
      if (perPage > 30) perPage = 30;
      let page = Number(req.query.page) - 1 || 0;
      if (page < 0) page = 0;
      if (validateError) {
        next(validateError);
      }
      var resp = await services.movies.search(params, {
        perPage,
        page,
      });
      res.send(resp);
    } catch (err) {
      next(err);
    }
  },
};
