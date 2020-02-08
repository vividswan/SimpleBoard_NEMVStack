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
