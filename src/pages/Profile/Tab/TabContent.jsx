import styled from "styled-components"

const TabWrapper = styled.div`
    margin-top:2rem;
`
export const TabContent = ({id,activeTab,children}) =>{
    return (
        activeTab === id ? <TabWrapper>
     { children }
   </TabWrapper>
   : null
    )
}