import { createContext } from "react";
import { ThemeContextType } from "./themeContext.type";
import { lightTheme } from "../styles";

export const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    toggleTheme: () => { },
})
