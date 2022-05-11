import styled from "styled-components";
import {
  Logo,
  Search,
  LoginIcon,
  MoonIcon,
  SunIcon,
} from "../../Assets/icones";
import { useTheme } from "../../context/theme-context";

const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid black;
  z-index: 2;
`;
const Heading = styled.span`
  font-size: 2rem;
  padding-left: 1rem;
`;
const SearchInput = styled.input`
  width: 30vw;
  height: 3rem;
  border: none;
  background-color: #f1e9e7;
  border-radius: 20px;
  font-size: 1rem;
  padding: 0rem 3rem 0 1rem;
  &:focus {
    outline: none;
  }
`;
const SearchWrapper = styled.div`
  position: relative;
`;
const SearchWrapperIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
`;
const IconWrapper = styled.div`
  margin: 0.1rem;
  display: flex;
  justify-content: space-between;
  width: 7vw;
  > * {
    cursor: pointer;
  }
`;

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <>
      <Header
        className="header-wrapper"
        style={
          theme === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#0d152d" }
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
