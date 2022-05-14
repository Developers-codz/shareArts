import styled from "styled-components";
export const Wrapper  = styled.div`
  padding-top:13vh; 
  min-height: 95vh;
  margin:1rem 0 0rem 18rem;

`
export const Section = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: ${(props) => (props.direction ? "column" : "row")};
  padding-bottom:1rem;
`;
export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 13rem;
  height: 13rem;
`;
export const HeaderSection = styled.div`
  display: flex;
  height: 5vh;
  width: 40vw;
  justify-content: center;
  margin-top: 2rem;
`;
export const BodySection = styled(HeaderSection)`
  min-height: 5vh;
  justify-content: start;
  margin-left: 7rem;
  flex-direction: column;
`;
export const Header = styled.h2`
  margin-right: 3rem;
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
  &:hover {
    transform: scale(1.03, 1.03);
    color: var(--color-secondary-dark);
  }
`;
