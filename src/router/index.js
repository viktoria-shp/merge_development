import { routesNames, routesPath } from "./routes";

import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: routesPath.home,
    name: routesNames.home,
    component: Home,
  },
  {
    path: routesPath.singIn,
    name: routesNames.singIn,
    component: SignIn,
  },
  {
    path: routesPath.signUp,
    name: routesNames.signUp,
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
