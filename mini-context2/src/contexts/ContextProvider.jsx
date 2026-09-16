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


    // useEffect side effect handle karta hai. Mere project me jab themeMode change hota hai,
    //  tab useEffect <html> element ki class ko light ya dark karta hai.
    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");//Browser ke poore HTML document ko represent karta hai.
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]); //[themeMode] ke wajah se themeMode change hone par useEffect dobara execute hota hai.

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}> //ThemeProvider Context ke through themeMode, 
        {/* lightTheme aur darkTheme ko child components tak pahunchata hai. */}
            {children}
            {/* ContextProvider ke andar jo bhi component/content likha hota hai, wahi children hota hai. */}
{/* //{children} isliye likha hai taaki Provider ke andar jo component diya gaya hai, wo render ho aur Context ka data us component ko mil sake. */}
        </ThemeProvider>
    );
}
// Theme context provider