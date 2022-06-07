import {
  Wrapper,
  ProfileImg,
  Section,
  HeaderSection,
  Header,
  Button,
  BodySection,
  About,
  Followers,
  ExternalLink,
} from "./profileComponents";
import { getBorder } from "../../utils/Functions/getColor";
import { useTheme } from "../../context/theme-context";
import { Tabs } from "./Tab/Tabs";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {useDocumentTitle} from "../../utils/hooks/useDocumentTitle";

export const Profile = () => {
  useDocumentTitle("Profile")
  const { theme } = useTheme();
  const { users } = useSelector((store) => store.users);
  const { currentUser } = useSelector((store) => store.auth);
  const {posts} = useSelector(store => store.posts)

  const navigate = useNavigate();
  const params = useParams();
  const [isCurrentUser, setCurrentUser] = useState(
    params.username === "profile" ? true : false
  );
  const getProfile = (username) => {
    if (username === "profile") {
      return users.find((user) => user.username === currentUser.username);
    } else {
      return users.find((user) => user.username === username);
    }
  };
  let profile = getProfile(params.username, 10);
const postOfUser = posts.filter(post =>{
  if(params.username === "profile"){
    return post.username === currentUser.username
  }
  else 
  return post.username === params.username
})

  return (
    <Wrapper>
      <Section style={{ borderBottom: getBorder(theme) }}>
        <ProfileImg src={profile.userPhoto} />
        <Section direction>
          <HeaderSection>
            <Header>{profile.username}</Header>
            {isCurrentUser && (
              <Button onClick={() => navigate(`/settings`)}>
                Edit Profile
              </Button>
            )}
          </HeaderSection>
          <BodySection>
            <Header>
              {profile.firstName} {profile.lastName}
            </Header>
            <About>{profile.bio}</About>
            <ExternalLink href={profile.link}>{profile.link}</ExternalLink>
            <Section>
              <Followers>{postOfUser.length} posts</Followers>
              <Followers>{profile.followers.length} followers</Followers>
              <Followers>{profile.following.length} Following</Followers>
            </Section>
          </BodySection>
        </Section>
      </Section>
      <Tabs isCurrentUser={isCurrentUser} postOfUser={postOfUser} />
    </Wrapper>
  );
};
