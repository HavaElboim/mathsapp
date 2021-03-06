import { createContext } from "react";

const themes = {
  light: {
    foreground: "#ffffee",
    background: "#220000",
  },
  dark: {
    foreground: "#002200",
    background: "#ffffee",
  },
};

let currentTheme = themes.dark;

const ThemeContext = createContext(null);

export { themes, currentTheme };
export default ThemeContext;
