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
    CommentIcon,
    HeartOutline,
    ShareIcon,
  } from "../../Assets/icons";
  import img1 from "../../Assets/images/img1.jpg";
  import {useTheme} from "../../context/theme-context"
  import avataaar1 from "../../Assets/images/avataaar1.png";
  import { getBgColor,getTextColor } from "../../utils/Functions/getColor";
export const Post = ({post}) => {
    const {theme} = useTheme()
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
            <RightArea>
              <BookmarkIcon />
            </RightArea>
          </Icons>
          <Likes>500 likes</Likes>
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
