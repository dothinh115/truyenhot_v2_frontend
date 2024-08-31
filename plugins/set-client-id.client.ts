import { CLIENT_ID } from "@/utils/constant";
export default defineNuxtPlugin(async () => {
  try {
    const clientIdCookie = useCookie(CLIENT_ID, {
      sameSite: "lax",
      secure: false,
    });

    // Đảm bảo useFingerSprint trả về đúng giá trị
    const clientId = await useFingerSprint();

    if (clientId) {
      clientIdCookie.value = clientId;
    } else {
      console.error(
        "Failed to set cookie: useFingerSprint did not return a value"
      );
    }
  } catch (error) {
    console.error("An error occurred while setting the cookie:", error);
  }
});
