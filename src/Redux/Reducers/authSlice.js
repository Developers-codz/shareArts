import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { AlertToast,SuccessToast } from "../../components/toasts";

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
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.foundUser
            SuccessToast("Login Successful")
        })
        .addCase(login.rejected, (state, action) => {
            AlertToast(`${action.payload.errors}`);
          })
        .addCase(signup.fulfilled,(state,action) => {
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.createdUser
            SuccessToast("signIn Successful")
        })
        .addCase(signup.rejected,(state,action) =>{
            AlertToast(`${action.payload.errors}`)
        })
    }
})

export default authSlice.reducer