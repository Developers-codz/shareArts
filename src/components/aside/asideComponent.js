import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenu = styled.ul`
  list-style: none;
`;

export const NavLinks = styled(NavLink)`
  margin: 0.3rem;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
  color: ${props => props.exact ? "red" : "black"};
  &:hover {
    color: var(--primary-cta) !important;
    background-color: #f1e9e7;
    color: var(--primary-cta) !important;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1rem 1rem 1rem 0.4rem;

  color: black;
`;

export const IconWrapper = styled.span`
  padding-top: 1rem !important;
  padding: 1rem;
`;
