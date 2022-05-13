import {useLocation} from "react-router-dom"

import {
  Logo,
  Search,
  LoginIcon,
  MoonIcon,
  SunIcon,
} from "../../Assets/icons";
import { useTheme } from "../../context/theme-context";
import { Header,Heading,SearchInput,SearchWrapper,SearchWrapperIcon,IconWrapper } from "./navbarComponent";



export const Navbar = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  return (
    pathname!=="/landing" &&
    pathname !== "/login" &&
        pathname !== "/signup" ?
   ( <>
    <Header
      className="header-wrapper"
      style={
        theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#18191a" , borderBottom:"1px solid #f1e9e7"}
      }
    >
      <div>
        <Logo width="2.4rem" height="2.4rem" />
        <Heading>Share Arts</Heading>
      </div>
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
  </>):null
  );
};
