import {Wrapper,ProfileImg, Section,HeaderSection,Header,Button,BodySection,About,Followers,ExternalLink} from "./profileComponents"
import avataaar from "../../Assets/images/avataaar1.png"
import { getBorder } from "../../utils/Functions/getColor"
import {useTheme} from "../../context/theme-context" 
import { Tabs } from "./Tab/Tabs"
import { useNavigate } from "react-router-dom"
export const Profile = () =>{
    const navigate = useNavigate();
    const {theme} = useTheme()
    return(
        <Wrapper>
            <Section style={{borderBottom:getBorder(theme)}}>
                <ProfileImg  src={avataaar} />
                <Section direction>
                    <HeaderSection>
                        <Header>@ Coding_avengers </Header>
                        <Button onClick={()=>navigate("/settings")}>Edit Profile</Button>
                    </HeaderSection>
                   <BodySection>
                   <Header>John Doe</Header>
                   <About>Awesome Coding Tricks</About>
                   <ExternalLink href="https://www.programiz.com/javascript/examples">Cool coding Tricks </ExternalLink>
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