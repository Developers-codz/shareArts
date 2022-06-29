import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "components";
import { CommentBox, Button } from "../../home/pages/feedsComponent";
import { useTheme } from "context/theme-context";
import { getTextColor, getBgColor } from "utils/functions/getColor";
import { AlertToast } from "components/toasts";
import { commentPost } from "features/home/postsSlice";
import { FormInput } from "../../authentication/pages/AuthFormComponent"
import { SingleComment } from "components";
import {useDocumentTitle} from "utils/hooks/useDocumentTitle";

export const SinglePost = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { posts ,isFetching} = useSelector((store) => store.posts);
  const {editModalOpen} = useSelector((store) => store.comments)
  

  const params = useParams();
  const { postId } = params;
  const currentPost = posts.find((post) => post._id === postId);
  const [comment, setComment] = useState({ id: currentPost._id, comment: "" });
  useDocumentTitle(`Post ${postId}`)

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
                disabled={isFetching}
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
