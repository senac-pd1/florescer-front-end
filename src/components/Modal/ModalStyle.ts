import styled from "styled-components";
import { colorsVariables, devices } from "./../../style/VariablesStyle";

export const ModalContainer = styled.div`
  position: fixed;
  width: 60%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colorsVariables.lightGreen};
  border-radius: 8px;
  padding: 10%;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const ModalTitle = styled.h3`
  color: ${colorsVariables.darkGreen};
  font-size: 5vh;
  margin-top: -100px;
  text-align: center;
`;

export const TextModal = styled.p`
  font-size: 25px;
  text-align: center;
`;

export const ModalImg = styled.img`
  width: 35%;
  height: 100%;
  border-radius: 10px;
  margin-left: 85%;
  margin-top: 30px;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const LikeFlowerModal = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 98%;
  margin-top: -50px;
  width: 70px;
  font-size: 30px;
`;

export const FlowerItemModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colorsVariables.darkGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${colorsVariables.lightGreen};
`;

export const TabelaModal = styled.ul`
  text-align: center;
  margin-top: -22%;
  line-height: 1.5;
  margin-right: 160px;
  word-wrap: break-word;
  font-size: 15px;
`;
