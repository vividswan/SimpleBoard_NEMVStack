const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Post } = require("./models/Post");
const bodyParser = require("body-parser"); //클라이언트에게 req.body를 받기 위한 dependency
const postApi = require("./routes/api/index");
const cors = require("cors");

require("dotenv").config(); // 환경변수 사용을 위한 라이브러리

// application/x-www-form-urlencoded 데이터 분석
app.use(bodyParser.urlencoded({ extended: true }));
// application/json 데이터 분석
app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(cors());
app.use("/api", postApi);

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/add", (req, res) => {
  // 게시글을 만들 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  const post = new Post(req.body);

  post.save((err, postInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}!`)
);
