import InputEmoji from "react-input-emoji";
import {
  BrowseFeeds,
  PostContainer,
  SuggestionArea,
  PostHeader,
  LeftArea,
  RightArea,
  UserThumbnail,
  Username,
  PostHeroImg,
  Content,
  PostFooter,
  CommentBox,
  Icons,
  Likes,
  Header,
  Button,
  Caption,
} from "./feedsComponent";
import avataaar1 from "../../Assets/images/avataaar1.png";
import img1 from "../../Assets/images/img1.jpg";
import {
  BookmarkIcon,
  CommentIcon,
  HeartOutline,
  ShareIcon,
} from "../../Assets/icons";
import { useTheme } from "../../context/theme-context";
import { getTextColor,getBorder } from "../../utils/Functions/getColor";

export const Feeds = () => {
  const {theme} = useTheme();
  return (
    <div className="section">
      <BrowseFeeds>
        <PostContainer style={{border:getBorder(theme)}}>
          <PostHeader>
            <LeftArea>
              {" "}
              <UserThumbnail src={avataaar1} />
              <Username>Coding_Avengers</Username>
            </LeftArea>

            <RightArea></RightArea>
          </PostHeader>

          <PostHeroImg src={img1} />
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, nobis. Delectus corporis quasi corrupti, consectetur
              rerum nam suscipit libero quas quod odio velit aspernatur illo
              veniam aliquid reprehenderit at aperiam.
            </Caption>
          </Content>
          <PostFooter>
           <CommentBox>
           <InputEmoji cleanOnEnter placeholder="Add a comment...." />
            <Button style={{color:getTextColor(theme)}} fixed_bottom_right >Post</Button>
           </CommentBox>
          </PostFooter>
        </PostContainer>

        <PostContainer style={{border:getBorder(theme)}}>
          <PostHeader>
            <LeftArea>
              {" "}
              <UserThumbnail src={avataaar1} />
              <Username>Coding_Avengers</Username>
            </LeftArea>

            <RightArea></RightArea>
          </PostHeader>

          <PostHeroImg src={img1} />
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, nobis. Delectus corporis quasi corrupti, consectetur
              rerum nam suscipit libero quas quod odio velit aspernatur illo
              veniam aliquid reprehenderit at aperiam.
            </Caption>
          </Content>
          <PostFooter>
           <CommentBox>
           <InputEmoji cleanOnEnter placeholder="Add a comment...." />
            <Button style={{color:getTextColor(theme)}} fixed_bottom_right>Post</Button>
           </CommentBox>
          </PostFooter>
        </PostContainer>
      </BrowseFeeds>
      <SuggestionArea>
        <Header>Suggestions For you </Header>
        <LeftArea m_md>
          {" "}
          <UserThumbnail src={avataaar1} />
          <Username>Coding_Avengers</Username>
          <Button style={{color:getTextColor(theme)}}>Follow</Button>
        </LeftArea>
        <LeftArea m_md>
          {" "}
          <UserThumbnail src={avataaar1} />
          <Username>Coding_Avengers</Username>
          <Button style={{color:getTextColor(theme)}}>Follow</Button>
        </LeftArea>
        <LeftArea m_md>
          {" "}
          <UserThumbnail src={avataaar1} />
          <Username>Coding_Avengers</Username>
          <Button style={{color:getTextColor(theme)}}>Follow</Button>
        </LeftArea>
      </SuggestionArea>
    </div>
  );
};
