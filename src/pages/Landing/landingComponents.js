import styled from "styled-components"
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
@media only screen and (max-width:560px){
    flex-direction:column;
}
`
export const Section = styled.div`
margin-left:${props => props.logo ? "4rem" : "5rem"}
`

export const Header = styled.h1`
font-size: 3rem;
margin-bottom:.5rem;
`
export const Para = styled(Header)`
font-size:1.4rem;
margin-bottom:2rem;
`
export const Button = styled(Link)`
    background-color:var(--color-primary);
    padding:.7rem 1.7rem;
    border-radius:10px;
    border:none;
    font-size:1.2rem;
    font-weight:600;
    cursor:pointer;
    text-decoration:none;
    color:var(--color-dark);
&:hover{
    transform:scale(1.02,1.02);
}
`

export const HeroImg = styled.img`
width:36rem;
margin-left:5rem
`