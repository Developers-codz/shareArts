import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AlertToast, SuccessToast } from "../../components/toasts";
const initialState = {
  users: [],
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (mockParameter, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users");
      console.log(response.data);
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
      const response = await axios.post(
        ` /api/users/follow/${id}`,
        { authorization: encodedToken },
        {}
      );
      SuccessToast("Started Following");
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "users/unFollowUser",
  async (id, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        ` /api/users/unfollow/${id}`,
        { authorization: encodedToken },
        {}
      );
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
      const response = await axios.post(
        "/api/users/edit",
        { userData },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
    SuccessToast("User Data Updated Successfully")
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        AlertToast(`${action.payload.errors[0]}`);
      })

      .addCase(followUser.fulfilled, (state, action) => {
        console.log(action);
      })

      .addCase(editUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) => {
          if (user._id === action.payload.user._id) return action.payload.user;
          else return user;
        });
      })
      .addCase(editUser.rejected, (state, action) => {
        AlertToast(`${action.payload.errors}`);
      });
  },
});

export default userSlice.reducer;
