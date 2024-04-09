export default {
  install: (app, config) => {
    console.log({ app, config });
    app.prototype._log = (params) => console.log(params);
  },
};
