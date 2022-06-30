import axios from "axios";

export const getPosts =() => axios.get("/api/posts");
export const getSinglePost = (id) => axios.get(`/api/posts/${id}`);
export const postNewPostData = (content, postPic, encodedToken) =>
  axios.post(
    "/api/posts",
    { content, postPic },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deletePostData = (_id, encodedToken) =>
  axios.delete(`/api/posts/${_id}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const postEditedData = (_id, postData, encodedToken) =>
  axios.post(
    `/api/posts/edit/${_id}`,
    { postData: postData },
    { headers: { authorization: encodedToken } }
  );
export const postCommentData = (id, comment, encodedToken) =>
  axios.post(
    `/api/posts/${id}/comment`,
    { commentData: { content: comment } },
    { headers: { authorization: encodedToken } }
  );

export const deleteCommentedData = (postId, commentId, encodedToken) =>
  axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: encodedToken } }
  );

export const editCommentedData = (
  postId,
  commentId,
  encodedToken,
  commentData
) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { content: commentData },
    { headers: { authorization: encodedToken } }
  );

  export const postLikeData = (postId,encodedToken) => axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
  export const postUnlikeData = (postId,encodedToken) => axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
  export const postBookmarkData = (postId,encodedToken) =>axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
  export const postRemoveBookmarkData = (postId,encodedToken) =>axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );