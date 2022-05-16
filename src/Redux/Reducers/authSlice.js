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


const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers(builder) {
        builder.addCase(login.fulfilled,(state,action) =>{
            console.log(action.payload.foundUser)
            state.currentUser = action.payload.foundUser
        })
    }
})

export default authSlice.reducer