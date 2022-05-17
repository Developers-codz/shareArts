// import "./App.css";
import GlobalStyle from "./globalStyles";
import {Navbar,Aside,BottomNavigation,RequireAuth,RestrictAuth} from "./components"
import {useTheme} from "./context/theme-context"
import {Routes,Route} from "react-router-dom"
import { Feeds,Landing,Login,SignUp,Profile,Setting} from "./pages";





function App() {
  const {theme} = useTheme();
  return (
    <div className={`App ${theme==="dark" ? "dark" : "light"}`}>
      <GlobalStyle />
      <Navbar />
      <Aside />
   <Routes>
     <Route path="/" element={<Landing />} />
     <Route element={<RequireAuth />} >
     <Route path="/profile" element={<Profile />} />
     <Route path="/settings" element={<Setting />} />
     <Route path="/feeds" element={<Feeds />} />
     </Route>
  
    <Route element={<RestrictAuth />}>

     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<SignUp />} />
    </Route>
  
   </Routes>
   <BottomNavigation />
    </div>
  );
}

export default App;
