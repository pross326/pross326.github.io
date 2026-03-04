import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Review from "../views/Review.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/reviews",
    name: "Review",
    component: Review,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
