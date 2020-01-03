import Vue from "vue";
import VueRouter from "vue-router";
import Echo from "../views/Echo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Echo
  }
];

const router = new VueRouter({
  routes
});

export default router;
