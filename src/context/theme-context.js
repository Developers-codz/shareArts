import {useContext,createContext, useState} from "react"

const ThemeContext = createContext("light");

const ThemeProvider = ({children}) =>{
    const userTheme = localStorage.getItem("theme")
    const [theme,setTheme] = useState(userTheme || "light")
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export {useTheme,ThemeProvider}