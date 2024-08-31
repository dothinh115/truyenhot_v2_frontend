import type { FetchOptions } from "ofetch";
import type { UnwrapRef } from "vue";

export const useClientFetch = async <T = any>(
  target: string,
  options?: FetchOptions<"json">
) => {
  const { $apiFetch } = useNuxtApp();
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);

  try {
    const response = await $apiFetch<T>(target, {
      ...options,
    });
    data.value = (response ?? null) as UnwrapRef<T>;
  } catch (err) {
    error.value = err as Error;
  }

  return {
    data,
    error,
  };
};
