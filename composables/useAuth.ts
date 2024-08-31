export type TUser = {
  id: string;
  email: string;
  rootUser: boolean;
  role: number;
  username: string;
  isEditedUsername: string;
};
export const useAuth = () => {
  const user = useState<TUser>(USER_INFO);

  const getUser = async () => {
    const { data } = await useServerFetch<{ data: TUser }>("me");
    if (data.value?.data) user.value = data.value?.data;
  };

  const isLoggedIn = async () => {
    await getUser();
    if (!user.value) return false;
    return true;
  };

  const logout = async () => {
    try {
    } catch (error) {}
  };

  return { user, getUser, isLoggedIn, logout };
};
