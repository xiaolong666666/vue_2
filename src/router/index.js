import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Child1 from "@/views/Home/Child1";
import Child2 from "@/views/Home/Child2";
// import TodoList from "@/views/TodoList";
import Demo from "@/views/Demo";
import Events from "@/views/Events";
import Transition from "@/views/Transition";
import ComponentHigh from "@/views/ComponentHigh";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "首页",
    component: Home,
    children: [
      { path: "child1", component: Child1 },
      { path: "child2/:id/:operate", component: Child2 },
    ],
  },
  {
    path: "/todo-list",
    name: "todo-list",
    // component: TodoList,
    // component: (resolve) => require(["@/views/TodoList"], resolve),
    // component: () => import("@/views/TodoList"),
    component: (r) =>
      require.ensure([], () => r(require("@/views/TodoList")), "todo-list"),
  },
  {
    path: "/events",
    component: Events,
  },
  {
    path: "/transition",
    component: Transition,
  },
  {
    path: "/demo",
    component: Demo,
  },
  {
    path: "/component-high",
    component: ComponentHigh,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
    // 异步滚动
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({ x: 0, y: 0 });
    //   }, 1000);
    // });
  },
});

export default router;
