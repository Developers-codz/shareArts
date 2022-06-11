import {
  Wrapper,
  Form,
  Label,
  InputField,
  BioInput,
  EditBtn,
  ImageWrapper,
} from "./settingComponent";
import { ProfileImg } from "../Profile/profileComponents";
import { PrimaryButton } from "../Authpages/AuthFormComponent";
import { EditIcon } from "Assets/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "Redux/Reducers/authSlice";
import { logout } from "Redux/Reducers/authSlice";
import {useDocumentTitle} from "utils/hooks/useDocumentTitle";
import { Navigate,useNavigate } from "react-router-dom";

export const Setting = () => {
  useDocumentTitle("Settings")
  const { currentUser } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [newData, setNewData] = useState({
    firstName: currentUser.firstName,
    lastName:currentUser.lastName,
    link: currentUser.link,
    bio: currentUser.bio,
    userPhoto: currentUser.userPhoto,
    email: currentUser.email,
  });
  const { firstName,lastName, link, bio, userPhoto, email } = newData;
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setNewData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clickHandler = () =>{
    console.log(newData)
      dispatch(editUser(newData)) 
      navigate("/profile")
  }
  return (
    <Wrapper>
      
      <Form>
        <ImageWrapper>
          <ProfileImg src={userPhoto}></ProfileImg>
          <EditBtn htmlFor="picUpdate">
            <EditIcon />
          </EditBtn>
          <input type="file" id="picUpdate" style={{ display: "none" }} />
        </ImageWrapper>
        <Label htmlFor="firstName">
          First Name
        </Label>
        <InputField
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => changeHandler(e)}
        ></InputField>
        <Label htmlFor="lastName">
          Last Name
        </Label>
        <InputField
          id="lastName"
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => changeHandler(e)}
        ></InputField>
        <Label htmlFor="email">Email</Label>
        <InputField
          id="email"
          type="email"
          value={email}
          name="email"
          onChange={(e) => changeHandler(e)}
        ></InputField>
        <Label htmlFor="bio">Bio</Label>
        <BioInput
          id="bio"
          type="text"
          name="bio"
          cols="28"
          rows="6"
          value={bio}
          onChange={(e) => changeHandler(e)}
        ></BioInput>
        <Label htmlFor="url">URL</Label>
        <InputField
          id="url"
          type="text"
          name="link"
          value={link}
          onChange={(e) => changeHandler(e)}
        ></InputField>
        <PrimaryButton  primary onClick={clickHandler}>Update Profile</PrimaryButton>
   
      </Form>
      <Form>
      <h1>Log Out</h1>
      <PrimaryButton logout onClick={()=>dispatch(logout())} >LOG OUT</PrimaryButton>
      </Form>
    </Wrapper>
  );
};
