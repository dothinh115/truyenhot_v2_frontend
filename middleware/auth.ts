export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth();

  if (!user.value) {
    const host = useRequestHeaders()["host"];
    const proto = useRequestHeaders()["x-forwarded-proto"];
    const url = `${proto}://${host}${to.fullPath}`;
    return navigateTo(`https://cp.truyenhot.info/login?next=${url}`, {
      external: true,
    });
  }
});
