import styled from "styled-components";
import { devices, colorsVariables } from "./../../style/VariablesStyle";
export const BillboardContainer = styled.div`
  padding-top: 10vh;
  padding-bottom: 10vh;
  position: relative;
  background-color: ${colorsVariables.darkGreen};
  @media ${devices.tablet} {
    padding-top: 7vh;
    padding-bottom: 7vh;
  }
`;
