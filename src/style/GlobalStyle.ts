import { createGlobalStyle } from "styled-components";
import { colorsVariables } from "./VariablesStyle";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${colorsVariables.white};
  color: ${colorsVariables.black};
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  
}

button {
  cursor: pointer;
}

ul,
nav,
a,
li {
  text-decoration: none;
  list-style: none;
}
body::-webkit-scrollbar {
  width: 7px;               
}

body::-webkit-scrollbar-track {
  background: ${colorsVariables.lightGrey};        
}

body::-webkit-scrollbar-thumb {
  background-color: ${colorsVariables.green};   
  border-radius: 20px;       
}`;

export default GlobalStyle;
