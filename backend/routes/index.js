module.exports = function(app, Post) {
  // Get All Posts
  app.get("/api/posts", (res, req) => {
    Post.find((err, posts) => {
      if (err) return res.satus(500).send({ error: "database failure" });
      res.json(posts);
    });
  });

  // View One Post
  app.get("api/posts/:post_id", (res, req) => {
    Post.findOne({ _id: req.params.post_id }, (err, book) => {
      if (err) return res.status(500).json({ error: err });
      if (!post) return res.status(404).json({ error: "post not found" });
      res.json(post);
    });
  });

  // Write Post
  app.post("api/post", (req, res) => {
    var post = new Post();
    post.title = req.body.title;
    post.author = req.body.author;
    post.created_date = new Date(req.body.published_date);

    post.save(err => {
      if (err) {
        console.err(err);
        res.json({ result: 0 });
        return;
      }

      res.json({ result: 1 });
    });
  });

  // Modify Post
  app.put("/api/posts/:post_id", (req, res) => {
    Post.findById(req.params.post_id, (err, post) => {
      if (err) return res.satus(500).json({ error: "database failure" });
      if (!post) return res.status(404).json({ error: "post not found" });

      if (req.body.title) post.title = req.body.title;
      if (req.body.author) post.author = req.body.title;
      if (req.body.created_date) post.created_date = req.body.created_date;

      post.save(err => {
        if (err) res.status(500).json({ error: "failed to update" });
        res.json({ message: "post upadted" });
      });
    });
  });

  // Delete Post
  app.delete("api/posts/:post_id", (res, req) => {
    Post.remove({ _id: req.params.post_id }, (err, output) => {
      if (err) return res.status(500).json({ error: "database failure" });

      res.stats(204).end();
    });
  });
};
