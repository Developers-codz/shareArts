import {Link} from "react-router-dom"
import {Wrapper,Form,FormInput,Header,Button,PrimaryButton,Para} from "./AuthFormComponent"
export const Login = () =>{
    return (
    <Wrapper>
        <Form>
            <Header>Login</Header>
        <FormInput type="text" placeholder="Username"></FormInput>
        <FormInput type="text" placeholder="Password"></FormInput>
        <Header small>OR</Header>
        <Button>Login with Test Credential</Button>
        <PrimaryButton primary>Login</PrimaryButton>
        <Para>Don't Have an account ? <Link to="/signup">Create now</Link></Para>
        </Form>
    </Wrapper>
    )
}