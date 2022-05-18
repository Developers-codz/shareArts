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
  Username
} from "../../pages/feeds/feedsComponent";
import {
    BookmarkIcon,
    BookmarkedIcon,
    CommentIcon,
    HeartOutline,
    ShareIcon,
  } from "../../Assets/icons";

  import {useTheme} from "../../context/theme-context"

  import { getBgColor,getTextColor } from "../../utils/Functions/getColor";
  import {bookmark} from "../../Redux/Reducers/postsSlice"
  import {useSelector} from "react-redux"
  import {useDispatch} from "react-redux"
export const Post = ({post}) => {
    const {theme} = useTheme()
    const dispatch = useDispatch();
    const bookmarked = useSelector(store => store.posts.bookmarked)
    // const isBookmarked = Bookmarked.find(item => item._id === post._id)
    // console.log(isBookmarked)
  return (
    <>
      <PostContainer style={{ backgroundColor: getBgColor(theme) }}>
        <PostHeader>
          <LeftArea>
            {" "}
            <UserThumbnail src={post.profilePic} />
            <Username>{post.username}</Username>
          </LeftArea>

          <RightArea></RightArea>
        </PostHeader>

        <PostHeroImg src={post.postPic} />
        <Content>
          <Icons>
            <LeftArea>
              <HeartOutline />
              <CommentIcon />
              <ShareIcon />
            </LeftArea>
            <RightArea onClick={() => dispatch(bookmark(post._id))}>
              {bookmarked.map(bookmark => bookmark._id).includes(post._id) ? <BookmarkedIcon /> : <BookmarkIcon />}
            </RightArea>
          </Icons>
          <Likes>{post.likes.likeCount} Likes</Likes>
          <Caption>
            {post.content}
          </Caption>
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
