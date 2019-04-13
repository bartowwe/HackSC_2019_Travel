var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/newuser", function(req, res) {
  res.send("First post run worked successfully!");
});

module.exports = router;