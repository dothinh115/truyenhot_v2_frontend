export default defineNuxtPlugin((nuxtApp) => {
  const { logout } = useAuth();

  const apiFetch = $fetch.create({
    baseURL: "/api",
    onResponse({ response }) {
      const d = response._data;
      response._data = d.data ? d.data : d;
    },
    async onResponseError(error) {
      clearError();
      const { status } = error.response;
      if (status === 401) {
        await logout();
      } else if (status === 403) {
        throw showError({
          statusCode: status,
          message: "Bạn không có quyền này!",
        });
      }
    },
  });
  nuxtApp.provide("apiFetch", apiFetch);
});
