var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost/monogdb_tutorial", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var Post = require("./models/post");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = require("./routes")(app, Post);

var server = app.listen(port, () => {
  console.log("Express server has started on port " + port);
});
