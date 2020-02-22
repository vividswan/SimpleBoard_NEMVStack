module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send("get OK");
  });

  app.post("/add", (req, res) => {
    res.send("post success");
    db.collection("post").insertOne({
      title: req.body.title,
      author: req.body.author,
      created_date: Date.now()
    });
    db.collection;
  });

  app.get("/list", (req, res) => {
    db.collection("post")
      .find()
      .toArray((err, data) => {
        console.log(data);
      });
  });
};
