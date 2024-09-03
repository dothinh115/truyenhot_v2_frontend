export type TUser = {
  id: string;
  email: string;
  rootUser: boolean;
  role: number;
  username: string;
  isEditedUsername: string;
};
export const useAuth = () => {
  const user = useState<TUser | null>(USER_INFO);

  const getUser = async () => {
    const { data } = await useServerFetch<{ data: TUser }>("me");
    user.value = data.value?.data ?? null;
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
