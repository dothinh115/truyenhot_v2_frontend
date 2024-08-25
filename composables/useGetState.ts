import { SCREEN_WIDTH } from "~/utils/constant";

export const useGetState = () => {
  const screenWidth = useState(SCREEN_WIDTH);
  return { screenWidth };
};
