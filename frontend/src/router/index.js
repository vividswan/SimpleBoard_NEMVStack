import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "postlist",
      component: () => import("../components/PostList.vue")
    },
    {
      path: "/:id",
      name: "content",
      component: () => import("../components/Content.vue")
    }
  ]
});
