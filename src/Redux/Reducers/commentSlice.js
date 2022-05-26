import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AlertToast, SuccessToast } from "../../components/toasts";


const initialState = {
  comments:[]
};
export const getComments = createAsyncThunk("/comments/getComments",async (id,{rejectWithValue})=>{
  try{
    const response =  await axios.get(`/api/comments/${id}`)
    console.log(response.data)
    return response.data;
  }
  catch(error){
rejectWithValue(error)
  }
})

  const commentSlice = createSlice({
    name:"comment",
    initialState,
    extraReducers(builder){
      builder.addCase(getComments.fulfilled,(state,action)=>{
        state.comments = action.payload
      })
      .addCase(getComments.rejected,(state,action)=>{
        console.log(action.payload)
      })
    }

  })

  export default commentSlice.reducer