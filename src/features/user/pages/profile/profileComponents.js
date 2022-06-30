import styled from "styled-components";
export const Wrapper  = styled.div`
  padding-top:13vh; 
  min-height: 95vh;
  margin:1rem 0 0rem 18rem;
  @media only screen and (max-width:560px){
    margin:0rem;
    margin-top:4rem;
  }
`
export const Section = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: ${(props) => (props.direction ? "column" : "row")};
  padding-bottom:3rem;
  @media only screen and (max-width:560px){
    min-height:13rem;
    padding-bottom:1rem;
  }
`;
export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 13rem;
  height: 13rem;
  @media only screen and (max-width:560px){
    margin:.5rem;
    height:8rem;
    width:8rem;
  }

`;
export const HeaderSection = styled.div`
  display: flex;
  height: 5vh;
  width: 40vw;
  justify-content: center;
  margin-top: 2rem;
  white-space: nowrap;
  @media only screen and (max-width:560px){
    flex-direction: column-reverse;
    margin:.5rem
  }
`;
export const BodySection = styled(HeaderSection)`
  min-height: 5vh;
  justify-content: start;
  margin-left: 7rem;
  flex-direction: column;
  @media only screen and (max-width:560px){
    margin:1rem 0 0 0;
  }
`;
export const Header = styled.h2`
  margin-right: 3rem;
  margin-top:1rem;
`;
export const About = styled.p`
  margin: 0.1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
`;
export const Followers = styled.span`
  margin: 1rem 1rem 0 0;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 1px;
  white-space: nowrap;
`;
export const ExternalLink = styled.a`
  text-decoration: none;
`;
export const Button = styled.button`
  background-color: var(--color-primary);
  padding: 0.3rem 1.3rem;
  border-radius: 30px;
  border: 2px solid var(--color-secondary-dark);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-dark);
  white-space:nowrap;
  &:hover {
    transform: scale(1.03, 1.03);
    color: var(--color-secondary-dark);
  }
`;
