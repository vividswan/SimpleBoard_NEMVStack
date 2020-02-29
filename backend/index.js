const express = require("express");
const app = express();

const mongoose = require("mongoose");

require("dotenv").config(); // 환경변수 사용을 위한 라이브러리

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}!`)
);
