export default defineNuxtPlugin(() => {
  const { screenWidth } = useGetState();
  screenWidth.value = screen.width;
});
