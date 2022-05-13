// import "./App.css";
import GlobalStyle from "./globalStyles";
import {Navbar,Aside} from "./components"
import {useTheme} from "./context/theme-context"
import {Routes,Route} from "react-router-dom"
import { Feeds} from "./pages/feeds/Feeds";
import {Landing} from "./pages/Landing/Landing"


function App() {
  const {theme} = useTheme();
  return (
    <div className={`App ${theme==="dark" ? "dark" : ""}`}>
      <GlobalStyle />
    
   <Routes>
     <Route path="/" element={<Landing />} />
   </Routes>
    </div>
  );
}

export default App;
