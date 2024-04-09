const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  // webpack 配置文件
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("/src"),
        styles: resolve("/src/styles"),
        plugins: resolve("/src/plugins"),
      },
    },

    devServer: {
      proxy: {
        "/api": {
          target: "https://jsonplaceholder.typicode.com",
          // ws: true,
          changeOrigin: true,
          pathRewrite: { "^/api": "" },
        },
      },
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
