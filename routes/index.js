const express = require("express");
const router = express.Router();
const me = require("../package.json");

module.exports = router.get("/", (req, res) => {
  res.send({ name: me.name, version: me.version });
});
