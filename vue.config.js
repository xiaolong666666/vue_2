const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  css: {
    loaderOptions: {
      less: {
        // 这里可以配置less选项
      },
    },
  },
});
