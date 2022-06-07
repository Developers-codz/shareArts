import styled from "styled-components";
import { getTextColor } from "../../utils/Functions/getColor";

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
`;
export const NavHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 7vw;
  > * {
    cursor: pointer;
  }
`;
