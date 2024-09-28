export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth();
  const { cpPath } = useRuntimeConfig().public;
  console.log(user.value);
  if (!user.value) {
    const host = useRequestHeaders()["host"];
    const proto = useRequestHeaders()["x-forwarded-proto"];
    const url = `${cpPath}/login?next=${proto}://${host}${to.fullPath}`;
    // return navigateTo(url, {
    //   external: true,
    // });
  }
});
