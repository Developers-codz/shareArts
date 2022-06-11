import Picker from "emoji-picker-react";
import { Button, PostImageButton } from "pages/feeds/feedsComponent";
import {
  ModalWrapper,
  CloseButton,
  InputWrapper,
  InputPost,
  EmojiBtn,
  PickerWrapper,
  ImageToPost,
} from "./modalComponent";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { AlertToast } from "../toasts";
import { addNewPost, editPost } from "Redux/Reducers/postsSlice";
import { getBgColor, getTextColor } from "utils/Functions/getColor";
import { useTheme } from "context/theme-context";
import { useSelector } from "react-redux";
import addPostImg from "Assets/images/addpostImg.webp";

export const Modal = ({ isModalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const [postData, setPostData] = useState({ content: "" });
  const [editData, setEditData] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [imageToPost, setImageToPost] = useState(null);

  const postToEdit = useSelector((store) => store?.posts?.postToEdit);

  const onEmojiClick = (event, emojiObject) => {
    const newData = postData.content + emojiObject.emoji;
    setPostData((postData) => ({ ...postData, content: newData }));
    setShowPicker(false);
  };

  const clickHandler = () => {
    if (postData.content === "")
      AlertToast("Please write about what are you thinking");
    else if (imageToPost === null) {
      AlertToast("Please Select a photo to post");
    } else {
      dispatch(
        addNewPost({ ...postData, postPic: URL.createObjectURL(imageToPost) })
      );
      setPostData("");
      setImageToPost(null);
      setModalOpen(false);
    }
  };

  const editClickHandler = () => {
    dispatch(
      editPost({
        ...postToEdit,
        content: editData.content,
        postPic: URL.createObjectURL(imageToPost),
      })
    );
    setEditData((prev) => ({ ...prev, content: "" }));
    setModalOpen(false);
  };
  useEffect(() => {
    setEditData({ content: postToEdit?.content });
    setImageToPost(postToEdit?.postPic);
  }, [postToEdit]);

  return (
    isModalOpen && (
      <ModalWrapper style={{ backgroundColor: getBgColor(theme) }}>
        <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
        {postToEdit ? (
          <img src={imageToPost} className="postImg" />
        ) : (
          imageToPost !== null && (
            <img src={URL.createObjectURL(imageToPost)} className="postImg" />
          )
        )}
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
          <EmojiBtn
            src="https://icons.getBootstrap.com/assets/icons/emoji-smile.svg"
            onClick={() => setShowPicker((prev) => !prev)}
          />
          <PickerWrapper>
            {showPicker && <Picker onEmojiClick={onEmojiClick} />}
          </PickerWrapper>
        </InputWrapper>
        <input
          type="file"
          style={{ display: "none" }}
          id="postData"
          onChange={(e) => setImageToPost(e.target.files[0])}
        />
        <label htmlFor="postData">
          {" "}
          <PostImageButton src={addPostImg} />
        </label>
        {postToEdit ? (
          <Button addpostBtn onClick={editClickHandler}>
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
