# SimpleBoard_NEMVStack

Node.js, Express.js, MongoDB(Mongoose), Vue.js(vuetify)를 활용한 CRUD Simple Board

### 실행

서버 실행(.env에서 port, Mongodb url 지정)

```javascript
cd backend
nodemon run start
```

클라이언트 실행

```javascript
cd frontend
yarn serve
```

![](/assets/images/200312-1.gif)
![](/assets/images/200312-2.gif)

---

## Update

- vuetify data-table을 통한 post list 표시 구현 - commit: [f038a9a](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/f038a9af916b4159d960caae3baf837f183e8300)<br>
- vue.config로 backend 서버와 vue.js 연동 - commit: [f79b5f7](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/f79b5f75c3c5fd2048bb046a79459a096c3d703b)<br>
- mongoose를 활용한 mongodb와 backend 연결 (dotenv을 통해 환경변수 사용) - commit: [e4f270b](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/e4f270b1f1b1b347d7a7c7aa40de79afe4893a84)<br>
- 게시물의 mongodb 데이터를 위한 model 및 schema 생성 - commit: [3589509](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/35895091eb8703e24e6ba87588d4b51fc8b7a1e3)<br>
- get, post, put, delete 작업을 위한 router 작성 (Object Destructuring 사용) - commit: [9b7490d](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/9b7490d8af078dec3ab810f43811372723f9cf36)<br>
- moment를 활용한 게시물 작성시간 표시 - commit: [297bd26](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/297bd260bf6fe1cda6ed06d5b75736fc65e87c05)<br>
- mongoose-auto-increment를 이용한 게시물 번호 생성(DOCUMENT id를 넘버링) - commit: [ce1012d](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/ce1012dbb8a8c5469cf2b97526e03b7f74291a1d)<br>
- v-if를 이용한 page loading 구현 - commit: [f15d0ac](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/f15d0acd573d06ee649fd378d61c9b3c5968c181)<br>
- frontend router 생성 및 route 추가 - commit: [3316ac3](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/3316ac3842ff38e073effd1a4a6914bf6f505915)<br>
- v-card를 이용한 게시글 view 생성 - commit: [d7c09c7](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/d7c09c773797a04b643de9f1c46d50c664f13dc0)<br>
- sort를 이용하여 게시글 id 역순으로\(-\_id) 호출 - commit: [8df726a](https://github.com/vividswan/SimpleBoard_NEMVStack/commit/8df726acb159ca6584607c8e5510ca7ecc37c28a)<br>
