import { useTheme } from "../../context/theme-context"
export const MoonIcon = ()=>{

    const {setTheme} = useTheme();
    const themeHandler = ()=>{
        setTheme("dark")
        localStorage.setItem("theme", "dark")
    }
    return(
        <svg onClick={themeHandler} width="2.5rem" height="2.5rem" viewBox="0 0 256 256"><path fill="currentColor" d="M224.3 154.9A100 100 0 1 1 101 31.7a7.9 7.9 0 0 1 10.3 8.1a5.7 5.7 0 0 1-.3 1.8A84 84 0 0 0 214.3 145l2.2-.4a8.1 8.1 0 0 1 7.8 5.7a7.2 7.2 0 0 1 0 4.6Z"></path></svg>
    )
}

export const SunIcon = ()=>{
    const {setTheme} = useTheme();
    const themeHandler = () =>{
        setTheme("light")
        localStorage.setItem("theme", "light")
    }
    return(
        <svg onClick={themeHandler} width="2.5rem" height="2.5rem" viewBox="0 0 256 256"><path fill="currentColor" d="M128 56a72 72 0 1 0 72 72a72.1 72.1 0 0 0-72-72Zm0 120a48 48 0 1 1 48-48a48 48 0 0 1-48 48ZM116 28v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0Zm74.2 37.8a12 12 0 0 1 0-17l5.7-5.7a12 12 0 0 1 17 17l-5.7 5.7a12 12 0 0 1-8.5 3.5a12.2 12.2 0 0 1-8.5-3.5ZM248 128a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8a12 12 0 0 1 12 12Zm-35.1 67.9a12.2 12.2 0 0 1 0 17a12.4 12.4 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5l-5.7-5.7a12 12 0 0 1 17-17ZM140 228v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0Zm-74.2-37.8a12 12 0 0 1 0 17l-5.7 5.7a12 12 0 0 1-8.5 3.5a12.4 12.4 0 0 1-8.5-3.5a12.2 12.2 0 0 1 0-17l5.7-5.7a12 12 0 0 1 17 0ZM40 128a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8a12 12 0 0 1 12 12Zm3.1-67.9a12 12 0 0 1 17-17l5.7 5.7a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5Z"></path></svg>
    )
}