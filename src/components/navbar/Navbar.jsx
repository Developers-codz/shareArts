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
import { getBgColor, getTextColor,getBgColor2 } from "utils/functions/getColor";
import { debounce } from "utils/functions/debounce";
import { UserModal } from "components";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedText } from "features/user/userSlice";

export const Navbar = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { userModalFlag, searchedText } = useSelector((store) => store.users);
  const changeHandler = (e) => dispatch(setSearchedText(e.target.value));

  const getOptimisedVersion = (e) => {
    return debounce(changeHandler(e), 1000);
  };
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
          <Heading style={{ color: getTextColor(theme) }}>Share Arts</Heading>
        </NavHead>
        <SearchWrapper>
          <SearchInput
            placeholder="Search User..."
            value={searchedText}
            onChange={getOptimisedVersion}
           className={theme === "dark" ? "dark" : "light"}
          />
          {userModalFlag && <UserModal />}

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
