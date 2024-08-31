import { TOKEN_EXPIRED_TIME, ACCESS_TOKEN } from "@/utils/constant";
import { isTokenValid, refreshTokenFunc } from "@/utils/common";
import { apiUrlCheck } from "@/utils/regex";
export default defineEventHandler(async (event) => {
  const url = event.node.req.url;
  const { apiUrl } = useRuntimeConfig().public;
  const expTime = getCookie(event, TOKEN_EXPIRED_TIME);
  const accessToken = getCookie(event, ACCESS_TOKEN);
  const valid = isTokenValid(expTime ?? null);

  if (apiUrlCheck.test(url as string)) {
    //refresh token khi call api
    if (!event.node.req.headers.hasOwnProperty("new-token")) {
      if (!valid || !accessToken) {
        const newToken = await refreshTokenFunc(event, apiUrl);
        event.node.req.headers["new-token"] = newToken;
      }
    }
  } else {
    //refresh token khi đi vào route
    if (!valid || !accessToken) {
      const newToken = await refreshTokenFunc(event, apiUrl);
      event.node.req.headers["new-token"] = newToken;
    }
  }
});
