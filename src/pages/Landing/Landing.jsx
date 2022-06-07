import {Wrapper,Section,HeroImg,Header,Para,Button} from "./landingComponents"
import landinheroImg from "../../Assets/images/landingheroImg.png"
import {Logo} from "../../Assets/icons/Logo"
import {useDocumentTitle} from "../../utils/hooks/useDocumentTitle";
export const Landing = () =>{
    useDocumentTitle("Landing")
    return (
        <Wrapper>
            <Section>
                <Section logo>
                <Logo width="5rem" height="5rem" />
                </Section>
              <Header>Share Arts</Header>
              <Para>Connect to community and get inspired today.</Para>
              <Button to="/login">Get Started</Button>
            </Section>
            <Section>
                <HeroImg src={landinheroImg} />
            </Section>
        </Wrapper>
    )
}