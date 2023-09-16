import { useContext } from "react";
import { Context } from "./ThemeProvider";

export const useTheme = () => {
  return useContext(Context)!;
};
