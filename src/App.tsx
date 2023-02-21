import React, { useState } from "react";
import AppRouter from "./routes";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeContext } from "./context";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass)

function App(): JSX.Element {
    const [theme, setTheme] = useState(() => {
        const cookie = document.cookie.split('; ').find(cookie => cookie.startsWith('theme='));
        const savedTheme = cookie?.split('=')[1];
        return savedTheme === 'dark' ? darkTheme : lightTheme;
    });

    const toggleTheme = () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
        document.cookie = `theme=${newTheme === lightTheme ? 'light' : 'dark'}`;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <AppRouter/>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default App
