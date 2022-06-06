import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Post, EditCommentModal } from "../../components";
import { CommentBox, Button } from "../feeds/feedsComponent";
import { useTheme } from "../../context/theme-context";
import { getTextColor, getBgColor } from "../../utils/Functions/getColor";
import { AlertToast } from "../../components/toasts";
import { commentPost } from "../../Redux/Reducers/postsSlice";
import { FormInput } from "../Authpages/AuthFormComponent";
import { SingleComment } from "../../components";

export const SinglePost = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.posts);
  const {editModalOpen} = useSelector((store) => store.comments)
  

  const params = useParams();
  const { postId } = params;
  const currentPost = posts.find((post) => post._id === postId);

  const [comment, setComment] = useState({ id: currentPost._id, comment: "" });

  return (
    <>
      <div
        className="section"
        style={
          editModalOpen
            ? { pointerEvents: "none", opacity: ".5" }
            : { pointerEvents: "auto", opacity: "1" }
        }
      >
        {currentPost ? (
          <div>
            <Post post={currentPost} />
            <CommentBox style={{ backgroundColor: getBgColor(theme) }}>
              <FormInput
                singlepost
                value={comment.comment}
                onChange={(e) =>
                  setComment((prev) => ({ ...prev, comment: e.target.value }))
                }
                placeholder="Add a comment...."
              />
              <Button
                lg
                style={{ color: getTextColor(theme) }}
                fixed_bottom_right
                onClick={() => {
                  if (comment.comment === "") AlertToast("What to comment ?");
                  else {
                    dispatch(commentPost(comment));
                    setComment((prev) => ({ ...prev, comment: "" }));
                  }
                }}
              >
                Post
              </Button>
            </CommentBox>
            {currentPost &&
              currentPost.comments.map((comment) => (
                <SingleComment
                  comment={comment}
                  key={comment._id}
                  postId={currentPost._id}
                />
              ))}
          </div>
        ) : (
          <div>Loading.....</div>
        )}
      </div>
    </>
  );
};
