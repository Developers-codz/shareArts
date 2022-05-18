import styled from "styled-components"
import InputEmoji from "react-input-emoji";
import { Button } from "../../pages/feeds/feedsComponent";

const ModalWrapper = styled.div`
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
const InputWrapper = styled.div`
margin:auto 0;

`
const CloseButton = styled.div`
position:fixed;
top:10px;
right:10px;
cursor:pointer;
font-size:1.7rem;
`
export const Modal = ({isModalOpen,setModalOpen}) =>{
    return isModalOpen &&  (
        <ModalWrapper>
            <CloseButton onClick={()=>setModalOpen(false)}>X</CloseButton>
            <InputWrapper>
            <InputEmoji cleanOnEnter placeholder="What Are you thinking about...." />
            </InputWrapper>
            <Button addpostBtn>Post</Button>
        </ModalWrapper>
    )
}