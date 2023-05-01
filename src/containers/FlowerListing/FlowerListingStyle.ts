import styled from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";

export const SectionListPlant = styled.section`
  display: flex;
  background-color: ${colorsVariables.lightGreen};
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FlowerRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
`;

export const FlowerItem = styled.div`
  background: rgba(0, 24, 1, 0.66);
  box-sizing: border-box;
  width: 185px;
  height: 205px;
  margin: 20px;
  left: 118px;
  top: 1729px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FlowerImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-top: -15px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
