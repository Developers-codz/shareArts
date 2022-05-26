import { useState } from "react";
import { VerticalDots } from "../../Assets/icons";
import {
  CommentArea,
  Comment,
  PostHeader,
  UserThumbnail,
  Username,
  LeftArea,
  RightArea,
  VerticalIconWrapper,
  ToggleMenu,
  EditButton,
  DeleteButton,
} from "../../pages/feeds/feedsComponent";
import { useSelector, useDispatch } from "react-redux";
import { deletePostComment } from "../../Redux/Reducers/postsSlice";


export const SingleComment = ({ comment, postId }) => {
    // const currentComment= posts.find((post) => post._id === postId);
  const [isMenuOpen, setOpen] = useState(false);
  const { currentUser } = useSelector((store) => store.auth);
  const clickHandler = () => {
    setOpen((open) => !open);
  };
  const dispatch = useDispatch();
  const details = {
    postId: postId,
    commentId: comment._id,
  };
  return (
    <>
      <CommentArea>
        <>
          <PostHeader comment>
            <LeftArea>
              {" "}
              <UserThumbnail src={currentUser.userPhoto} />
              <Username>@{comment.username}</Username>
            </LeftArea>
            <RightArea>
              <VerticalIconWrapper onClick={clickHandler}>
                <VerticalDots />
              </VerticalIconWrapper>
              {isMenuOpen && (
                <ToggleMenu>
                  <EditButton>Edit Comment</EditButton>
                  <DeleteButton
                    onClick={() => {
                      dispatch(deletePostComment(details));
                      setOpen((open) => !open);
                    }}
                  >
                    Delete Comment
                  </DeleteButton>
                </ToggleMenu>
              )}
            </RightArea>
          </PostHeader>
          <Comment>{comment.content}</Comment>
        </>
      </CommentArea>
    </>
  );
};
