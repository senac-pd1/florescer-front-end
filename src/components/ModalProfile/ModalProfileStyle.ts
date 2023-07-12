import styled from "styled-components";
import { colorsVariables, uiVariables } from "../../style/VariablesStyle";
export const ModalBox = styled.div`
  background: ${colorsVariables.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px #333;
  max-width: 900px;
  position: fixed;
  left: 50%;
  padding: 24px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  transition-duration: 5s;
  transition-delay: 2s;
  margin: 0 20px;
`;

export const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`;
