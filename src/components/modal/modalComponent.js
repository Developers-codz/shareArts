import styled from "styled-components"

export const ModalWrapper = styled.div`
position:fixed;
top:50%;
left:50%;
transform: translate(-50%,-50%);
z-index:10;
width:30rem;
min-height:18rem;
border-radius:20px;
background-color: var(--color-primary);
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 
  .postImg {
    width:8rem;
    height:8rem; 
    border-radius: 20px;
 }
`
export const InputWrapper = styled.div`
position: relative;
@media only screen and (max-width:768px){
    margin:auto 1rem;
}
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
margin:0.5rem 1rem;
width:90%;
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
width:1.2rem;
bottom:25px;
left:80px;

`

export const PickerWrapper = styled.div`
position:fixed;
top:17rem;
`

export const ImageToPost = styled.img`
    width:10rem;
    height:10rem;
`

export const InputImage = styled.input`
display:none;
`