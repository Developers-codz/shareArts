import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import postReducer from "../features/home/postsSlice";
import userReducer from "../features/user/userSlice";
import commentReducer from "../features/singlepost/commentSlice"

const reducer ={
    auth:authReducer,
    posts: postReducer,
    users:userReducer,
    comments:commentReducer
}

const store = configureStore({
    reducer:reducer
});
export default store;