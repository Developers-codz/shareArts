import GlobalStyle from "../globalStyles";
import {
  Navbar,
  Aside,
  BottomNavigation,
  RequireAuth,
  RestrictAuth,
  Modal
} from "../components";
import { useTheme } from "../context/theme-context";
import { Routes, Route } from "react-router-dom";
import {Login,SignUp,Explore,Profile,
  Setting,Landing,Feeds,SinglePost} from "features"
import { ToastContainer, toast } from "react-toastify";
import { getAllPosts } from "features/home/postsSlice";
import { getAllUsers } from "features/user/userSlice";
import { verifyToken } from "features/authentication/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MockMan from "mockman-js";

function App() {
  const { theme } = useTheme();
  const {isModalOpen} = useSelector(store => store.posts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(verifyToken())
  }, []);
  return (
    <>
     <Modal />
     <ToastContainer />
      <div className={`App ${theme === "dark" ? "dark" : "light"}`} style={
          isModalOpen
            ? { pointerEvents: "none", opacity: ".5" }
            : { pointerEvents: "auto", opacity: "1" }
        }>
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
    </div>
    </>
  );
}

export default App;
