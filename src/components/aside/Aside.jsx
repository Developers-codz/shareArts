import { useTheme } from "context/theme-context";
import { useLocation } from "react-router-dom";
import { asideData } from "data/aside-data";
import { NavMenu, NavItem, StyledNavLink, IconWrapper } from "./asideComponent";
import { getAsideColor } from "utils/functions/getColor";


export const Aside = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  
  const activeLink = ({isActive}) =>
   isActive ? console.log("Active") : console.log("Inactive")

  return pathname !== "/landing" &&
    pathname !== "/login" &&
    pathname !== "/signup" &&
    pathname !== "/mockman" ? (
    <aside className="aside">
      <NavMenu>
        {asideData.map(({ id, name, path, icon }) => {
          return (
            <StyledNavLink
              key={id}
              to={path}
        
              style={{ color: getAsideColor(theme) }}
              className={navData => navData.isActive ? "active":""}
              exact

            >
              <IconWrapper>{icon}</IconWrapper>
              <NavItem >{name}</NavItem>
              
            </StyledNavLink>
          );
        })}
      </NavMenu>
    </aside>
  ) : null;
};
