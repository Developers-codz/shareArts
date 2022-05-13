import styled,{createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
html{
  --color-primary:#f1e9e7;
  --color-secondary:#d6806a;
  --color-secondary-dark:#ca2535;
  --color-light:#fff;
  --color-dark:black;
  --primary-cta:#0000ff;
  
}
.dark{
  color:var(--color-light);
  background-color: var(--color-dark);
}
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
}
.App{
  display:grid;
  grid-gap: 1rem;
  grid-template-areas: "nav nav"
  "aside main";
}
.aside{
  grid-area: aside;
  position:fixed;
  left:0;
  top:13vh;
}
.header-wrapper{
  grid-area: nav;
  position: fixed;
  top:0;
}
.section{
  grid-area: main;
  display:flex;
  justify-content: space-between;
  padding-top:13vh; 
}
`

export default GlobalStyle;