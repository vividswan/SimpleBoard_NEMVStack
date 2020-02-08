var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = porcess.env.PORT || 5000;

var router = require("./routes")(app);

var server = app.listen(port, () => {
  console.log("Express server has started on port " + port);
});

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost/monogdb_tutorial");
