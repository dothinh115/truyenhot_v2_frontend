import type { UseFetchOptions } from "#app";

export const useServerFetch = async <T = any>(
  target: string,
  options?: UseFetchOptions<T>
) => {
  const headers = useRequestHeaders();
  return await useFetch(target, {
    baseURL: "/api",
    ...(headers && { headers }),
    transform: (response: any): T => {
      return response.data ? response.data : response;
    },
    ...options,
  });
};
