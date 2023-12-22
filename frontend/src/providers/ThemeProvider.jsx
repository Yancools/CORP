import { createContext, useMemo, useState, useEffect } from "react";



let Theme = localStorage.getItem("Theme", "Dark")

if (Theme === null ) {
    Theme = "Dark"
}


export const ThemeContext = createContext({theme: Theme})

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(Theme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
      }, [ theme ])

    const value = useMemo(() => ({ theme, setTheme }), [theme])

    return (
        <ThemeContext.Provider value = {value}>
            {children}
        </ThemeContext.Provider>
    )
}