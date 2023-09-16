import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { light, dark } from "./colors";
import { fontSizes, fontWeights, spaces } from "./sizes";

const vars = createThemeContract({
  color: light,
  fontSizes,
  fontWeights,
  spaces,
});

const lightTheme = createTheme(vars, {
  color: light,
  fontSizes,
  fontWeights,
  spaces,
});

const darkTheme = createTheme(vars, {
  color: dark,
  fontSizes,
  fontWeights,
  spaces,
});

export { vars, lightTheme, darkTheme };

export type Theme = typeof vars;
