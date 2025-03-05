import { useContext , createContext } from "react";

export const ThemeContext = createContext({
    themeMode : 'light',
    lightMode : ()=>{},
    darkMode : ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}