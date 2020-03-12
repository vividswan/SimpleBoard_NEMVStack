const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const postSchema = mongoose.Schema({
  title: { type: String, default: "NoTitle", maxlength: 50, unique: false },
  content: { type: String, default: "NoContent", unique: false },
  author: { type: String, default: "NoAuthor", unique: false },
  created_date: { type: Date, default: Date.now() }
});

autoIncrement.initialize(mongoose.connection);
postSchema.plugin(autoIncrement.plugin, "post");

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
