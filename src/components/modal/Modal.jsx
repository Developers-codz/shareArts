import InputEmoji from "react-input-emoji";
import { Button } from "../../pages/feeds/feedsComponent";
import { ModalWrapper,CloseButton,InputWrapper ,InputPost} from "./modalComponent";
import { useDispatch } from "react-redux";
import {useState} from "react"
import { AlertToast } from "../toasts";
import { addNewPost } from "../../Redux/Reducers/postsSlice";
import {getBgColor,getTextColor} from "../../utils/Functions/getColor"
import { useTheme } from "../../context/theme-context";

export const Modal = ({isModalOpen,setModalOpen}) =>{
    const dispatch = useDispatch()
    const {theme} = useTheme();
    const [postData,setPostData] = useState({content:""})

    const clickHandler = () =>{
        if(postData.content === "")
            AlertToast("Please write about what are you thinking")
        else 
            {dispatch(addNewPost(postData.content))
        setPostData("")
        setModalOpen(false)}
    }
    return isModalOpen &&  (
        <ModalWrapper style={{backgroundColor:getBgColor(theme)}}>
            <CloseButton onClick={()=>setModalOpen(false)}>X</CloseButton>
            <InputWrapper>
            <InputPost style={{color:getTextColor(theme)}}  placeholder="What Are you thinking about...." onChange={(e)=>setPostData(prev => ({...prev,content:e.target.value}))} />
            </InputWrapper>
            <Button addpostBtn onClick={clickHandler}>Post</Button>
        </ModalWrapper>
    )
}