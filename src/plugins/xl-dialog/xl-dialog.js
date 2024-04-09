import xlDialog from "./dialog.vue";

export default {
  install(app) {
    // 注册组件
    app.component("xl-dialog", xlDialog);
  },
};
