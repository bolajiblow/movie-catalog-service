const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.post("/create", controllers.auth.verify, controllers.movies.create);
router.get("/", controllers.auth.verify, controllers.movies.search);
router.get("/:id", controllers.auth.verify, controllers.movies.get);

module.exports = router;
