import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/modules/login/views/LoginView.vue";
import DashboardView from "@/modules/dashboard/views/DashboardView.vue";
import UsersView from "@/modules/users/views/UsersView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/users",
    name: "Usuários",
    component: UsersView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
