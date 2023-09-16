import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../../theme/sprinkles.css";
import { vars } from "../../theme/theme.css";

export const button = recipe({
  base: {
    border: "none",
    borderRadius: 4,
    fontWeight: vars.fontWeights.semibold,
  },
  variants: {
    variant: {
      solid: sprinkles({
        backgroundColor: { default: "plum9", hover: "plum10" },
        color: "white",
      }),
      soft: sprinkles({
        backgroundColor: { default: "plum4", hover: "plum5", active: "plum6" },
        color: "plum11",
        fw: "semibold",
      }),
      outline: [
        { borderWidth: 1, borderStyle: "solid", borderColor: vars.color.plum7 },
        sprinkles({
          backgroundColor: "plum1",
          color: "plum11",
          borderColor: { hover: "plum8" },
        }),
      ],
      ghost: sprinkles({
        backgroundColor: {
          default: "transparent",
          hover: "plum5",
          active: "plum6",
        },
        color: "plum11",
      }),
    },
    size: {
      sm: sprinkles({ py: "sm", px: "md" }),
      md: sprinkles({ py: "md", px: "lg" }),
      lg: sprinkles({ py: "lg", px: "xl" }),
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
