const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: {
    trim: true,
    type: String,
    unique: true,
    required: true,
  },
  teacher: {
    type: String,
  },
  publisher: {
    type: String,
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;