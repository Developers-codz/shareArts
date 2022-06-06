import styled from "styled-components"

export const ModalWrapper = styled.div`
position:fixed;
top:50%;
left:50%;
transform: translate(-50%,-50%);
z-index:10;
width:30rem;
height:15rem;
border-radius:20px;
background-color: var(--color-primary);
display:flex;
flex-direction: column;
`
export const InputWrapper = styled.div`
margin:auto 0;
position: relative;
`
export const CloseButton = styled.div`
position:fixed;
top:10px;
right:10px;
cursor:pointer;
font-size:1.7rem;
`

export const InputPost = styled.input`
border-right: none;
border-left:none;
border-top:none;
border-bottom:1px solid black;
font-size:1.4rem;
margin:0.5rem 2rem;
width:80%;
background-color: transparent;
&:hover{
    border-bottom:1px solid var(--color-secondary-dark);
    outline:none;
}
&:focus{
    outline:none;
}
`

export const EmojiBtn = styled.img`
position:fixed;
top:45%;
right:4rem;
width:1.2rem;

`

export const PickerWrapper = styled.div`
position:fixed;
top:58%;
`