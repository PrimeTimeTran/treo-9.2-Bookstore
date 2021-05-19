var express = require('express');
var router = express.Router();

const authorsController = require("../controllers/authors.controller");

// C.R.U.D.

// CREATE
router.post("/", authorsController.createAuthor);

// READ
router.get("/:id", authorsController.getSingleAuthor);

// UPDATE
router.patch("/:id", authorsController.update);

// DELETE
router.delete("/:id", authorsController.destroy);


module.exports = router;
