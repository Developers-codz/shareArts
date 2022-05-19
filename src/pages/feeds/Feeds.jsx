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
import { useSelector } from "react-redux";

import { useTheme } from "../../context/theme-context";
import { getTextColor } from "../../utils/Functions/getColor";
import { Post,Modal } from "../../components";
import { useState } from "react";
export const Feeds = () => {
  const { posts } = useSelector((state) => state.posts);
  const [isModalOpen,setModalOpen] = useState(false)

  const { theme } = useTheme();
  return (
    <>
     <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    <div className="section"  style={
          isModalOpen
            ? { pointerEvents: "none", opacity: ".5" }
            : { pointerEvents: "auto", opacity: "1" }
        } >
  
      <BrowseFeeds>
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
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
      <Button addpostBtn onClick={() => setModalOpen(true)}>Add Post</Button>
     
    </div>
    </>
  );
};
