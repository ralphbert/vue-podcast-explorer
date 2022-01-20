import VueRouter, { RouteConfig } from "vue-router";
import Vue from "vue";
import DetailPage from "@/pages/DetailPage.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/:feedId",
    name: "details",
    component: DetailPage,
    props: true,
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
