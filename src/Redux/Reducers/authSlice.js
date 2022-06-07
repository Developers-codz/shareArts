import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { AlertToast,SuccessToast } from "../../components/toasts";

const initialState = {
    currentUser:{},
};

export const login = createAsyncThunk("/auth/login", async (e,userDetail) =>{
    try {
        const response = await axios.post(`api/auth/login`, e.target.value === "credentialLogin" ? {
            username: "developers-codz",
            password: "developersCodz",
        } : JSON.stringify(userDetail));
        SuccessToast("Login Successful")
        return response.data;
        
    } catch (error) {
        AlertToast(`${error}`)
    }
})

export const signup = createAsyncThunk("/auth/signup", async (userDetail) => {
    try{
        const response = await axios.post("/api/auth/signup",JSON.stringify(userDetail))
        SuccessToast("SignIn Successful")
        return response.data
    }
    catch(error){
        AlertToast(`${error}`)

    }
})

export const verifyToken = createAsyncThunk("/auth/verifyToken",async (_,rejectWithValue) =>{
    const encodedToken = localStorage.getItem("token");
    if(encodedToken){
        try{
            const response = await axios.post("/api/auth/verify",{
                encodedToken:encodedToken,
            });
            return response.data;
        }
        catch(error){
            rejectWithValue(error)
        }
    }
})


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout : (state,action) =>{
            state.currentUser={};
            SuccessToast("Successfully Logged Out");
            localStorage.removeItem("token")
        }
    },
    extraReducers(builder) {
        builder.addCase(login.fulfilled,(state,action) =>{
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.foundUser
        })
        .addCase(login.rejected, (state, action) => {
            AlertToast(`${action.payload.errors}`);
          })
        .addCase(signup.fulfilled,(state,action) => {
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.createdUser
        })
        .addCase(signup.rejected,(state,action) =>{
        
        })
        .addCase(verifyToken.fulfilled,(state,action)=>{
            if(action.payload){
                state.currentUser = action.payload.user
            }
        })
    }
})

export default authSlice.reducer
export const { logout } = authSlice.actions;