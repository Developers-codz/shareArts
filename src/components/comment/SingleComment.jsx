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
import {EditCommentModal} from "../modal/EditCommentModal"
import {toggleEditModal} from "../../Redux/Reducers/commentSlice"



export const SingleComment = ({ comment, postId }) => {
  
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
                <ToggleMenu>
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
