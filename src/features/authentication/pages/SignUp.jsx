import { Link } from "react-router-dom";
import {
  Wrapper,
  Form,
  FormInput,
  Header,
  PrimaryButton,
  Para,
} from "./AuthFormComponent";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { signup } from "features/authentication/authSlice";
import {AlertToast} from "components/toasts"
import {useDocumentTitle} from "utils/hooks/useDocumentTitle";

export const SignUp = () => {
  useDocumentTitle("Signup")
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName:"",
    email: "",
    username: "",
    password: "",
  });
  const [passMatch,setPassMatch] = useState("")
  const changeHandler = (e) =>{
    setUserDetail(prevDetail => ({...prevDetail,[e.target.name]:e.target.value}))
  }
  const dispatch = useDispatch();

  const clickHandler = () => {
    const {firstName,lastName,email,username,password} = userDetail;
    if(firstName && lastName && email && username && password !== "" && password === passMatch ){
      dispatch(signup(userDetail))
      setUserDetail(prev => ({...prev,firstName:"",lastName:"",email:"",username:"",password:""}))
      setPassMatch("")
    }
    else if(password !== passMatch){
      AlertToast("Password do not match");
    }
    else {
      AlertToast("Please Enter Alll the field");
    }
  }

  const {firstName,lastName,email,username,password} = userDetail;
  return (
    <div className="section">
      <Wrapper>
        <Form>
          <Header>SignUp</Header>
          <FormInput
            type="text"
            placeholder="Enter Your first name"
            name="firstName"
            value={firstName}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <FormInput
            type="text"
            placeholder="Enter Your last name"
            name="lastName"
            value={lastName}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <FormInput
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <FormInput
            type="text"
            placeholder="Enter a UserName"
            name="username"
            value={username}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <FormInput
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <FormInput
            type="password"
            placeholder="Re-Enter Your Password"
            value={passMatch}
            onChange={(e) => setPassMatch(e.target.value)}
          ></FormInput>

          <PrimaryButton primary onClick={clickHandler}>SignUp</PrimaryButton>
          <Para>
            Already Have an account ? <Link to="/login">Login now</Link>
          </Para>
        </Form>
      </Wrapper>
    </div>
  );
};
