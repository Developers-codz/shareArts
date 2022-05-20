import { useTheme } from "../../context/theme-context";
import { useLocation } from "react-router-dom";
import { asideData } from "../../data/aside-data";
import { NavMenu, NavItem, NavLinks ,IconWrapper} from "./asideComponent";
import { getAsideColor } from "../../utils/Functions/getColor";

export const Aside = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  return pathname !== "/landing" &&
    pathname !== "/login" &&
    pathname !== "/signup" &&
    pathname !== "/mockman" ? (
    <aside className="aside">
      <NavMenu>
        {asideData.map(({ id, name, path,icon }) => {
          return (
            <NavLinks key={id}  to={path}   exact >
                <IconWrapper>{icon}</IconWrapper>
              <NavItem 
             
                style={{ color: getAsideColor(theme) }}
              >
                {name}
              </NavItem>
            
            </NavLinks>
          );
        })}
      </NavMenu>
    </aside>
  ) : null;
};
