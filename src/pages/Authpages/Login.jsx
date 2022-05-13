import {Wrapper,Form,FormInput,Header} from "./AuthFormComponent"
export const Login = () =>{
    return (
    <Wrapper>
        <Form>
            <Header>Login</Header>
        <FormInput type="text" placeholder=""></FormInput>
        <FormInput type="text" placeholder=""></FormInput>
        <FormInput type="text" placeholder=""></FormInput>
        </Form>
    </Wrapper>
    )
}