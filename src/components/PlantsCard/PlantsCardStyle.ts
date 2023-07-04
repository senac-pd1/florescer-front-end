import styled from "styled-components";
import { colorsVariables, uiVariables } from "./../../style/VariablesStyle";

export const PlantsGardenCard = styled.div`
  ul {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${colorsVariables.green};
    border-radius: ${uiVariables.borderRadius};
    margin: 20px;
    li {
      display: flex;
      justify-content: space-between;
      img {
        margin: 15px 5px;
        border-radius: ${uiVariables.borderRadius};
        width: 160px;
        height: 135px;
      }
    }
  }
`;

export const BtnRemoveAndNamePlant = styled.li`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  h3 {
    font-size: 16px;
    color: ${colorsVariables.green};
    font-weight: 600;
    margin: 0 15px;
  }
  button {
    margin: 0 15px;
    color: ${colorsVariables.red};
    border: none;
    background-color: transparent;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const BtnInfosAndToggle = styled.li`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  button {
    margin: 0 15px;
    color: ${colorsVariables.green};
    font-size: 12px;
    font-weight: 800;
    border: none;
    background-color: transparent;
  }
  h3 {
    margin: 0 15px;
    font-size: 10px;
  }
`;

export const ContainerToggle = styled.div`
  margin-left: 15px;
`;
