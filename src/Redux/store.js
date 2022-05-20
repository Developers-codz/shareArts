import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice"
import postReducer from "./Reducers/postsSlice";
import userReducer from "./Reducers/userSlice"

const reducer ={
    auth:authReducer,
    posts: postReducer,
    users:userReducer
}

const store = configureStore({
    reducer:reducer
});
export default store;