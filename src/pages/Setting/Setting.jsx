import { Wrapper,Form,Label,InputField,BioInput,EditBtn,ImageWrapper } from "./settingComponent"
import { ProfileImg } from "../Profile/profileComponents"
import {PrimaryButton} from "../Authpages/AuthFormComponent"
import avataaar from "../../Assets/images/avataaar1.png"
import { EditIcon } from "../../Assets/icons"

export const Setting = () =>{
    return (
        <Wrapper>
            <Form>
                <ImageWrapper>
                <ProfileImg src={avataaar}></ProfileImg>
                <EditBtn htmlFor="picUpdate"><EditIcon /></EditBtn>
                <input type="file" id="picUpdate" style={{display:"none"}} />
                </ImageWrapper>
                <Label htmlFor="username" name>Name</Label>
                <InputField id="username" type="text"></InputField>
                <Label htmlFor="email">Email</Label>
                <InputField id="email" type="email"></InputField>
                <Label htmlFor="bio">Bio</Label>
                <BioInput id="bio" type="text" cols="28" rows="6"></BioInput>
                <Label htmlFor="url">URL</Label>
                <InputField id="url" type="text"></InputField>
            <PrimaryButton>Update Profile</PrimaryButton>
            </Form>
        </Wrapper>
    )
}