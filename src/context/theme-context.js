import {useContext,createContext, useState} from "react"

const ThemeContext = createContext("light");

const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState("light")
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export {useTheme,ThemeProvider}