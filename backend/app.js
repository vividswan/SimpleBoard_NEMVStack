const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public"));

app.use("/", require("./routes"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost/monogdb_tutorial", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
