const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const home = require("./routes/index");
const auth = require("./routes/auth");
const movies = require("./routes/movies");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
var corsOptions = {
  origin: async function (origin, callback) {
    callback(null, "*");
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
  credentials: true,
  allowedHeaders:
    "Authorization, Origin, X-Requested-With, Content-Type, Accept",
  maxAge: 3600,
};

app.use(cors(corsOptions));
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