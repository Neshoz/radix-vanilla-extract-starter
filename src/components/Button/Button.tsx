import { HTMLAttributes } from "react";
import { Sprinkles } from "../../theme/sprinkles.css";
import { button, ButtonVariants } from "./button.css";

type Props = HTMLAttributes<HTMLButtonElement> & Sprinkles & ButtonVariants;

export const Button = ({ variant = "soft", size = "sm", ...rest }: Props) => {
  const b = button({ variant, size });
  return <button {...rest} className={b} />;
};
