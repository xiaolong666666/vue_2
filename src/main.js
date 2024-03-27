import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import xlButton from "./plugin/xl-button";
import "./components/customComponent.js";
import "./styles/index.less";

Vue.config.productionTip = false;

Vue.use(xlButton, {});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
