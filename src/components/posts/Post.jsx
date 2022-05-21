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
  DeleteButton,
  CommentArea,
  Comment
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
import {
  bookmark,
  removeBookmark,
  removeLikes,
  addLikes,
  deletePost,
  getPostToEdit,
  setEditEmpty,
  commentPost,
} from "../../Redux/Reducers/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../Redux/Reducers/userSlice";
import { useState,useEffect } from "react";
import { AlertToast } from "../toasts";

export const Post = ({ post, setModalOpen }) => {
  const [isMenuOpen, setOpen] = useState(false);
  const [isCommentAreaOpen, setCommentOpen] = useState(false);
  const [comment, setComment] = useState({ id: post._id, comment: "" });
  const [currentPost,setCurrentPost] = useState(null)

  const { theme } = useTheme();
  const dispatch = useDispatch();

  const bookmarked = useSelector((store) => store.posts.bookmarked);

  const currentUser = useSelector((store) => store.auth.currentUser);
  const { users } = useSelector((store) => store.users);
  const activeuser = users.find((user) => user._id === currentUser._id);
  const userToFollow = users.find((user) => user.username === post.username);
  const clickHandler = () => {
    setOpen((open) => !open);
    isMenuOpen ? dispatch(setEditEmpty()) : dispatch(getPostToEdit(post));
  };
  const posts = useSelector(store => store.posts.posts);
 useEffect(()=>{
  setCurrentPost(posts.find(currpost => currpost._id === post._id ))
  console.log(currentPost)
 },[comment])
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
            <VerticalIconWrapper onClick={clickHandler}>
              <VerticalDots />
            </VerticalIconWrapper>
            {isMenuOpen && (
              <ToggleMenu>
                {post.username === currentUser.username ? (
                  <>
                    {" "}
                    <EditButton
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      Edit
                    </EditButton>
                    <DeleteButton onClick={() => dispatch(deletePost(post))}>
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
                    Following
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
              <span onClick={()=>setCommentOpen(open => !open)}>

              <CommentIcon />
              </span>
              <ShareIcon />
            </LeftArea>
            <RightArea>
              {bookmarked.map((bookmark) => bookmark._id).includes(post._id) ? (
                <span onClick={() => dispatch(removeBookmark(post._id))}>
                  <BookmarkedIcon />
                </span>
              ) : (
                <span onClick={() => dispatch(bookmark(post._id))}>
                  {" "}
                  <BookmarkIcon />
                </span>
              )}
            </RightArea>
          </Icons>
          <Likes>{post.likes.likeCount} Likes</Likes>
          <Caption>{post.content}</Caption>
        </Content>
        <PostFooter>
          <CommentBox>
            <input value={comment.comment} onChange={(e)=> setComment(prev => ({...prev,comment:e.target.value}))} 
            placeholder="Add a comment...." />
            {/* <InputEmoji /> */}
            <Button
              style={{ color: getTextColor(theme) }}
              fixed_bottom_right
              onClick={() => {
               if(comment.comment === "")
                AlertToast("write something to comment first")
               else{

                 dispatch(commentPost(comment));
                 setComment(prev => ({...prev,comment:""}))
               }
              }}
            >
              Post
            </Button>
          </CommentBox>
         
        </PostFooter>
      
      {isCommentAreaOpen && <CommentArea> 
     
     {
      currentPost.comments.length > 0  && currentPost.comments.map(comment => <Comment>{comment.content}</Comment>)
      }
      </CommentArea>}
      </PostContainer>
      
    </>
  );
};
