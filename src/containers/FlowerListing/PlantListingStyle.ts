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
  width: 50%;
`;

export const FlowerImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-top: -15px;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const FlowerName = styled.span`
  color: white;
  margin-top: 10px;
  text-align: center;
  max-width: 150px;
`;

export const LikeFlower = styled.button`
  background-color: transparent;
  border: none;
  width: 50px;
  margin: 10px;
`;
