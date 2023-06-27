import styled from "styled-components";
import { colorsVariables, devices } from "./../../style/VariablesStyle";

export const LikeFlower = styled.button`
  /* Estilos do botão de like */
  position: relative; /* Adiciona posição relativa para alinhar com o tooltip */
  background: none;
  border: none;
  font-size: larger;
  cursor: pointer;
  margin: 3px;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  left: calc(
    100% + 8px
  ); /* Posiciona o tooltip ao lado direito do botão de like */
  transform: translateY(-50%);
  background-color: ${colorsVariables.black};
  color: ${colorsVariables.white};
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap; /* Impede quebra de linha no tooltip */
`;
