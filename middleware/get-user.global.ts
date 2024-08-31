export default defineNuxtRouteMiddleware(async () => {
  const { user, getUser } = useAuth();
  if (!user?.value) {
    //nếu chưa có user thì thử lấy user từ phía server
    await getUser();
  }
});
