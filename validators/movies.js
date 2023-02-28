const Joi = require("joi");

module.exports = {
  create: function (data) {
    var schema = Joi.object({
      title: Joi.string().required(),
      producer: Joi.string().required(),
      releaseDate: Joi.date().required(),
      pgRating: Joi.number().required(),
      upvotes: Joi.number(),
      downvotes: Joi.number(),
      rating: Joi.number().required(),
      imageUrl: Joi.string().required(),
      genre: Joi.string().required(),
      description: Joi.string().required(),
    });

    return schema.validate(data);
  },

  search: function (data) {
    var schema = Joi.object({
      title: Joi.string(),
      producer: Joi.string(),
      pgRating: Joi.number(),
      releaseDate: Joi.date(),
      rating: Joi.number(),
      genre: Joi.string(),
    });
    return schema.validate(data);
  },

  get: function (data) {
    var schema = Joi.object({
      id: Joi.string().required(),
    });

    return schema.validate(data);
  },
};
