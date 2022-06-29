import { useLocation } from "react-router-dom";

import { Logo, Search, LoginIcon, MoonIcon, SunIcon } from "assets/icons";
import { useTheme } from "context/theme-context";
import {
  Header,
  Heading,
  SearchInput,
  SearchWrapper,
  SearchWrapperIcon,
  IconWrapper,
  NavHead,
} from "./navbarComponent";
import { getBgColor,getTextColor } from "utils/Functions/getColor";

export const Navbar = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  return pathname !== "/landing" &&
    pathname !== "/login" &&
    pathname !== "/signup" &&
    pathname !== "/mockman" ? (
    <>
      <Header
        className="header-wrapper"
        style={{ backgroundColor: getBgColor(theme) }}
      >
        <NavHead to="/">
          <Logo width="2.4rem" height="2.4rem" />
          <Heading  style={{ color: getTextColor(theme) }} >Share Arts</Heading>
        </NavHead>
        <SearchWrapper>
          <SearchInput placeholder="Search..." />

          <SearchWrapperIcon>
            <Search />
          </SearchWrapperIcon>
        </SearchWrapper>

        <IconWrapper>
          <LoginIcon />
          {theme === "light" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
        </IconWrapper>
      </Header>
    </>
  ) : null;
};
