const loading = ref(false);
const loadingProcess = ref(0);

const startLoading = () => {
  loadingProcess.value++;
};

const finishLoading = () => {
  loadingProcess.value--;
};

watch(loadingProcess, (newVal) => {
  loading.value = newVal > 0;
});

export const useLoading = () => {
  return { loading, startLoading, finishLoading };
};
