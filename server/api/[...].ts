import { joinURL } from "ufo";
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const { apiUrl } = useRuntimeConfig().public;
  const replacedPath = event.path.replace(/^\/api\//, "");
  const target = joinURL(apiUrl, replacedPath);
  const headers: Record<string, string> = {};
  Object.entries(event.node.req.headers).forEach(([key, value]) => {
    if (
      ["host", "content-length", "connection", "accept-encoding"].includes(key)
    ) {
      return;
    }
    if (typeof value === "string") {
      headers[key] = value;
    } else if (Array.isArray(value)) {
      headers[key] = value.join(",");
    }
  });

  return await proxyRequest(event, target, {
    headers,
  });
});
