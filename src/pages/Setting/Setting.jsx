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
import { EditIcon } from "../../Assets/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../Redux/Reducers/userSlice";

export const Setting = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const {users} = useSelector((store) => store.users);

  const user = users.find(user => user._id === currentUser._id)
  
  const [newData, setNewData] = useState({
    firstName: user.firstName,
    lastName:user.lastName,
    link: user.link,
    bio: user.bio,
    userPhoto: user.userPhoto,
    email: user.email,
  });
  const { firstName,lastName, link, bio, userPhoto, email } = newData;
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setNewData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clickHandler = () =>{
      dispatch(editUser(newData)) 
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
        <PrimaryButton onClick={clickHandler}>Update Profile</PrimaryButton>
      </Form>
    </Wrapper>
  );
};
