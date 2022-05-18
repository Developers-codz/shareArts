import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { AlertToast,SuccessToast } from "../../components/toasts";

const initialState = {
    posts:[],
    bookmarked:[],
    liked:[],
    loading:false,
};



export const getAllPosts = createAsyncThunk("posts/getAll", async (mockParameter,{rejectWithValue}) => {
    try {
        const response = await axios.get("/api/posts");
        return response.data;
    }
    catch(error){
        return rejectWithValue(error.response.data)
    }
})

export const addLikes = createAsyncThunk("posts/like",async (postId,{rejectWithValue}) =>{
    const encodedToken = localStorage.getItem("token");
    try{
        const response = await axios.post(`/api/posts/like/${postId}`,{},{headers:{authorization:encodedToken}})
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const removeLikes =  createAsyncThunk("post/dislike",async (postId,{rejectWithValue})=>{
    const encodedToken = localStorage.getItem("token")
    try{
        const response = await axios.post(`/api/posts/dislike/${postId}`,{},{headers:{
            authorization:encodedToken
        }})
        return response.data
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const bookmark = createAsyncThunk("post/bookmark",async (postId,{rejectWithValue}) =>{
    const encodedToken = localStorage.getItem("token")
    try{
        const response = await axios.post(`/api/users/bookmark/${postId}`,{},{headers:{authorization:encodedToken}});
        console.log(response.data)
        return response.data
    }
    catch(error){
        return rejectWithValue(error.response.data);
    }
})

const postsSlice = createSlice({
    name:"posts",
    initialState,
    extraReducers(builder) {
        builder.addCase(getAllPosts.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(getAllPosts.fulfilled, (state,action)=> {
            state.loading=false;
            console.log(action.payload.posts);
            state.posts = action.payload.posts;
        })
        .addCase(getAllPosts.rejected,(action)=>{
            AlertToast(`${action.payload.errors}`)
        })
        .addCase(addLikes.fulfilled,(state,action) =>{
            state.liked = action.payload.posts
        })
        .addCase(addLikes.rejected,(state,action) =>{
            AlertToast(`${action.payload.errors}`)
        })
        .addCase(removeLikes.fulfilled,(state,action) =>{
                state.liked = action.payload.posts
        })
        .addCase(removeLikes.rejected,(state,action) =>{

        })
        .addCase(bookmark.fulfilled,(state,action) =>{
            SuccessToast("Added to bookmark");
            state.bookmarked = action.payload.bookmarks;
        })
        .addCase(bookmark.rejected,(state,action)=>{
            AlertToast(`${action.payload.errors}`)
        })
    }
})

const { actions, reducer } = postsSlice;
export { actions, reducer as default };