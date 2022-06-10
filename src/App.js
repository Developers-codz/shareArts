import GlobalStyle from "./globalStyles";
import {
  Navbar,
  Aside,
  BottomNavigation,
  RequireAuth,
  RestrictAuth,
} from "./components";
import { useTheme } from "./context/theme-context";
import { Routes, Route } from "react-router-dom";
import {
  Feeds,
  Landing,
  Login,
  SignUp,
  Profile,
  Setting,
  Explore,
  SinglePost,
} from "./pages";
import { ToastContainer, toast } from "react-toastify";
import { getAllPosts } from "Redux/Reducers/postsSlice";
import { getAllUsers } from "Redux/Reducers/userSlice";
import { verifyToken } from "Redux/Reducers/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MockMan from "mockman-js";

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
    dispatch(verifyToken())
  }, []);
  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
      <GlobalStyle />
      <Navbar />
      <Aside />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route element={<RequireAuth />}>
          <Route path="/:username" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/" element={<Feeds />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/posts">
            <Route path="/posts:postId" element={<SinglePost />} />
          </Route>
        </Route>

        <Route element={<RestrictAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
      <BottomNavigation />
      <ToastContainer />
    </div>
  );
}

export default App;
