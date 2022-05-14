import {
  BrowseFeeds,
  SuggestionArea,
  LeftArea,
  UserThumbnail,
  Username,
  Header,
  Button,
} from "./feedsComponent";
import avataaar1 from "../../Assets/images/avataaar1.png";

import { useTheme } from "../../context/theme-context";
import {
  getTextColor,
} from "../../utils/Functions/getColor";
import { Post } from "../../components";
export const Feeds = () => {
  const { theme } = useTheme();
  return (
    <div className="section">
      <BrowseFeeds>
      <Post />
      <Post />
      </BrowseFeeds>
      <SuggestionArea>
        <Header>Suggestions For you </Header>
        <LeftArea m_md>
          {" "}
          <UserThumbnail src={avataaar1} />
          <Username>Coding_Avengers</Username>
          <Button style={{ color: getTextColor(theme) }}>Follow</Button>
        </LeftArea>
        <LeftArea m_md>
          {" "}
          <UserThumbnail src={avataaar1} />
          <Username>Coding_Avengers</Username>
          <Button style={{ color: getTextColor(theme) }}>Follow</Button>
        </LeftArea>
        <LeftArea m_md>
          {" "}
          <UserThumbnail src={avataaar1} />
          <Username>Coding_Avengers</Username>
          <Button style={{ color: getTextColor(theme) }}>Follow</Button>
        </LeftArea>
      </SuggestionArea>
    </div>
  );
};
