import { createRouter, createWebHashHistory } from "vue-router";
import App  from "../pages/App.vue";
import pageBocetas from "../pages/page1.vue";
import pageConclusion from "../pages/page2.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: App,
  },
  {
    path: "/page1",
    name: "page1",
    component: pageBocetas
  },
  {
    path: "/page2",
    name: "page2",
    component: pageConclusion
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
