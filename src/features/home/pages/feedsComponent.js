import styled from "styled-components";

export const BrowseFeeds = styled.div`
select{
  margin:0 0 1rem 24rem;
  height:2rem;
  width:10rem;
  
}
@media only screen and (max-width:768px){
  select{
    margin-left:19rem;
  }
}
`;
export const PostContainer = styled.div`
  width: 40vw;
  min-height: 32rem;
  border-radius:10px;
  margin: 1rem 1rem .5rem 0;
  .active{
  background-color: black;
}
  .active :hover{
  background-color: #28231d;
  }
  @media only screen and (max-width:560px){
    width:300px;
    min-height:40rem;
  }
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  border-bottom: ${props => props.comment ? "none" : "1px solid grey"};
`;
export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${(props) => (props.m_md ? "1rem" : ".2rem")};
  padding:${(props) => props.user_modal ? ".5rem":""} 
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
  cursor:pointer;
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
  width: 98%;
  padding: 1rem .8rem 1rem 1rem;
  display: flex;
  justify-content: space-around;
  background-color: var(--color-light);
  border-radius: 20px;
  margin:.5rem 0 1rem 0 ;
`;
export const CommentArea = styled.div`
padding:.5rem;
min-height:4rem;
.active{
  background-color: black;
}
  .active :hover{
  background-color: #28231d;
  }
`
export const Comment = styled.div`
margin:.5rem 0 .5rem 5rem;
border-bottom:1px solid var(--color-dark);
padding-bottom:1rem;
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
  border: none;
  cursor: pointer;
  z-index:5;
  margin:${props => props.lg ? "3rem 0 1rem 0" :  "0 1rem"};
  background: ${(props) => props.addpostBtn ? "#d6806a":"transparent"};
  padding:${(props) => props.addpostBtn ? ".5rem 1rem":"0"};
  border-radius:${(props) => props.addpostBtn ? "10px":""};
  font-size: ${(props) => props.lg ? "1.4rem" : "1.1rem"};
  position:${(props) => props.addpostBtn ? "fixed":""};
  bottom:${(props) => props.addpostBtn ? "1.25rem":""};
  right:${(props) => props.addpostBtn ? "1.25rem":""};
  &:hover {
    transform: scale(1.03, 1.03);
    color:var( --primary-cta) !important;
  }
  &:active{
    color:var(--color-success) !important;
  }
  &:disabled{
    cursor:not-allowed;
  }

  @media only screen and (max-width:768px){
    margin:${props => props.lg ? "3rem 0 1rem 0" :  "0 .1rem"};
    padding:${(props) => props.addpostBtn ? ".5rem":"0"};
    bottom:${(props) => props.addpostBtn ? "60px":""};
    }
`;
export const PostImageButton = styled.img`
z-index:5;
position:fixed;
bottom:20px;
left:40px;
width:30px;
height:30px;
cursor:pointer;
`

export const ToggleMenu = styled.div`
border-radius:10px;
text-align:center;
width:10rem;
min-height:2rem;
position:absolute;
z-index:2;
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
  cursor: pointer;
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

export const HiddenBtn = styled.button`
background-color:transparent;
border:none;
width:2.5rem;
cursor:pointer;
&:disabled{
  cursor:not-allowed;
}
`