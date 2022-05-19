import styled from "styled-components"

export const ModalWrapper = styled.div`
position:fixed;
top:50%;
left:50%;
transform: translate(-50%,-50%);
z-index:5;
width:30rem;
height:15rem;
border-radius:20px;
background-color: var(--color-primary);
display:flex;
flex-direction: column;
`
export const InputWrapper = styled.div`
margin:auto 0;

`
export const CloseButton = styled.div`
position:fixed;
top:10px;
right:10px;
cursor:pointer;
font-size:1.7rem;
`