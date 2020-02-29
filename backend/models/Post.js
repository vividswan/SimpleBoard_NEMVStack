const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, default: "", maxlength: 50 },
  author: { type: String, default: "이름없음" },
  created_date: { type: Date, default: Date.now() }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
