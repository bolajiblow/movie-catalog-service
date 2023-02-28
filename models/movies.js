const mongoose = require("mongoose");
const Users = require("./users");
const { Schema } = mongoose;
mongoose.set("strictQuery", true);

const movieSchema = new Schema({
  title: String,
  producer: String,
  releaseDate: { type: Date, default: Date.now },
  pgRating: Number,
  upvotes: Number,
  downvotes: Number,
  rating: Number,
  imageUrl: String,
  genre: String,
  description: String,
  timestamp: { type: Date, default: Date.now },
});
const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies;
