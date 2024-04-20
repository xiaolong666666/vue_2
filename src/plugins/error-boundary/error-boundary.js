import ErrorBoundary from "./error-boundary.vue";

export default {
  install(app) {
    // 注册组件
    app.component("error-boundary", ErrorBoundary);
  },
};
