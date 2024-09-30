import {
  REFRESH_TOKEN,
  ACCESS_TOKEN,
  TOKEN_EXPIRED_TIME,
} from "@/utils/constant";

export default defineEventHandler(async (event) => {
  deleteCookie(event, REFRESH_TOKEN);
  deleteCookie(event, ACCESS_TOKEN);
  deleteCookie(event, TOKEN_EXPIRED_TIME);
});
