var express = require("express");
var router = express.Router();
const Post = require("../../models/Post");

// router.get("/", function(req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/", (req, res, next) => {
  Post.find()
    .then(data => {
      res.send({ success: true, posts: data });
    })
    .catch(err => {
      res.send({ success: false, error: err });
    });
});

router.post("/", (req, res, next) => {
  const { title, author, created_date } = req.body;
  const post = new Post({ title, author, created_date });
  post
    .save()
    .then(data => {
      res.send({ success: true, message: data });
    })
    .catch(err => {
      res.send({ success: false, error: err });
    });
});

router.put(":id", (req, res, next) => {
  const id = req.params.id;
  const { title, author, created_date } = req.body;
  Post.updateOne({ _id: id }, { $set: { title, author, created_date } })
    .then(res => {
      res.send({ success: true, msg: res });
    })
    .catch(err => {
      res.send({ success: false, msg: err.message });
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .then(res => {
      res.send({ success: true, msg: res });
    })
    .catch(err => {
      res.send({ success: false, msg: err.message });
    });
  res.send({ success: true, msg: "del ok" });
});

module.exports = router;
