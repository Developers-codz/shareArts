import styled from "styled-components";
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
  return (
    <>
      <Header
        className="header-wrapper"
        style={
          theme === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#18191a" , borderBottom:"1px solid #f1e9e7"}
        }
      >
        <div>
          <Logo />
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
    </>
  );
};
