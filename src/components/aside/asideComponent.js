import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenu = styled.ul`
  list-style: none;
`;

export const NavLinks = styled(NavLink)`
text-decoration:none;
color:black;
&.${props => props.activeClassName} {
    color: red;
  }
`;

export const NavItem = styled.li`
  margin: 0.3rem;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1rem;
  border-radius: 10px;
  color: black;
  &:hover{
    background-color:#f1e9e7;
  }
`;


