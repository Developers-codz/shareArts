import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { AlertToast,SuccessToast } from "components/toasts";

const initialState = {
    currentUser:{},
    isAuth:false
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
        console.log(response.data)
        return response.data
    }
    catch(error){
        AlertToast(`${error}`)

    }
})

// export const editUser = createAsyncThunk(
//     "users/edit",
//     async (userData, { rejectWithValue }) => {
//       const encodedToken = localStorage.getItem("token");
//       try {
//         const response = await axios.post(
//           "/api/users/edit",
//           { userData },
//           {
//             headers: {
//               authorization: encodedToken,
//             },
//           }
//         );
//       SuccessToast("User Data Updated Successfully")
//       console.log(response.data)
//         return response.data;
//       } catch (error) {
//         return rejectWithValue(error);
//       }
//     }
//   );

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
        // .addCase(editUser.fulfilled, (state, action) => {
        //     state.isAuth=false
        //     state.currentUser = action.payload.user
        //   })
        //   .addCase(editUser.rejected, (action) => {
        //     AlertToast(`${action.payload.errors}`);
        //   })
        //   .addCase(editUser.pending,(state)=>{
        //       state.isAuth=true
        //   })
    }
})

export default authSlice.reducer
export const { logout } = authSlice.actions;