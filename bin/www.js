const app = require("../app");
const main = require("../database");

// Connect to mongoDB
main().catch((err) => console.log(err));

// Start server
app.listen(5000, function () {
  console.log("server is running on port 5000");
});
