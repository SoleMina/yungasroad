import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tours",
    name: "tours",
    component: () => import("../views/ToursComponent.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
