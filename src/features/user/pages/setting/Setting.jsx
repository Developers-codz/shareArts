import {
  Wrapper,
  Form,
  Label,
  InputField,
  BioInput,
  EditBtn,
  ImageWrapper,
} from "./settingComponent";
import { ProfileImg } from "../profile/profileComponents";
import { PrimaryButton } from "../../../authentication/pages/AuthFormComponent";
import { EditIcon } from "assets/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "features/user/userSlice";
import { logout } from "features/authentication/authSlice";
import {useDocumentTitle} from "utils/hooks/useDocumentTitle";
import { Navigate,useNavigate } from "react-router-dom";

export const Setting = () => {
  useDocumentTitle("Settings")
  const { currentUser } = useSelector((store) => store.auth);
  const {users,isUpdating} = useSelector(store => store.users)
  const navigate = useNavigate();
  const activeUser = users.find(user => user._id === currentUser._id)
  const [photo,setUserPhoto] = useState(activeUser.userPhoto)
  const [newData, setNewData] = useState({
    firstName: activeUser.firstName,
    lastName:activeUser.lastName,
    link: activeUser.link,
    bio: activeUser.bio,
    userPhoto:activeUser.userPhoto,
    email: activeUser.email,
  });

  
  const { firstName,lastName, link, bio, userPhoto, email } = newData;
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setNewData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clickHandler = () =>{
    if(photo === activeUser.userPhoto){
      dispatch(editUser(newData))
    }
    else{
      dispatch(editUser({...newData,userPhoto:URL.createObjectURL(photo)})) 
    }
  }
  return (
    <Wrapper>
      
      <Form>
        <ImageWrapper>
          <ProfileImg src={photo === userPhoto ? photo : URL.createObjectURL(photo)}></ProfileImg>
          <EditBtn htmlFor="picUpdate">
            <EditIcon />
          </EditBtn>
          <input type="file" onChange={(e)=>setUserPhoto(e.target.files[0])} id="picUpdate" style={{ display: "none" }} />
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
        <PrimaryButton  primary onClick={clickHandler} disabled={isUpdating}>Update Profile</PrimaryButton>
   
      </Form>
      <Form>
      <h1>Log Out</h1>
      <PrimaryButton logout onClick={()=>dispatch(logout())} >LOG OUT</PrimaryButton>
      </Form>
    </Wrapper>
  );
};
