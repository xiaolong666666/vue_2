export default {
  install(app) {
    // vue 项目有两种模式：Runtime + compiler模式 和 Runtime-only 模式，使用 Vue.component()，需在 vue.config.js 设置 runtimeCompiler: true
    app.component("xl-button", {
      name: "xl-button",
      template:
        '<button :class="xlButton"><i class="iconfont icon-long"></i><slot /></button>',
      props: {
        type: {
          type: String,
          default: "default",
        },
      },
      computed: {
        xlButton() {
          return `xl-btn ${this.type}`;
        },
      },
    });
  },
};
