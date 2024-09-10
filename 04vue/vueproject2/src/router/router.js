import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";

const router = createRouter({
  // history: hash와 관련된 것
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/user", name: "user", component: UserView },
  ],
});

export default router;
