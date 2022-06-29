import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AlertToast, SuccessToast } from "components/toasts";


const initialState = {
  comments:[],
  editModalOpen: false
};
export const getComments = createAsyncThunk("/comments/getComments",async (id,{rejectWithValue})=>{
  try{
    const response =  await axios.get(`/api/comments/${id}`)
    return response.data;
  }
  catch(error){
rejectWithValue(error)
  }
})

  const commentSlice = createSlice({
    name:"comment",
    initialState,
    reducers:{
      toggleEditModal: (state,action) => {
        state.editModalOpen = action.payload
      }
    },
    extraReducers(builder){
      builder.addCase(getComments.fulfilled,(state,action)=>{
        state.comments = action.payload
      })
      .addCase(getComments.rejected,(state,action)=>{
        console.log(action.payload)
      })
    }

  })

  export default commentSlice.reducer;
  const {actions} = commentSlice;
  export const {toggleEditModal} = actions;