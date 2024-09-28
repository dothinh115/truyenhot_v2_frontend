import { TOKEN_EXPIRED_TIME, ACCESS_TOKEN } from "@/utils/constant";
import { isTokenValid, refreshTokenFunc } from "@/utils/common";
export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig().public;
  const expTime = getCookie(event, TOKEN_EXPIRED_TIME);
  let accessToken = getCookie(event, ACCESS_TOKEN);
  const valid = isTokenValid(expTime ?? null);
  if (!valid || !accessToken) {
    accessToken = await refreshTokenFunc(event, apiUrl);
  }
  event.node.req.headers.authorization = "Bearer " + accessToken;
});
