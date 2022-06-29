import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AlertToast, SuccessToast } from "components/toasts";
import { setFollowUser, getUserData ,postFollowUser,postUnfollowUser,postEditUser} from "services";
const initialState = {
  users: [],
  isFollowUnfollow: false,
  isUpdating: false,
  searchedText:"",
  userModalFlag:false
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserData();
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async (id, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await postFollowUser(id,encodedToken)
      SuccessToast("Started Following");
      return response.data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "users/unFollowUser",
  async (id, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await postUnfollowUser(id,encodedToken);
      SuccessToast("Removed from Following");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editUser = createAsyncThunk(
  "users/edit",
  async (userData, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await postEditUser(userData,encodedToken);
      SuccessToast("User Data Updated Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers:{
    setSearchedText:(state,action)=>{
    state.searchedText = action.payload;
    action.payload === "" ? state.userModalFlag = false : state.userModalFlag =true
    },
    setUserModalFlag:(state,action)=>{
      state.userModalFlag=action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        AlertToast(`${action.payload.errors[0]}`);
      })

      .addCase(followUser.fulfilled, setFollowUser)
      .addCase(followUser.pending, (state) => {
        state.isFollowUnfollow = true;
      })
      .addCase(unFollowUser.fulfilled, setFollowUser)
      .addCase(unFollowUser.pending, (state) => {
        state.isFollowUnfollow = true;
      })

      .addCase(editUser.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.users = state.users.map((user) => {
          if (user._id === action.payload.user._id) return action.payload.user;
          else return user;
        });
      })
      .addCase(editUser.rejected, (state, action) => {
        AlertToast(`${action.payload.errors}`);
      })
      .addCase(editUser.pending, (state) => {
        state.isUpdating = true;
      });
  },
});

export default userSlice.reducer;

export const {setSearchedText,setUserModalFlag} =  userSlice.actions
