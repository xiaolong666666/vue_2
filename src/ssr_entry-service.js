import createApp from "./ssr_entry.js/index.js";

export default (context) =>
  new Promise((resolve, reject) => {
    const { app, router } = createApp(context);

    router.push(context.url);
    router.onReady(() => {
      resolve(app);
    }, reject);
  });
