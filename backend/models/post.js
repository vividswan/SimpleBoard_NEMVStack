var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  author: String,
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", postSchema);
