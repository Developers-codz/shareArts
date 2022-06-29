import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
`;
export const Heading = styled.span`
  font-size: 2rem;
  padding-left: 1rem;
  white-space: nowrap;
`;
export const NavHead = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
export const SearchInput = styled.input`
  width: 30vw;
  height: 3rem;
  border: none;
  background-color: var(--color-primary);
  border-radius: 20px;
  font-size: 1rem;
  padding: 0rem 3rem 0 1rem;
  &:focus {
    outline: none;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  .active{
  background-color: black;
}
  .active :hover{
  background-color: #28231d;
  }
`;
export const SearchWrapperIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
`;
export const IconWrapper = styled.div`
  margin: 0.1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7vw;
  > * {
    cursor: pointer;
  }
  @media only screen and (max-width:768px){
    width:9vw;
    margin:.1rem 0;
  }
`;
