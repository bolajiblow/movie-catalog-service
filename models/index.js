const userSchema = require("./users");
const moviesSchema = require("./movies");
module.exports = {
  users: userSchema,
  movies: moviesSchema,
};
