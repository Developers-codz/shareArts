import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AlertToast, SuccessToast } from "../../components/toasts";

const initialState = {
  posts: [],
  bookmarked: [],
  loading: false,
  postToEdit: null,
  sortBy:null
};

export const getAllPosts = createAsyncThunk(
  "posts/getAll",
  async (mockParameter, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSinglePostData = createAsyncThunk("posts/getSinglePostData", async (id,{rejectWithValue}) =>{
  try{
    const response = await axios.get(`/api/posts/${id}`);
    console.log(response.data)
    return response.data;
  }
  catch(error){
    return rejectWithValue(error.response.data);
  }
})

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (post, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/api/posts",
        { content: post },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postData, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    const { _id } = postData;
    try {
      const response = await axios.delete(`/api/posts/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      SuccessToast("Deleted Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (postData, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    const { _id } = postData;
    try {
      const response = await axios.post(
        `/api/posts/edit/${_id}`,
        { postData: postData },
        { headers: { authorization: encodedToken } }
      );

      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const commentPost = createAsyncThunk(
  "posts/commentPost",
  async ({ id, comment }, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/posts/${id}/comment`,
        { commentData: { content: comment } },
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deletePostComment = createAsyncThunk(
  "posts/deletePostComment",
  async (details) => {
    const {postId, commentId} = details;
    console.log( "post " + postId , "comment "+ commentId)
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      console.log(error)
  
    }
  }
);

export const editPostComment = createAsyncThunk(
  "posts/editPostComment",
  async (details) => {
    console.log(details)
    const {postId, commentId,commentData} = details;
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { content: commentData },
        { headers: { authorization: encodedToken } }
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error)
  
    }
  }
);
export const addLikes = createAsyncThunk(
  "posts/like",
  async (postId, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      SuccessToast("Liked Successful")
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeLikes = createAsyncThunk(
  "post/dislike",
  async (postId, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      SuccessToast("disliked  successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const bookmark = createAsyncThunk(
  "post/bookmark",
  async (postId, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeBookmark = createAsyncThunk(
  "post/removeBookmark",
  async (postId, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      SuccessToast("Removed from Bookmark");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostToEdit: (state, action) => {
      state.postToEdit = action.payload;
    },
    setEditEmpty: (state, action) => {
      state.postToEdit = null;
    },
    setSortBy:(state,action) =>{
      console.log(action.payload)
      state.sortBy = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
      })
      .addCase(getAllPosts.rejected, (action) => {
        AlertToast(`${action.payload.errors}`);
      })

      .addCase(getSinglePostData.fulfilled,(state,action) =>{
        console.log(action.payload.post)
        state.currentPost = action.payload.post
      })

      .addCase(addNewPost.fulfilled, (state, action) => {
        SuccessToast("Posted Successfully");
        state.posts = action.payload.posts;
      })
      .addCase(addNewPost.rejected, (state, action) => {
        AlertToast("Unable to Post");
      })

 
      .addCase(editPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(editPost.rejected, (state, action) => {})
      .addCase(deletePost.fulfilled,(state,action)=>{
        state.posts = action.payload.posts;
      })
      .addCase(deletePost.rejected, (state, action) => {
        AlertToast("something went wrong");
      })

      .addCase(commentPost.fulfilled, (state, action) => {
        console.log(action.payload.posts)
        state.posts = action.payload.posts;
      })
      .addCase(commentPost.rejected, () => {
        AlertToast("Something went wrong");
      })

      .addCase(deletePostComment.fulfilled,(state,action) =>{
        console.log(action.payload.posts)
        state.posts = action.payload.posts
      })
      .addCase(deletePostComment.rejected,(state,action)=>{
        console.log(action.error)
        AlertToast("something went wrong");
      })

      .addCase(editPostComment.fulfilled,(state,action) =>{
        console.log(action.payload.posts)
        state.posts = action.payload.posts
      })
      .addCase(editPostComment.rejected,(state,action)=>{
        console.log(action.error)
        AlertToast("something went wrong");
      })

      .addCase(addLikes.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(addLikes.rejected, (state, action) => {
        AlertToast(`${action.payload.errors}`);
      })
      .addCase(removeLikes.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(removeLikes.rejected, (state, action) => {})
      .addCase(bookmark.fulfilled, (state, action) => {
        SuccessToast("Added to bookmark");
        state.bookmarked = action.payload.bookmarks;
      })
      .addCase(bookmark.rejected, (state, action) => {
        AlertToast(`${action.payload.errors}`);
      })
      .addCase(removeBookmark.fulfilled, (state, action) => {
        state.bookmarked = action.payload.bookmarks;
      })
      .addCase(removeBookmark.rejected, (state, action) => {
        AlertToast(`${action.payload.errors}`);
      });
  },
});

const { actions, reducer } = postsSlice;
export { actions, reducer as default };
export const { getPostToEdit, setEditEmpty,setSortBy } = actions;
