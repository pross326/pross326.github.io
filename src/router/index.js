import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import Review from "../views/Review.vue";
import LeaveAReview from "../views/LeaveAReview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/reviews",
    name: "Review",
    component: Review,
  },
  {
    path: "/leave-a-review",
    name: "LeaveAReview",
    component: LeaveAReview,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
