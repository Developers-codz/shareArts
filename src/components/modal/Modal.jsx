import Picker from "emoji-picker-react";
import { Button, PostImageButton } from "pages/feeds/feedsComponent";
import {
  ModalWrapper,
  CloseButton,
  InputWrapper,
  InputPost,
  EmojiBtn,
  PickerWrapper,
  InputImage
} from "./modalComponent";
import addPostImg from "Assets/images/addpostImg.webp";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { AlertToast } from "../toasts";
import { addNewPost, editPost } from "Redux/Reducers/postsSlice";
import { getBgColor, getTextColor } from "utils/Functions/getColor";
import { useTheme } from "context/theme-context";
import { useSelector } from "react-redux";

export const Modal = ({ isModalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const [postData, setPostData] = useState({ content: "" });
  const [editData, setEditData] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [imageToPost, setImageToPost] = useState({
    isShow: false,
    image: null,
  });


  const postToEdit = useSelector((store) => store?.posts?.postToEdit);

  const onEmojiClick = (event, emojiObject) => {
    const newData = postData.content + emojiObject.emoji;
    setPostData((postData) => ({ ...postData, content: newData }));
    setShowPicker(false);
  };

  const clickHandler = () => {
    if (postData.content === "")
      AlertToast("Please write about what are you thinking");
    else if (imageToPost.image === null)
      AlertToast("Please choose a photo to post");
    else {
      dispatch(
        addNewPost({
          ...postData,
          postPic: URL.createObjectURL(imageToPost.image),
        })
      );
      setPostData("");
      setImageToPost((prev) => ({ ...prev, isShow: false, image: null }));
      setModalOpen(false);
    }
  };

  const editClickHandler = () => {
    dispatch(
      editPost({
        ...postToEdit,
        content: editData.content,
      })
    );
    setEditData((prev) => ({ ...prev, content: "" }));
    setModalOpen(false);
  };

  useEffect(() => {
    setEditData({ content: postToEdit?.content });
  }, [postToEdit]);

  return (
    isModalOpen && (
      <ModalWrapper style={{ backgroundColor: getBgColor(theme) }}>
        <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
        {imageToPost.isShow === true && (
          <img
            className="postImg"
            src={URL.createObjectURL(imageToPost.image)}
          />
        )}
       
        <InputWrapper>
          <InputPost
            style={{ color: getTextColor(theme) }}
            name="content"
            value={postToEdit ? editData?.content : postData.content}
            placeholder="Write something awesome...."
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
        <InputImage
          type="file"
          id="postData"
          onChange={(e) => 
            setImageToPost((prev) => ({
                  ...prev,
                  isShow: true,
                  image: e.target.files[0],
                }))
          }
        />
       {!postToEdit && <label htmlFor="postData">
          {" "}
          <PostImageButton src={addPostImg} />
        </label>}
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
