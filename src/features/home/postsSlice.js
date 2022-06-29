import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AlertToast, SuccessToast } from "components/toasts";
import {
  getSinglePost,
  getPosts,
  postNewPostData,
  deletePostData,
  postEditedData,
  postCommentData,
  deleteCommentedData,
  editCommentedData,
  postLikeData,
  postUnlikeData,
  postBookmarkData,
  postRemoveBookmarkData
  
} from "services";

const initialState = {
  posts: [],
  bookmarked: [],
  loading: false,
  postToEdit: null,
  sortBy: null,
  isModalOpen: false,
  isFetching: false,
};

export const getAllPosts = createAsyncThunk(
  "posts/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPosts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSinglePostData = createAsyncThunk(
  "posts/getSinglePostData",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getSinglePost(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (post, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    const { content, postPic } = post;
    try {
      const response = await postNewPostData(content, postPic, encodedToken);
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
      const response = await deletePostData(_id, encodedToken);
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
      const response = await postEditedData(_id, postData, encodedToken);

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
      const response = await postCommentData(id,comment,encodedToken)
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deletePostComment = createAsyncThunk(
  "posts/deletePostComment",
  async (details) => {
    const { postId, commentId } = details;
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await deleteCommentedData(postId,commentId,encodedToken)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editPostComment = createAsyncThunk(
  "posts/editPostComment",
  async (details) => {
    console.log(details);
    const { postId, commentId, commentData } = details;
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await editCommentedData(postId,commentId,commentData,encodedToken);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addLikes = createAsyncThunk(
  "posts/like",
  async (postId, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await postLikeData(postId,encodedToken)
      SuccessToast("Liked Successful");
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
      const response = await postUnlikeData(postId,encodedToken) 
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
      const response = await postBookmarkData(postId,encodedToken);
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
      const response = await postRemoveBookmarkData(postId,encodedToken);
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
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setModalOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
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

      .addCase(getSinglePostData.fulfilled, (state, action) => {
        console.log(action.payload.post);
        state.currentPost = action.payload.post;
      })

      .addCase(addNewPost.fulfilled, (state, action) => {
        state.isFetching = false;
        SuccessToast("Posted Successfully");
        state.posts = action.payload.posts;
      })
      .addCase(addNewPost.rejected, (state, action) => {
        AlertToast("Unable to Post");
      })
      .addCase(addNewPost.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(editPost.fulfilled, (state, action) => {
        SuccessToast("Post edited Successfully");
        state.isFetching = false;
        state.posts = action.payload.posts;
      })
      .addCase(editPost.rejected, (state, action) => {})
      .addCase(editPost.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.isFetching = false;
        SuccessToast("Post Deleted Successfully");
        state.posts = action.payload.posts;
      })
      .addCase(deletePost.rejected, (state, action) => {
        AlertToast("something went wrong");
      })
      .addCase(deletePost.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(commentPost.fulfilled, (state, action) => {
        state.isFetching = false;
        state.posts = action.payload.posts;
      })
      .addCase(commentPost.rejected, () => {
        AlertToast("Something went wrong");
      })
      .addCase(commentPost.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(deletePostComment.fulfilled, (state, action) => {
        state.isFetching = false;
        state.posts = action.payload.posts;
      })
      .addCase(deletePostComment.rejected, (state, action) => {
        console.log(action.error);
        AlertToast("something went wrong");
      })
      .addCase(deletePostComment.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(editPostComment.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(editPostComment.rejected, (state, action) => {
        console.log(action.error);
        AlertToast("something went wrong");
      })

      .addCase(addLikes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.posts = action.payload.posts;
      })
      .addCase(addLikes.rejected, (state, action) => {
        AlertToast(`${action.payload.errors}`);
      })
      .addCase(addLikes.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(removeLikes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.posts = action.payload.posts;
      })
      .addCase(removeLikes.rejected, (state, action) => {})
      .addCase(removeLikes.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(bookmark.fulfilled, (state, action) => {
        state.isFetching = false;
        SuccessToast("Added to bookmark");
        state.bookmarked = action.payload.bookmarks;
      })
      .addCase(bookmark.rejected, (state, action) => {
        AlertToast(`${action.payload.errors}`);
      })
      .addCase(bookmark.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(removeBookmark.fulfilled, (state, action) => {
        state.isFetching = false;
        state.bookmarked = action.payload.bookmarks;
      })
      .addCase(removeBookmark.rejected, (state, action) => {
        AlertToast(`${action.payload.errors}`);
      })
      .addCase(removeBookmark.pending, (state) => {
        state.isFetching = true;
      });
  },
});

const { actions, reducer } = postsSlice;
export { actions, reducer as default };
export const { getPostToEdit, setEditEmpty, setSortBy, setModalOpen } = actions;
