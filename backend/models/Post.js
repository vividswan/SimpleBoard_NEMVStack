const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const postSchema = mongoose.Schema({
  title: { type: String, default: "", maxlength: 50 },
  content: { type: String, default: "" },
  author: { type: String, default: "이름없음" },
  created_date: { type: Date, default: Date.now }
});

autoIncrement.initialize(mongoose.connection);
postSchema.plugin(autoIncrement.plugin, "post");

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
