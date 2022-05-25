import {useState} from "react"
import { VerticalDots } from '../../Assets/icons';
import {CommentArea,Comment, PostHeader,UserThumbnail, Username,LeftArea,RightArea,VerticalIconWrapper, ToggleMenu, EditButton, DeleteButton} from "../../pages/feeds/feedsComponent"
import { useSelector } from "react-redux";
export const SingleComment = ({comment}) => {
    const [isMenuOpen, setOpen] = useState(false);
    const {currentUser} = useSelector(store =>store.auth);
    const clickHandler = () =>{
        setOpen(open => !open)
      }
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
                      <DeleteButton>Delete Comment</DeleteButton>
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
