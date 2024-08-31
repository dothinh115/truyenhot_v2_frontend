import { joinURL } from "ufo";
import { H3Event } from "h3";
import { ACCESS_TOKEN } from "@/utils/constant";

export default defineEventHandler(async (event: H3Event) => {
  const { apiUrl } = useRuntimeConfig().public;
  const replacedPath = event.path.replace(/^\/api\//, "");
  const target = joinURL(apiUrl, replacedPath);
  const accessToken =
    event.node.req.headers["new-token"] ?? getCookie(event, ACCESS_TOKEN);

  return await proxyRequest(event, target, {
    ...(accessToken && {
      headers: {
        authorization: "Bearer " + accessToken,
      },
    }),
  });
});
