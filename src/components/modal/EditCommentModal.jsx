import React, { useState } from "react";
import { Button } from "../../pages/feeds/feedsComponent";
import {
  ModalWrapper,
  CloseButton,
  InputWrapper,
  InputPost,
} from "./modalComponent";
import { useDispatch } from "react-redux";

import { getBgColor, getTextColor } from "../../utils/Functions/getColor";
import { useTheme } from "../../context/theme-context";
import { AlertToast } from "../toasts";
import { editPostComment } from "../../Redux/Reducers/postsSlice";

export const EditCommentModal = ({
  isModalOpen,
  setModalOpen,
  postId,
  comment,
}) => {
  const { theme } = useTheme();
  const [editedComment, setEditedComment] = useState({
    commentData: "",
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
      setModalOpen(false)
    }
  };

  return (
    isModalOpen && (
      <ModalWrapper
        style={
          isModalOpen
            ? { pointerEvents: "auto", opacity: "1" }
            : { pointerEvents: "none", opacity: "" }
        }
      >
        <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
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
