import VueRouter from "vue-router";
import Demo from "@/views/Demo";

export default function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: [
      {
        path: "/demo",
        component: Demo,
      },
    ],
  });
}
