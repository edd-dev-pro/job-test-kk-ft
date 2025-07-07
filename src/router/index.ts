import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Home from "../pages/Home.vue";
import Sales from "../pages/Sales.vue";
import AddSales from "../pages/AddSales.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/sales", component: Sales },
  { path: "/add-sales", component: AddSales },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
