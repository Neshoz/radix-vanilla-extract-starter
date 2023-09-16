import { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "../hooks";
import { Theme, vars, darkTheme, lightTheme } from "./theme.css";

type ColorScheme = "light" | "dark" | "system";

interface ThemeContext {
  theme: Theme;
  colorScheme: string;
  toggleColorScheme: (colorScheme?: ColorScheme) => void;
}

export const Context = createContext<ThemeContext | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("system");
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    const valueToObserve =
      colorScheme === "system" ? systemColorScheme : colorScheme;

    document.documentElement.setAttribute("data-theme", valueToObserve);

    const themeClass = valueToObserve === "dark" ? darkTheme : lightTheme;

    const oppositeThemeClass =
      themeClass === darkTheme ? lightTheme : darkTheme;

    if (!document.documentElement.classList.contains(themeClass)) {
      document.documentElement.classList.remove(oppositeThemeClass);
      document.documentElement.classList.add(themeClass);
    }
  }, [colorScheme, systemColorScheme]);

  const toggleColorScheme = (value?: ColorScheme) => {
    if (value) {
      setColorScheme(value);
    } else {
      const oppositeColorScheme = colorScheme === "dark" ? "light" : "dark";
      setColorScheme(oppositeColorScheme);
    }
  };

  const derivedColorScheme =
    colorScheme === "system" ? systemColorScheme : colorScheme;

  return (
    <Context.Provider
      value={{
        colorScheme: derivedColorScheme,
        toggleColorScheme,
        theme: vars,
      }}
    >
      {children}
    </Context.Provider>
  );
};
