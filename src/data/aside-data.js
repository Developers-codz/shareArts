import {NotificationIcon,ProfileIcon,HomeIcon,ExploreIcon,SettingsIcon} from "../Assets/icons/navigationIcon"
import { useSelector } from "react-redux"

export const asideData = [{
    id:1,
    name:"Home",
    icon:<HomeIcon width="1.5rem" height="1.5rem" />,
    path:"/"
},
{id:2,
name:"Explore",
icon:<ExploreIcon  width="1.5rem" height="1.5rem" />,
path:"/explore"
},
{
    id:3,
    name:"Notifications",
    icon:<NotificationIcon  width="1.5rem" height="1.5rem" />,
    path:"/notifications"
},
{
    id:4,
    name:"Profile",
    icon:<ProfileIcon  width="1.5rem" height="1.5rem" />,
    path:"/profile"
},
{
    id:5,
    name:"Settings",
    icon:<SettingsIcon  width="1.5rem" height="1.5rem" />,
    path:"/settings"
}
]

