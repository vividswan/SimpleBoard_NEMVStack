var express = require("express");
var router = express.Router();
const Post = require("../../models/Post");

// router.get("/", function(req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/", (req, res, next) => {
  Post.find()
    .then(ans => {
      res.send({ success: true, posts: ans });
    })
    .catch(err => {
      res.send({ success: false, error: err.message });
    });
});

router.post("/", (req, res, next) => {
  const { title, content, author, created_date } = req.body; //  Object Destructuring
  const post = new Post({ title, author, created_date });
  post
    .save()
    .then(ans => {
      res.send({ success: true, message: ans });
    })
    .catch(err => {
      res.send({ success: false, error: err.message });
    });
});

router.put(":id", (req, res, next) => {
  const id = req.params.id;
  const { title, content, author, created_date } = req.body;
  Post.updateOne({ _id: id }, { $set: { title, author, created_date } })
    .then(ans => {
      res.send({ success: true, msg: ans });
    })
    .catch(err => {
      res.send({ success: false, msg: err.message });
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .then(ans => {
      res.send({ success: true, msg: ans });
    })
    .catch(err => {
      res.send({ success: false, msg: err.message });
    });
  res.send({ success: true, msg: "del ok" });
});

module.exports = router;
