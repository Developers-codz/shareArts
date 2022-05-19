import InputEmoji from "react-input-emoji";
import { Button } from "../../pages/feeds/feedsComponent";
import { ModalWrapper,CloseButton,InputWrapper } from "./modalComponent";
import { useDispatch } from "react-redux";
import {useState} from "react"
import { AlertToast } from "../toasts";
import { addNewPost } from "../../Redux/Reducers/postsSlice";

export const Modal = ({isModalOpen,setModalOpen}) =>{
    const dispatch = useDispatch()
    const [postData,setPostData] = useState({content:""})

    const clickHandler = () =>{
        // console.log(postData)
        if(postData === "")
            AlertToast("Write something to post")
        else 
            {dispatch(addNewPost(postData.content))
        setPostData("")
        setModalOpen(false)}
    }
    return isModalOpen &&  (
        <ModalWrapper>
            <CloseButton onClick={()=>setModalOpen(false)}>X</CloseButton>
            <InputWrapper>
            <input  placeholder="What Are you thinking about...." onChange={(e)=>setPostData(prev => ({...prev,content:e.target.value}))} />
            </InputWrapper>
            <Button addpostBtn onClick={clickHandler}>Post</Button>
        </ModalWrapper>
    )
}