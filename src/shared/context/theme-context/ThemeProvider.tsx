import {FC, PropsWithChildren, useEffect, useMemo, useState} from "react";
import {DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";


const themeFromLocalStorage = () => {
    return  localStorage.getItem(LOCAL_STORAGE_THEME_KEY)  as Theme ||  DEFAULT_THEME
}
const setThemeToLocalStorage = (theme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
}

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(()=>themeFromLocalStorage());
    useEffect(()=> {
        setThemeToLocalStorage(theme)
    }, [theme])
    const defaultProps = useMemo(()=> ({theme, setTheme}),[theme])

    return <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
}