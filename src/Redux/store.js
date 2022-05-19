import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice"
import postReducer from "./Reducers/postsSlice";

const reducer ={
    auth:authReducer,
    posts: postReducer,
}

const store = configureStore({
    reducer:reducer
});
export default store;