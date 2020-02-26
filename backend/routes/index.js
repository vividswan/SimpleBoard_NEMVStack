module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send("get OK");
  });

  app.post("/add", (req, res) => {
    db.collection("counter").findOne({ name: "amount of posts" }, function(
      err,
      data
    ) {
      var postNum = data.totalPost;
      db.collection("post").insertOne(
        {
          _id: postNum + 1,
          title: req.body.title,
          author: req.body.author,
          created_date: Date.now()
        },
        function(err, data) {
          db.collection("counter").updateOne(
            { name: "amount of posts" },
            { $inc: { totalPost: 1 } },
            function(err, data) {
              console.log("post Ok");
              req.send("Save OK");
            }
          );
        }
      );
    });
  });

  app.get("/list", (req, res) => {
    db.collection("post")
      .find()
      .toArray((err, data) => {
        console.log(data);
      });
  });
};
