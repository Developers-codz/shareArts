import styled from "styled-components";

export const BrowseFeeds = styled.div``;
export const PostContainer = styled.div`
  width: 40vw;
  height: 40rem;
  border-radius:10px;
  margin: 1rem 1rem 2rem 0;
  position: relative;
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  border-bottom: 1px solid grey;
`;
export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${(props) => (props.m_md ? "1rem" : ".2rem")};
`;
export const RightArea = styled.div``;

export const UserThumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 1rem;
`;
export const Username = styled.div`
  font-size: 1.2rem;
`;
export const Likes = styled.div`
  padding: 1rem 0 0 0.8rem;
  font-weight: 500;
`;

export const PostHeroImg = styled.img`
  width: 100%;
  height: 20rem;
`;

export const Content = styled.div`
  padding: 0.5rem;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5vh;
`;
export const Caption = styled(Content)`
  padding: 1rem;
`;

export const PostFooter = styled.div``;

export const CommentBox = styled.div`
  width: 100%;
  padding: 1rem 0.8rem;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`;

export const SuggestionArea = styled.div`
  position: fixed;
  right: 0;
  width: 25vw;
  height: 20rem;
`;

export const Header = styled.div`
  position: ${(props) => (props.fixed_bottom_right ? "absolute" : "")};
  bottom: ${(props) => (props.fixed_bottom_right ? "0" : "")};
  font-size: 1.5rem;
  padding: 1rem;
`;
export const Button = styled.button`
  margin: 0 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.1rem;
  &:hover {
    transform: scale(1.03, 1.03);
    color:var( --primary-cta) !important;
  }
`;
