import { useTheme } from "../../context/theme-context";
import { useLocation } from "react-router-dom";
import { asideData } from "../../data/aside-data";
import { NavMenu, NavItem, NavLinks } from "./asideComponent";
import { getAsideColor } from "../../utils/Functions/getColor";

export const Aside = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  return pathname !== "/landing" &&
    pathname !== "/login" &&
    pathname !== "/signup" ? (
    <aside className="aside">
      <NavMenu>
        {asideData.map(({ id, name, path }) => {
          return (
            <NavItem key={id}>
              <NavLinks
                to={path}
               exact activeStyle={{
                color: 'red ',
              }}
                style={{ color: getAsideColor(theme) }}
              >
                {name}
              </NavLinks>
            </NavItem>
          );
        })}
      </NavMenu>
    </aside>
  ) : null;
};
