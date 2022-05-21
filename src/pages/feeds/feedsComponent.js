import styled from "styled-components";

export const BrowseFeeds = styled.div``;
export const PostContainer = styled.div`
  width: 40vw;
  min-height: 40rem;
  border-radius:10px;
  margin: 1rem 1rem .5rem 0;
  position: relative;
  @media only screen and (max-width:560px){
    width:100%;
    min-height:45rem;
  }
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
export const RightArea = styled.div`
position:relative;`;

export const UserThumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
  padding: 0.2rem 0.8rem;
  display: flex;
  justify-content: space-between;
`;
export const CommentArea = styled.div`
padding:.5rem;
min-height:4rem;
`
export const Comment = styled.div`
margin:.5rem;
`

export const SuggestionArea = styled.div`
  position: fixed;
  right: 0;
  width: 25vw;
  height: 20rem;
  @media only screen and (max-width:560px){
    display:none;
  }
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
  background: ${(props) => props.addpostBtn ? "#d6806a":"transparent"};
  padding:${(props) => props.addpostBtn ? ".5rem 1rem":""};
  border-radius:${(props) => props.addpostBtn ? "10px":""};
  cursor: pointer;
  font-size: 1.1rem;
  position:${(props) => props.addpostBtn ? "fixed":""};
  bottom:${(props) => props.addpostBtn ? "20px":""};
  right:${(props) => props.addpostBtn ? "20px":""};
  &:hover {
    transform: scale(1.03, 1.03);
    color:var( --primary-cta) !important;
  }
`;

export const ToggleMenu = styled.div`
border-radius:10px;
text-align:center;
width:10rem;
min-height:2rem;
position:absolute;
z-index:9;
right:1rem;
background-color:var(--color-primary);
& :hover{
  border-radius: 0px !important;
  background-color:var(--color-primary)
}

`

export const VerticalIconWrapper = styled.span`
margin-right:1rem;
& :hover{
  border-radius: 50%;
  background-color:var(--color-primary)
}
`

export const EditButton =  styled.div`
cursor:pointer;
padding:.5rem 0 .5rem 0;
margin: 0.3rem;
border-radius:10px;
&:hover{
  background-color: var(--color-light);
}
`
export const DeleteButton = styled(EditButton)``