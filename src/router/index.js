import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageView from "../views/PageView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pages/:name",
    name: "pages",
    component: PageView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
