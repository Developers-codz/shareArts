import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";
import {AlertToast} from "../../components/toasts"
const initialState = {
    users : []
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", async (mockParameter,{rejectWithValue}) =>{
    try{
    const response = await axios.get("/api/users");
    console.log(response.data)
    return response.data;
    }
    catch(error){
        rejectWithValue(error)
    }
});

const userSlice = createSlice({
    name:"users",
    initialState,
    extraReducers(builder){
        builder.addCase(getAllUsers.fulfilled,(state,action) => {
            state.users = action.payload.users
        })
        .addCase(getAllUsers.rejected,(state,action) => {
            AlertToast(`${action.payload.errors[0]}`);
        })
    }
})


export default userSlice.reducer