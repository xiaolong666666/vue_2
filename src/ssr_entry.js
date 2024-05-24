import Vue from "vue";
import createRouter from "./router/ssr_createRouter";
import App from "./App.vue";

export default function () {
  const router = createRouter();
  const app = new Vue({
    router,
    render: (h) => h(App),
  });

  return {
    app,
    router,
  };
}
