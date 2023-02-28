const express = require("express");
var bodyParser = require("body-parser");
const home = require("./routes/index");
const auth = require("./routes/auth");
const movies = require("./routes/movies");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

app.use("/", home);
app.use("/auth", auth);
app.use("/movies", movies);

app.use(function (err, req, res, next) {
  //console.log("Here:", err.name);
  if (err.stack) {
    if (err.stack.includes("ValidationError")) {
      res.status(400).send({ status: "fail", message: err.message });
    }
    res.status(500).send({ status: "fail", message: err.message });
  }
});

module.exports = app;
