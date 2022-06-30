import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { AlertToast,SuccessToast } from "components/toasts";
import { postLoginData,postSignupData,postUserVerify } from "services";

const initialState = {
    currentUser:{},
    isAuth:false
};

export const login = createAsyncThunk("/auth/login", async (userDetail) =>{
    try {
        const response = await postLoginData(userDetail)
        SuccessToast("Login Successful")
        return response.data;
        
    } catch (error) {
        AlertToast(`${error}`)
    }
})

export const signup = createAsyncThunk("/auth/signup", async (userDetail) => {
    try{
        const response = await postSignupData(userDetail)
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
            const response = await postUserVerify(encodedToken)
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
            state.isAuth=false
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.foundUser
        })
        .addCase(login.rejected, (state, action) => {
            AlertToast(`${action.payload.errors}`);
          })
        .addCase(login.pending,(state)=>{
            state.isAuth=true
        })


        .addCase(signup.fulfilled,(state,action) => {
            state.isAuth=false
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.createdUser
        })
        .addCase(signup.rejected,(state,action) =>{
        
        })
        .addCase(signup.pending,(state)=>{
            state.isAuth=true
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