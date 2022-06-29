import React from "react";
import { asideData } from "data/aside-data";
import { getBgColor, getTextColor,getBorder } from "utils/functions/getColor";
import { useTheme } from "context/theme-context";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1rem;
  }
`;

export const BottomNavigation = () => {
  const { theme } = useTheme();
  const active = { 
    borderRadius:"50%",
    border:getBorder(theme),
    padding:".2rem .25rem",
    color:getTextColor(theme)
  };
  return (
    <>
      <Wrapper style={{backgroundColor:getBgColor(theme)}}>
        {asideData.map(({ path, icon, name }) => (
          <NavLink
            to={path}
            key={name}
            style={({isActive}) => isActive ? active:{ color: getTextColor(theme),  padding:".2rem",}}
          >
            {icon}
          </NavLink>
        ))}
      </Wrapper>
    </>
  );
};
