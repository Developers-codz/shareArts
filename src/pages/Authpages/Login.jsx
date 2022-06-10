import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Form,
  FormInput,
  Header,
  Button,
  PrimaryButton,
  Para,
} from "./AuthFormComponent";
import { useDispatch } from "react-redux";
import { login } from "Redux/Reducers/authSlice";
import {useDocumentTitle} from "utils/hooks/useDocumentTitle";
export const Login = () => {
  useDocumentTitle("Login")
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({ username: "", password: "" });
  const changeHandler = (e) => {
    setUserDetail((prevDetail) => ({
      ...prevDetail,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = (e) => {
    dispatch(login(e, userDetail));
    setUserDetail((prev) => ({ ...prev, username: "", password: "" }));
  };
  const { username, password } = userDetail;
  return (
    <div className="section">
      <Wrapper>
        <Form>
          <Header>Login</Header>
          <FormInput
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <FormInput
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <Header small>OR</Header>
          <Button value="credentialLogin" onClick={(e) => clickHandler(e)}>
            Login with Test Credential
          </Button>
          <PrimaryButton primary onClick={(e) => clickHandler(e)}>
            Login
          </PrimaryButton>
          <Para>
            Don't Have an account ? <Link to="/signup">Create now</Link>
          </Para>
        </Form>
      </Wrapper>
    </div>
  );
};
