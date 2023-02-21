import { ThemeType } from "../styles";

export type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
}
