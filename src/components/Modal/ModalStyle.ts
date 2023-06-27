import styled from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";

export const ModalContainer = styled.div`
  position: fixed;
  width: 60%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colorsVariables.white};
  border-radius: 8px;
  padding: 5%;
  box-shadow: ${colorsVariables.boxShadow};
  z-index: 9999;

  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    padding: 5%;
    overflow-y: auto;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 70%;
    height: 70%;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 50%;
    height: 50%;
  }

  @media (min-width: 1440px) {
    width: 40%;
    height: 40%;
  }
`;

export const ModalTitle = styled.h3`
  color: ${colorsVariables.darkGreen};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
  max-width: 90%; 

  @media (min-width: 768px) {
    margin-top: 50px; 
  }
  
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-top: -40px;
  }

  @media (min-width: 1440px) {
    margin-top: -40px; 
  }
}
`;

export const TextModal = styled.p`
  color: ${colorsVariables.darkGreen};
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 10px;
  margin-top: -10px;
`;

export const ModalImg = styled.img`
  width: 40%;
  max-height: 70%;
  border-radius: 10px;
  float: right;
  margin-right: -50px;
  margin-bottom: 20px;
  box-shadow: ${colorsVariables.boxShadow};

  @media (max-width: 768px) {
    width: 70%;
    float: none;
    margin-left: 50px;
  }

  @media (min-width: 1440px) {
    margin-left: 0px;
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const TabelaModal = styled.ul`
  text-align: left;
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  margin-top: -50px;
  margin-left: 400px;

  @media (max-width: 768px) {
    margin-top: 3px;
    margin-left: 0;
    padding: 10px;
  }
`;
