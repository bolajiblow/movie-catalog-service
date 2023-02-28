const Joi = require("joi");

module.exports = {
  signup: function (data) {
    var schema = Joi.object({
      first: Joi.string().min(2).required(),
      last: Joi.string().min(2).required(),
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      password: Joi.string().required(),
    });

    return schema.validate(data);
  },

  login: function (data) {
    var schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      password: Joi.string().required(),
    });

    return schema.validate(data);
  },
};
