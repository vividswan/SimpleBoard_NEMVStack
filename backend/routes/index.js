module.exports = function(app) {
  app.get("/api/posts", (res, req) => {
    res.end();
  });
  app.get("api/posts/:post_id", (res, req) => {
    res.end();
  });
  app.post("api/posts/:post_id", (res, req) => {
    res.end();
  });
  app.delete("api/posts/:post)id", (res, req) => {
    res.end();
  });
};
