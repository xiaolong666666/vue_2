export default {
  install(app) {
    app.directive("focus", {
      inserted: function (el) {
        el.focus();
      },
    });
  },
};
