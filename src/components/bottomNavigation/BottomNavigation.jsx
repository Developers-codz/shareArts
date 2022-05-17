import React from "react";
import { asideData } from "../../data/aside-data";
import { getBgColor2 } from "../../utils/Functions/getColor";
import { useTheme } from "../../context/theme-context";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 560px) {
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
  return (
    <>
      <Wrapper style={{ backgroundColor: getBgColor2(theme) }}>
        {asideData.map(({ path, icon, name }) => (
          <NavLink to={path} key={name}>{icon}</NavLink>
        ))}
      </Wrapper>
    </>
  );
};
