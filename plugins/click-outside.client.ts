export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted(el, binding) {
      el.clickOutSideEvent = (event: MouseEvent) => {
        if (!(el === event.target || el.contains(event.target as Node))) {
          binding.value(event);
        }
      };
      document.body.addEventListener("mousedown", el.clickOutSideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener("mousedown", el.clickOutSideEvent);
    },
  });
});
