import createApp from "./ssr_entry.js/index.js";

const { app, router } = createApp();

router.onReady(() => {
  app.$mount("#app");
});
