const models = require("../models");

module.exports = {
  create: async function (data) {
    const user = models.users.findOne({ email: data.user_id });
    if (user == null) throw new Error("User does not exists");
    const movie = await models.movies.create(data);
    return { message: "movie creation success", movie };
  },

  search: async function (data, query) {
    const movies = await models.movies
      .find(data)
      .limit(query.perPage)
      .skip(query.perPage * query.page)
      .sort({
        timestamp: "desc",
      });
    if (movies == null || movies.length == 0)
      throw new Error("Movie does not exists");

    return {
      message: "movie search success",
      body: { movies },
    };
  },

  get: async function (data) {
    const movie = await models.movies.findOne({ id: data.id });
    if (movie == null) throw new Error("Movie does not exists");

    return {
      message: "movie get success",
      body: { movie },
    };
  },
};
