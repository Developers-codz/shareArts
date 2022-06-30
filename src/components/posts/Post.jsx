
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
  UserThumbnail,
  Username,
  ToggleMenu,
  VerticalIconWrapper,
  EditButton,
  DeleteButton,
  HiddenBtn
} from "features/home/pages/feedsComponent";
import {
  BookmarkIcon,
  BookmarkedIcon,
  CommentIcon,
  HeartOutline,
  HeartFilled,
  ShareIcon,
  VerticalDots,
} from "assets/icons";

import { useTheme } from "context/theme-context";
import { getBgColor, getTextColor } from "utils/functions/getColor";
import {
  bookmark,
  removeBookmark,
  removeLikes,
  addLikes,
  deletePost,
  getPostToEdit,
  setEditEmpty,
  setModalOpen
} from "features/home/postsSlice";
import { useSelector, useDispatch } from "react-redux";

import { followUser, unFollowUser } from "features/user/userSlice";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export const Post = ({ post }) => {
  const [isMenuOpen, setOpen] = useState(false);

  const { theme } = useTheme();
  const dispatch = useDispatch();

  const bookmarked = useSelector((store) => store.posts.bookmarked);
  const currentUser = useSelector((store) => store.auth.currentUser);
  const { users } = useSelector((store) => store.users);
  const {isFetching} =useSelector((store) => store.posts);
  const activeuser =  users.find(user => user._id === currentUser._id)
  const userToFollow = users.find((user) => user.username === post.username);
  const clickHandler = () => {
    setOpen((open) => !open);
    isMenuOpen ? dispatch(setEditEmpty()) : dispatch(getPostToEdit(post));
  };

  const navigate = useNavigate();
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
            <VerticalIconWrapper onClick={clickHandler} className={theme==="dark" ? "active" : ""}>
              <VerticalDots />
            </VerticalIconWrapper>
            {isMenuOpen && (
              <ToggleMenu className={theme==="dark" ? "active" : ""}>
                {post.username === currentUser.username ? (
                  <>
                    {" "}
                    <EditButton
                      onClick={() => {
                        dispatch(setModalOpen(true))
                        setOpen(false);
                      }}
                    >
                      Edit
                    </EditButton>
                    <DeleteButton onClick={() => {dispatch(deletePost(post))
                    dispatch(setEditEmpty())
                    }}>
                      Delete
                    </DeleteButton>{" "}
                  </>
                ) : activeuser.following.some(
                    (followingUser) => followingUser._id === userToFollow._id
                  ) ? (
                  <EditButton
                    style={{ color: getTextColor(theme) }}
                    onClick={() => dispatch(unFollowUser(userToFollow._id))}
                  >
                    UnFollow
                  </EditButton>
                ) : (
                  <EditButton
                    style={{ color: getTextColor(theme) }}
                    onClick={() => dispatch(followUser(userToFollow._id))}
                  >
                    Follow
                  </EditButton>
                )}
              </ToggleMenu>
            )}
          </RightArea>
        </PostHeader>

        <PostHeroImg
          src={post.postPic}
          onClick={() => {
            navigate(`/posts/${post._id}`)
            
          }}
        />
        <Content>
          <Icons>
            <LeftArea>
              {post.likes.likedBy
                .map((liked) => liked.username)
                .includes(currentUser.username) ? (
                  <HiddenBtn disabled={isFetching} onClick={() => dispatch(removeLikes(post._id))}>
                  <HeartFilled />
                  </HiddenBtn>
              ) : (
                <HiddenBtn disabled={isFetching} onClick={() => dispatch(addLikes(post._id))}>
                  <HeartOutline />
                </HiddenBtn>
              )}
              <span onClick={() => navigate(`/posts/${post._id}`)}>
                <CommentIcon />
              </span>
              <ShareIcon />
            </LeftArea>
            <RightArea>
              {bookmarked.map((bookmark) => bookmark._id).includes(post._id) ? (
                <HiddenBtn disabled={isFetching}  onClick={() => dispatch(removeBookmark(post._id))}>
                  <BookmarkedIcon />
                </HiddenBtn>
              ) : (
                <HiddenBtn disabled={isFetching} onClick={() => dispatch(bookmark(post._id))}>
                  {" "}
                  <BookmarkIcon />
                </HiddenBtn>
              )}
            </RightArea>
          </Icons>
          <Likes>{post.likes.likeCount} Likes</Likes>
          <Caption>{post.content}</Caption>
        </Content>
        <PostFooter>
        </PostFooter>

       
      </PostContainer>
    </>
  );
};
