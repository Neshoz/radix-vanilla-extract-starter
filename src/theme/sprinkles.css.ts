import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";

const spaceProperties = defineProperties({
  properties: {
    margin: vars.spaces,
    marginTop: vars.spaces,
    marginRight: vars.spaces,
    marginBottom: vars.spaces,
    marginLeft: vars.spaces,
    padding: vars.spaces,
    paddingTop: vars.spaces,
    paddingRight: vars.spaces,
    paddingBottom: vars.spaces,
    paddingLeft: vars.spaces,
  },
  shorthands: {
    m: ["margin"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    p: ["padding"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    default: {},
    active: {
      selector: "&:active",
    },
    hover: {
      selector: "&:hover",
    },
    light: {},
    dark: {
      selector: '&[data-theme="dark"]',
      "@media": "(prefers-color-scheme: dark)",
    },
  },
  defaultCondition: ["light", "dark"],
  properties: {
    color: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
  },
});

const sizeProperties = defineProperties({
  properties: {
    fontWeight: vars.fontWeights,
    fontSize: vars.fontSizes,
  },
  shorthands: {
    fw: ["fontWeight"],
    fz: ["fontSize"],
  },
});

export const sprinkles = createSprinkles(
  spaceProperties,
  colorProperties,
  sizeProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
