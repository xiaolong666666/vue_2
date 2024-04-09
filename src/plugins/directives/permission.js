export default {
  install(app) {
    app.directive("permission", (element, binding) => {
      console.log(element, binding);
      if (binding.value === 1) return;

      if (element.parentNode) {
        element.parentNode.removeChild(element);
      } else {
        element.style.display = "none";
      }
    });
  },
};
