import {useTheme} from "../../context/theme-context"
import {asideData} from "../../data/aside-data"
import {NavMenu,NavItem,NavLinks} from "./asideComponent"
import { getAsideColor } from "../../utils/Functions/getColor"

export const Aside =()=>{
    const {theme} = useTheme();
    return(
    <aside className="aside">
      <NavMenu>
        {
            asideData.map(({id,name,path})=>{
                return(
                    <NavItem key={id} >
                        <NavLinks to={path} exact style={{color:getAsideColor(theme)}}>
                        {name}
                        </NavLinks>
                    </NavItem>
                )
            })
        }
      </NavMenu>
    </aside>
    )
}