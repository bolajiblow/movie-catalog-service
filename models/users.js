const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.set("strictQuery", true);
const userSchema = new Schema({
  first: String,
  last: String,
  email: String,
  password: String,
  timestamp: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  salt: String,
  reset: String,
  lastlogin: Date,
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
