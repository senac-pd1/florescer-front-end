import styled from "styled-components";
import { colorsVariables, devices } from "../../style/VariablesStyle";

export const Container = styled.div`
  background-color: ${colorsVariables.lightGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  gap: 30px;
`;

export const FlowerRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 800px;

  @media ${devices.tablet} {
    flex-wrap: wrap;
  }
`;

export const FlowerItem = styled.div`
  background: ${colorsVariables.mediumDarkGreen};
  box-sizing: border-box;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const FlowerImg = styled.img`
  width: 180px;
  height: 150px;
  margin-top: 5px;
  border-radius: 10px;
  box-shadow: ${colorsVariables.boxShadow};
  cursor: pointer;
`;

export const FlowerName = styled.span`
  color: white;
  margin-top: 10px;
  text-align: center;
  max-width: 150px;
`;

export const ButtonsListing = styled.div`
  margin: 10px;
`;
