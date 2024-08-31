import Toast, { POSITION, type PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
// import "@/assets/scss/components/toast.scss";
export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    closeOnClick: false,
    toastClassName: "toast-custom",
    bodyClassName: "toast-message",
    timeout: 9000,
    pauseOnHover: false,
    position: POSITION.BOTTOM_LEFT,
    draggable: false,
  };
  nuxtApp.vueApp.use(Toast, options);
});
