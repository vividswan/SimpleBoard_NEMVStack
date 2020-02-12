var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  title: String,
  author: String,
  created_date: { type: Date, default: Date.now }
});

// create Model
module.exports = mongoose.model("Post", postSchema);
