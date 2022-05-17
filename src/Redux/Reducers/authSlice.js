import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser:{},
};

export const login = createAsyncThunk("/auth/login", async (e,userDetail) =>{
    try {
        const response = await axios.post(`api/auth/login`, e.target.value === "credentialLogin" ? {
            username: "adarshbalika",
            password: "adarshBalika123",
        } : JSON.stringify(userDetail));
        return response.data;
        
    } catch (error) {
        console.log(error)
    }
})

export const signup = createAsyncThunk("/auth/signup", async (userDetail) => {
    try{
        const response = await axios.post("/api/auth/signup",JSON.stringify(userDetail))
        return response.data
    }
    catch(error){
        console.log(error)

    }
})


const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers(builder) {
        builder.addCase(login.fulfilled,(state,action) =>{
            console.log(action.payload.foundUser)
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.foundUser
        })
        .addCase(signup.fulfilled,(state,action) => {
            console.log(action.payload.createdUser)
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.createdUser
        })
    }
})

export default authSlice.reducer