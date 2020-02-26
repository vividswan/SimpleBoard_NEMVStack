const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const router = require("./routes");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));

var db;
MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }, function(
  err,
  client
) {
  if (err) return console.log(err);
  db = client.db("simplepost");

  app.listen(process.env.PORT, function() {
    console.log("listening on " + `${process.env.PORT}`);
  });
});

require("./routes")(app);
