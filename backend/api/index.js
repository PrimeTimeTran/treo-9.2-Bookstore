var express = require('express');
var router = express.Router();


var authorsRouter = require("./authors.api");
router.use("/authors", authorsRouter);

module.exports = router;
