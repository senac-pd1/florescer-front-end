import styled from "styled-components";
import { colorsVariables, uiVariables } from "./../../style/VariablesStyle";

export const ImageDetail = styled.img`
  width: 300px;
  border-radius: 16px;
`;

export const ContainerDetailProfile = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  border: 2px solid ${colorsVariables.green};
  padding: 40px;
  border-radius: 16px;
`;

export const TextDetail = styled.div`
  width: 300px;
  p {
    text-align: justify;
    margin: 20px;
    padding-right: 20px;
  }
  h4 {
    margin: 0 20px;
    color: ${colorsVariables.green};
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ContainerInspiration = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colorsVariables.lightGreen};
  border-radius: 16px;
  h4 {
    padding: 10px;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 16px;
    color: ${colorsVariables.darkGreen};
  }
`;
