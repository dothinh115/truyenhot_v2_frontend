export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.fullPath !== "/") return await navigateTo("/");
});
