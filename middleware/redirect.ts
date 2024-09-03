export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.fullPath !== "/" && to.fullPath !== "/me")
    return await navigateTo("/");
});
