import InputEmoji from "react-input-emoji";
import { Button } from "../../pages/feeds/feedsComponent";
import {
  ModalWrapper,
  CloseButton,
  InputWrapper,
  InputPost,
} from "./modalComponent";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { AlertToast } from "../toasts";
import { addNewPost, editPost } from "../../Redux/Reducers/postsSlice";
import { getBgColor, getTextColor } from "../../utils/Functions/getColor";
import { useTheme } from "../../context/theme-context";
import { useSelector } from "react-redux";

export const Modal = ({ isModalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const postToEdit = useSelector((store) => store?.posts?.postToEdit);
  const [postData, setPostData] = useState({ content: "" });
  const [editData, setEditData] = useState(null);
  const clickHandler = () => {
    if (postData.content === "")
      AlertToast("Please write about what are you thinking");
    else {
      dispatch(addNewPost(postData.content));
      setPostData("");
      setModalOpen(false);
    }
  };
  useEffect(() => {
    setEditData({ content: postToEdit?.content });
  }, [postToEdit]);
  return (
    isModalOpen && (
      <ModalWrapper style={{ backgroundColor: getBgColor(theme) }}>
        <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
        <InputWrapper>
          <InputPost
            style={{ color: getTextColor(theme) }}
            name="content"
            value={postToEdit ? editData?.content : postData.content}
            placeholder="What Are you thinking about...."
            onChange={(e) =>
              postToEdit
                ? setEditData((prev) => ({ ...prev, content: e.target.value }))
                : setPostData((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </InputWrapper>
        {postToEdit ? (
          <Button
            addpostBtn
            onClick={() => {
              dispatch(editPost({ ...postToEdit, content: editData.content }));
              setEditData(prev => ({...prev,content:""}));
              setModalOpen(false);

            }}
          >
            Edit
          </Button>
        ) : (
          <Button addpostBtn onClick={clickHandler}>
            Post
          </Button>
        )}
      </ModalWrapper>
    )
  );
};
