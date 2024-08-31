import {
  REFRESH_TOKEN,
  ACCESS_TOKEN,
  TOKEN_EXPIRED_TIME,
} from "@/utils/constant";
import { joinURL } from "ufo";

export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig().public;
  const target = joinURL(apiUrl, "logout");
  const refreshToken = getCookie(event, REFRESH_TOKEN);

  try {
    //đầu tiên thì fetch đến api logout để xoá token khỏi db

    await $fetch(target, {
      method: "POST",
      body: {
        refreshToken,
      },
    });
    event.node.res.setHeader("Content-Type", "application/json; charset=utf-8");
    return event.node.res.end({
      statusCode: 200,
      message: "Logout thành công!",
    });
  } catch (error) {
    // throw createError({
    //   statusCode: 400,
    //   message: "Đã có lỗi xảy ra!",
    // });
  } finally {
    //sau đó thì xoá mọi cookie liên quan ở phía client
    deleteCookie(event, REFRESH_TOKEN);
    deleteCookie(event, ACCESS_TOKEN);
    deleteCookie(event, TOKEN_EXPIRED_TIME);
  }
});
