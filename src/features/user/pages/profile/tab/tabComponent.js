import styled from "styled-components";

export const Wrapper = styled.div`
margin-left:17rem;
margin-top: 1rem;
@media only screen and (max-width:768px){
    margin:3rem;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}

`
export const TabHead = styled.div`
display:flex;
justify-content: space-around;
width:30rem;

`
export const EachTab = styled.div`
font-size:1.3rem;
font-weight:500;
cursor:pointer;
`

export const Outlet = styled.div``