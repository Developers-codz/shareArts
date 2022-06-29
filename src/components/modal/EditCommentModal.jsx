import React, { useState } from "react";
import { Button } from "features/home/pages/feedsComponent";
import {
  ModalWrapper,
  CloseButton,
  InputWrapper,
  InputPost,
} from "./modalComponent";
import { useDispatch,useSelector } from "react-redux";

import { getBgColor, getTextColor } from "utils/functions/getColor";
import { useTheme } from "context/theme-context";
import { AlertToast } from "../toasts";
import { editPostComment } from "features/home/postsSlice";
import {toggleEditModal} from "features/singlepost/commentSlice"

export const EditCommentModal = ({
  postId,
  comment,
}) => {
  const { theme } = useTheme();
  const {editModalOpen} = useSelector((store) => store.comments)
  console.log(comment.content)
  const [editedComment, setEditedComment] = useState({
    commentData: comment.content,
    postId: postId,
    commentId: comment._id,
  });
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (editedComment.commentData === "") {
      AlertToast("Nothing to edit");
    } else {
      dispatch(editPostComment(editedComment));
      setEditedComment((prev) => ({ ...prev, commentData: "" }));
      dispatch(toggleEditModal(false))
    }
  };

  return (
    editModalOpen && (
      <ModalWrapper
        style={
          editModalOpen
            ? { pointerEvents: "auto", opacity: "1" }
            : { pointerEvents: "none", opacity: "" }
        }
      >
        <CloseButton onClick={() => dispatch(toggleEditModal(false))}>X</CloseButton>
        <InputWrapper>
          <InputPost
            style={{ color: getTextColor(theme) }}
            placeholder="Edit comment......"
            name="commentData"
            value={editedComment.commentData}
            onChange={(e) => setEditedComment(prev => ({...prev,commentData:e.target.value}))}
          />
        </InputWrapper>

        <Button addpostBtn onClick={clickHandler}>
          Edit Comment
        </Button>
      </ModalWrapper>
    )
  );
};
