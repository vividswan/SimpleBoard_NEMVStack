const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const router = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));

var db;
MongoClient.connect(
  "mongodb+srv://test_user:1q2w3e4r!@cluster0-xrew2.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true },
  function(err, client) {
    if (err) return console.log(err);
    db = client.db("simplepost");

    app.listen(3000, function() {
      console.log("listening on 3000");
    });
  }
);

require("./routes")(app);
