import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import Resume from "../views/Resume.vue";
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
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/reviews",
    redirect: "/", // Redirect reviews path to home
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
  history: createWebHistory(),
  routes,
});

export default router;
