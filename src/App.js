import GlobalStyle from "./globalStyles";
import {Navbar,Aside,BottomNavigation,RequireAuth,RestrictAuth} from "./components"
import {useTheme} from "./context/theme-context"
import {Routes,Route} from "react-router-dom"
import { Feeds,Landing,Login,SignUp,Profile,Setting} from "./pages";
import { ToastContainer, toast } from 'react-toastify';
import {getAllPosts} from "./Redux/Reducers/postsSlice"
import {useEffect} from "react"
import {useDispatch} from "react-redux"




function App() {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])
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
   <ToastContainer />
    </div>
  );
}

export default App;
