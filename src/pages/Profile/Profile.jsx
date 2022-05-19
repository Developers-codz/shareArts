import {Wrapper,ProfileImg, Section,HeaderSection,Header,Button,BodySection,About,Followers,ExternalLink} from "./profileComponents"
import avataaar from "../../Assets/images/avataaar1.png"
import { getBorder } from "../../utils/Functions/getColor"
import {useTheme} from "../../context/theme-context" 
import { Tabs } from "./Tab/Tabs"
import { useNavigate,useParams } from "react-router-dom"
import { useSelector } from "react-redux"
export const Profile = () =>{
    const {users} = useSelector(store => store.users);
    const {currentUser} = useSelector(store => store.auth);
    const navigate = useNavigate();
    const params = useParams();
    console.log(params)
    const getProfile = (username) => {
        if(username === "profile"){
            console.log(currentUser)
            return users.find((user) => user.username === currentUser.username)
        }
        else {
          return  users.find((user) => user.username === username)
        }
    }
    let profile = getProfile(params.username,10)
    console.log(profile)

    const {theme} = useTheme()
    return(
        <Wrapper>
            <Section style={{borderBottom:getBorder(theme)}}>
                <ProfileImg  src={profile.userPhoto} />
                <Section direction>
                    <HeaderSection>
                        <Header>{profile.username}</Header>
                        <Button onClick={()=>navigate("/settings")}>Edit Profile</Button>
                    </HeaderSection>
                   <BodySection>
                   <Header>{profile.firstName}{" "}{profile.lastName}</Header>
                   <About>{profile.bio}</About>
                   <ExternalLink href={profile.link}>{profile.link}</ExternalLink>
                   <Section>
                    <Followers>1 Post</Followers>
                   <Followers>4k Followers</Followers><Followers> 10 Following</Followers>
                   </Section>
                   </BodySection>
                </Section>
            </Section>
     <Tabs />
        </Wrapper>
    )
}