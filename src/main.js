import Vue from "vue";
import VueWait from "vue-wait";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "plugins";
import "styles/reset.less";
import "styles/iconfont.less";
import "animate.css/animate.min.css";

Vue.config.productionTip = false;

Vue.use(VueWait);

new Vue({
  router,
  store,
  wait: new VueWait(),
  render: (h) => h(App),
}).$mount("#app");
