import styled, { keyframes } from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";

const moveUp = keyframes`  
0% {
  opacity: 0;
  transform: translateY(-100px);
}
100% {
  opacity: 1;
  transform: translate(0px);
}`;

export const NavbarContainer = styled.div<{ open: boolean }>`
  nav {
    animation-name: ${moveUp};
    animation-duration: 0.7s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
  }
  ul li a {
    margin-right: 10px;
    padding: 5px;
    color: ${colorsVariables.lightGreen};
    :hover {
      color: ${colorsVariables.mediumGreen};
    }
  }
  @media (max-width: 768px) {
    ul {
      flex-flow: column;
      background-color: ${colorsVariables.lightGreen};
      position: fixed;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      transition: ${({ open }) =>
        open ? "transform 0.3s ease-in-out" : "transform 0"};
    }
    ul li a {
      color: ${colorsVariables.darkGreen};
      :hover {
        color: ${colorsVariables.mediumGreen};
      }
    }
    ul li {
      margin-top: 15px;
      padding: 10px;
      :hover {
        background-color: ${colorsVariables.white};
      }
    }
  }
`;

export const LogoHeader = styled.div`
  padding: 0 10px;
  img {
    margin: 5px 0;
  }
`;
