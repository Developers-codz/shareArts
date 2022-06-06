import {useNavigate} from "react-router-dom"
export const LoginIcon = ()=>{
    const navigate = useNavigate()
    return(
        
        <svg width="2em" height="2em" viewBox="0 0 256 256" onClick={()=> navigate("/settings")}><path fill="currentColor" d="M128 32a96 96 0 0 0-64.2 167.4A72 72 0 0 1 128 160a40 40 0 1 1 40-40a40 40 0 0 1-40 40a72 72 0 0 1 64.2 39.4A96 96 0 0 0 128 32Z" opacity=".2"></path><path fill="currentColor" d="M232 128a104 104 0 1 0-174.2 76.7l1.3 1.2a104 104 0 0 0 137.8 0l1.3-1.2A103.7 103.7 0 0 0 232 128Zm-192 0a88 88 0 1 1 153.8 58.4a79.2 79.2 0 0 0-36.1-28.7a48 48 0 1 0-59.4 0a79.2 79.2 0 0 0-36.1 28.7A87.6 87.6 0 0 1 40 128Zm56-8a32 32 0 1 1 32 32a32.1 32.1 0 0 1-32-32Zm-21.9 77.5a64 64 0 0 1 107.8 0a87.8 87.8 0 0 1-107.8 0Z"></path></svg>
    )
}
