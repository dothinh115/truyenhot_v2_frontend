export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth();
  const { cpPath } = useRuntimeConfig().public;
  if (!user.value) {
    const host = useRequestHeaders()["host"];
    const proto = useRequestHeaders()["x-forwarded-proto"];
    const url = `${proto}://${host}${to.fullPath}`;
    return navigateTo(`http://localhost:3001/login?next=${url}`, {
      external: true,
    });
  }
});
