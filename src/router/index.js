import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "@/views/TodoList";
import Demo from "@/views/Demo";
import Events from "@/views/Events";

Vue.use(VueRouter);

const routes = [
  {
    path: "/todo-list",
    component: TodoList,
  },
  {
    path: "/events",
    component: Events,
  },
  {
    path: "/demo",
    component: Demo,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
