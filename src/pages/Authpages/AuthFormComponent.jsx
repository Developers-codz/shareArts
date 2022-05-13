import styled from "styled-components"

export const Wrapper = styled.div`
height:50vh;
width:50vw;
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
border:1PX solid var(--color-dark);
border-radius:10px;
`
export const Form = styled(Wrapper)`
display:flex;
justify-content: center;
flex-direction:column;
padding:1rem 3rem;

`
export const Header = styled.h1`
`
export const FormInput = styled.input`
margin:1rem 2rem;
padding:1rem 2rem;
border:1px solid black;
`
