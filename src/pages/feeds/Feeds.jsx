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
import { useNavigate } from "react-router-dom";

export const Feeds = () => {
  const navigate = useNavigate()
  const { posts } = useSelector((store) => store.posts);
  const {users} = useSelector((store)=> store.users)
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
        {users.map((user) => {
        return (

        <LeftArea m_md>
          {" "}
          <UserThumbnail src={user.userPhoto} onClick={() => navigate(`${user.username}`)} />
          <Username>{user.username}</Username>
          <Button style={{ color: getTextColor(theme) }}>Follow</Button>
        </LeftArea>
        )}
        )}
        
      </SuggestionArea>
      <Button addpostBtn onClick={() => setModalOpen(true)}>Add Post</Button>
     
    </div>
    </>
  );
};
