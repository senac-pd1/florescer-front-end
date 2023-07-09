import styled from "styled-components";
import { colorsVariables, uiVariables } from "./../../style/VariablesStyle";

export const ContainerNotFound = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  background-color: ${colorsVariables.mediumGreenTransparent};
  border-radius: 20px;
  padding: 20px;
  width: 350px;
  flex-direction: column;
  img {
    width: 250px;
  }
`;

export const MessageNotFound = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${colorsVariables.darkGreen};
  }
  p {
    margin: 20px 0;
    text-align: justify;
    font-size: 14px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: 3px solid ${colorsVariables.darkGreen};
  padding: 5px 8px;
  background: transparent;
  cursor: pointer;
  svg {
    color: ${colorsVariables.darkGreen};
  }
  a {
    color: ${colorsVariables.darkGreen};
    font-size: 14px;
  }
`;
