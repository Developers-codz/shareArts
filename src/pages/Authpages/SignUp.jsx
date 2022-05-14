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
export const SignUp = () => {
  return (
    <div className="section">
      <Wrapper>
        <Form>
          <Header>SignUp</Header>
          <FormInput type="text" placeholder="Enter Your Fullname"></FormInput>
          <FormInput type="text" placeholder="Enter Your Email"></FormInput>
          <FormInput type="text" placeholder="Enter a UserName"></FormInput>
          <FormInput type="text" placeholder="Enter Your Password"></FormInput>
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
