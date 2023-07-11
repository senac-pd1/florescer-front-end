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
  z-index: 999;
  nav {
    animation-name: ${moveUp};
    animation-duration: 0.7s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      align-items: flex-start;
    }
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
      width: 200px;
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
      padding-left: 25px;
    }
    ul li:first-child {
      margin-top: 55px;
    }
  }
`;

export const LogoHeader = styled.div`
  padding: 0 10px;
  img {
    margin: 5px 0;
  }
`;

export const LogoutButton = styled.div`
  background-color: ${colorsVariables.lightGreen};
  padding: 5px 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  margin-right: 20px;
  color: ${colorsVariables.darkGreen};
  &:hover {
    background-color: ${colorsVariables.darkGreen};
    border: 2px solid ${colorsVariables.lightGreen};
    color: ${colorsVariables.lightGreen};
  }
  @media (max-width: 768px) {
    background-color: ${colorsVariables.darkGreen};
    padding: 5px 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    margin-right: 20px;
    color: ${colorsVariables.lightGreen};
    &:hover {
      background-color: ${colorsVariables.lightGreen};
      border: 2px solid ${colorsVariables.darkGreen};
      color: ${colorsVariables.darkGreen};
    }
  }
`;
