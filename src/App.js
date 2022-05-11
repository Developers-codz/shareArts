// import "./App.css";
import GlobalStyle from "./globalStyles";
import {Navbar,Aside} from "./components"
import {useTheme} from "./context/theme-context"
import {Routes,Route} from "react-router-dom"
import { Feeds } from "./pages/feeds/Feeds";


function App() {
  const {theme} = useTheme();
  return (
    <div className={`App ${theme==="dark" ? "dark" : ""}`}>
      <GlobalStyle />
    <Navbar />
    <Aside />
   <Routes>
     <Route path="/" element={<Feeds />} />
   </Routes>
    </div>
  );
}

export default App;
