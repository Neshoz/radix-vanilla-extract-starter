import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme/theme.css";

globalStyle("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  height: "100%",
  width: "100%",
});

globalStyle("body", {
  background: vars.color.page,
});
