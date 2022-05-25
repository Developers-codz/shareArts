import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../components";
import { CommentBox, Button } from "../feeds/feedsComponent";
import { useTheme } from "../../context/theme-context";
import { getTextColor } from "../../utils/Functions/getColor";
import { AlertToast } from "../../components/toasts";
import { commentPost } from "../../Redux/Reducers/postsSlice";
import { FormInput } from "../Authpages/AuthFormComponent";
import { SingleComment } from "../../components";
import { v4 as uuid } from "uuid";

export const SinglePost = () => {
  const { posts } = useSelector((store) => store.posts);

  const params = useParams();
  const { postId } = params;
  const currentPost = posts.find((post) => post._id === postId);
  const [comment, setComment] = useState({ id: currentPost._id, comment: ""});
  const { theme } = useTheme();
  const dispatch = useDispatch();
  console.log(currentPost)

  return (
    <div className="section">
      <div>
        <Post post={currentPost} />
        <CommentBox>
          <FormInput
            singlepost
            value={comment.comment}
            onChange={(e) =>
              setComment((prev) => ({ ...prev, comment: e.target.value }))
            }
            placeholder="Add a comment...."
          />
          {/* <InputEmoji />  */}
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
        {currentPost.comments.length > 0 &&
          currentPost.comments.map((comment) => (
            <SingleComment comment={comment} key={comment._id} />
          ))}
      </div>
    </div>
  );
};
