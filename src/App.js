// import "./App.css";
import GlobalStyle from "./globalStyles";
import {Navbar,Aside} from "./components"
import {useTheme} from "./context/theme-context"
import {Routes,Route} from "react-router-dom"
import { Feeds,Landing,Login,SignUp} from "./pages";



function App() {
  const {theme} = useTheme();
  return (
    <div className={`App ${theme==="dark" ? "dark" : ""}`}>
      <GlobalStyle />
      <Navbar />
      <Aside />
   <Routes>
     <Route path="/" element={<Feeds />} />
     <Route path="/landing" element={<Landing />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<SignUp />} />
   </Routes>
    </div>
  );
}

export default App;
