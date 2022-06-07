import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice";
import postReducer from "./Reducers/postsSlice";
import userReducer from "./Reducers/userSlice";
import commentReducer from "./Reducers/commentSlice"

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