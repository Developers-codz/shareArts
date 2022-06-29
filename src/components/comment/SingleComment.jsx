import { useState } from "react";
import { VerticalDots } from "assets/icons";
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
} from "features/home/pages/feedsComponent";
import { useSelector, useDispatch } from "react-redux";
import { deletePostComment } from "features/home/postsSlice";
import {EditCommentModal} from "../modal/EditCommentModal"
import {toggleEditModal} from "features/singlepost/commentSlice"
import { useTheme } from "context/theme-context";



export const SingleComment = ({ comment, postId }) => {
  const {theme} = useTheme();
  
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
     <EditCommentModal postId={postId} comment={comment} />
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
                <ToggleMenu className={theme==="dark" ? "active" : ""}>
                  <EditButton onClick={() => dispatch(toggleEditModal(true))}
                >Edit Comment</EditButton>
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
