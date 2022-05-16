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
export const SignUp = () => {
  const [userDetail, setUserDetail] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });
  const changeHandler = (e) =>{
    setUserDetail(prevDetail => ({...prevDetail,[e.target.name]:e.target.value}))
  }
  const {fullname,email,username,password} = userDetail;
  return (
    <div className="section">
      <Wrapper>
        <Form>
          <Header>SignUp</Header>
          <FormInput
            type="text"
            placeholder="Enter Your Fullname"
            name="fullname"
            value={fullname}
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
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <FormInput
            type="text"
            placeholder="Re-Enter Your Password"
          ></FormInput>

          <PrimaryButton primary>SignUp</PrimaryButton>
          <Para>
            Already Have an account ? <Link to="/login">Login now</Link>
          </Para>
        </Form>
      </Wrapper>
    </div>
  );
};
