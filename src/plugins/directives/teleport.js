export default {
  install: (app) => {
    app.directive("teleport", {
      inserted: function (element, binding, vnode) {
        console.log("inserted", vnode);
        const target = binding.arg ?? "body";
        const targetEl = document.querySelector(target);
        targetEl.appendChild(element);
      },
      unbind: function (element, binding, vnode) {
        console.log("unbind", vnode);
        if (binding.arg) {
          const target = binding.arg;
          const parent = document.querySelector(target);
          parent.removeChild(element);
        }
      },
    });
  },
};
