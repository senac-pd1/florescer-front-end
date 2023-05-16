import styled from "styled-components";
import { colorsVariables, devices } from "./../../style/VariablesStyle";

export const SectionListPlant = styled.section`
  display: grid;
  gridtemplatecolumns: "repeat(auto-fit, minmax(200px, 1fr))";
  background-color: ${colorsVariables.lightGreen};
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;

  @media (${devices.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  justify-content: center;
  grid-gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  overflow-x: hidden;

  @media (${devices.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

export const FlowerRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  max-width: 800px;
`;

export const FlowerItem = styled.div`
  background: ${colorsVariables.mediumDarkGreen};
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

  box-shadow: ${colorsVariables.boxShadow};
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

export const ModalContainer = styled.div`
  position: fixed;
  width: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colorsVariables.lightGreen};
  border-radius: 8px;
  padding: 20px;
  box-shadow: ${colorsVariables.boxShadow};
  max-width: 90%;
  max-height: 90%;
`;
export const TextModal = styled.p`
  font-size: 20px;
`;
export const ModalImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: -15px;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const LikeFlowerModal = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 15px;
  margin-left: 10px;
  width: 50px;
  height: 50px;
  font-size: 20px;
`;

export const FlowerItemModal = styled.div`
  background: ${colorsVariables.mediumDarkGreen};
  box-sizing: border-box;
  width: 185px;
  height: 205px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const ModalTitle = styled.h3`
  color: ${colorsVariables.darkGreen};
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
`;

export const CloseModalButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 2px;
  margin-left: auto;
  background-color: ${colorsVariables.lightGreen};
`;
