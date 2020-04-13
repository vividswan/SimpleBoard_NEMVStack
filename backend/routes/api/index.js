var express = require("express");
var router = express.Router();
const Post = require("../../models/Post");

// router.get("/", function(req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  Post.findOne({ _id: id })
    .then((ans) => {
      res.send({ success: true, post: ans });
    })
    .catch((err) => {
      res.send({ success: false, error: err.message });
    });
});

router.get("/", (req, res, next) => {
  Post.find()
    .sort("-_id") // 게시글 순서를 거꾸로 보내줌
    .then((ans) => {
      res.send({ success: true, posts: ans });
    })
    .catch((err) => {
      res.send({ success: false, error: err.message });
    });
});

router.post("/", (req, res, next) => {
  const { title, content, author, created_date } = req.body; //  Object Destructuring
  const post = new Post({ title, content, author, created_date });
  post
    .save()
    .then((ans) => {
      res.send({ success: true, message: ans });
    })
    .catch((err) => {
      res.send({ success: false, error: err.message });
    });
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const { title, content, author } = req.body;
  Post.updateOne({ _id: id }, { $set: { title, content, author } })
    .then((ans) => {
      res.send({ success: true, msg: ans });
    })
    .catch((err) => {
      res.send({ success: false, msg: err.message });
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Post.deleteOne({ _id: id })
    .then((ans) => {
      res.send({ success: true, msg: ans });
    })
    .catch((err) => {
      res.send({ success: false, msg: err.message });
    });
  res.send({ success: true, msg: "del ok!" });
});

module.exports = router;
