
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body{
    background-color: #323334;
    color: white;
    min-height: 100vh;
    font-family: "Inter", sans-serif;
  }

`;
export default GlobalStyle