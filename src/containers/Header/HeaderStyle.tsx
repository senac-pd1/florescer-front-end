import styled from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";
export const HeaderContainer = styled.div<{ isSolidColor: boolean }>`
  position: fixed;
  height: 90px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: background-color 0.5s ease-in-out;
  overflow: hidden;
  background-color: ${({ isSolidColor }) =>
    isSolidColor
      ? `${colorsVariables.darkGreen}`
      : `${colorsVariables.darkGreenTransparent}`};
`;
