import styled from "styled-components";
import { colorsVariables } from "../../style/VariablesStyle";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
`;

export const FlowerRow = styled.div`
  display: flex;
  margin-bottom: 20px;

  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 350px) {
    flex-wrap: wrap;
    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

export const FlowerItem = styled.div`
  background: ${colorsVariables.mediumDarkGreen};
  box-shadow: ${colorsVariables.boxShadow};
  display: inline-block;
  box-sizing: border-box;
  height: 205px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 350px) {
    width: 100%;
  }
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
`;

export const LikeFlower = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 15px;
  margin-left: 140px;
  width: 50px;
  heigth: 50px;
`;
