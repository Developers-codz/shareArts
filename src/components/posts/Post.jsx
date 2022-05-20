import InputEmoji from "react-input-emoji";
import {
  PostContainer,
  PostHeader,
  LeftArea,
  RightArea,
  PostHeroImg,
  Content,
  Icons,
  Likes,
  Caption,
  PostFooter,
  CommentBox,
  Button,
  UserThumbnail,
  Username,
  ToggleMenu,
  VerticalIconWrapper,
  EditButton,
  DeleteButton
} from "../../pages/feeds/feedsComponent";
import {
  BookmarkIcon,
  BookmarkedIcon,
  CommentIcon,
  HeartOutline,
  HeartFilled,
  ShareIcon,
  VerticalDots,
} from "../../Assets/icons";

import { useTheme } from "../../context/theme-context";
import { getBgColor, getTextColor } from "../../utils/Functions/getColor";
import { bookmark,removeBookmark } from "../../Redux/Reducers/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { removeLikes, addLikes } from "../../Redux/Reducers/postsSlice";
import { useState } from "react";

export const Post = ({ post }) => {
  const [isMenuOpen, setOpen] = useState(false);
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const bookmarked = useSelector((store) => store.posts.bookmarked);


  return (
    <>
      <PostContainer style={{ backgroundColor: getBgColor(theme) }}>
        <PostHeader>
          <LeftArea>
            {" "}
            <UserThumbnail src={post.userPhoto} />
            <Username>{post.username}</Username>
          </LeftArea>

          <RightArea>
            <VerticalIconWrapper onClick={() => setOpen((open) => !open)}>
              <VerticalDots />
              
            </VerticalIconWrapper>
            {isMenuOpen && <ToggleMenu>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
              </ToggleMenu>}
          </RightArea>
        </PostHeader>

        <PostHeroImg src={post.postPic} />
        <Content>
          <Icons>
            <LeftArea>
              {post.likes.likedBy
                .map((liked) => liked.username)
                .includes("adarshbalika") ? (
                <span onClick={() => dispatch(removeLikes(post._id))}>
                  <HeartFilled />
                </span>
              ) : (
                <span onClick={() => dispatch(addLikes(post._id))}>
                  <HeartOutline />
                </span>
              )}
              <CommentIcon />
              <ShareIcon />
            </LeftArea>
            <RightArea >
              {bookmarked.map((bookmark) => bookmark._id).includes(post._id) ? (
                <span onClick={() => dispatch(removeBookmark(post._id))}><BookmarkedIcon /></span>
              ) : (
               <span onClick={() => dispatch(bookmark(post._id))}> <BookmarkIcon /></span>
              )}
            </RightArea>
          </Icons>
          <Likes>{post.likes.likeCount} Likes</Likes>
          <Caption>{post.content}</Caption>
        </Content>
        <PostFooter>
          <CommentBox>
            <InputEmoji cleanOnEnter placeholder="Add a comment...." />
            <Button style={{ color: getTextColor(theme) }} fixed_bottom_right>
              Post
            </Button>
          </CommentBox>
        </PostFooter>
      </PostContainer>
    </>
  );
};
