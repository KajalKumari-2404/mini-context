import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme"; //Ye theme.js se ThemeProvider aa raha hai.

export default function ContextProvider({ children }) {

    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => {
        setThemeMode("light");
    };

    const darkTheme = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            {children}
        </ThemeProvider>
    );
}