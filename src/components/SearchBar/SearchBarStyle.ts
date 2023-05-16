import styled from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";

export const DivSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  text-align: center;
`;
export const InputSearch = styled.input`
  border: ${colorsVariables.borderColor};
  background-color: transparent;
  border-radius: 5px;
  padding: 3px;
  width: 230px;
`;

export const ButtonSearch = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  margin-left: -19px;
`;

export const MensasageError = styled.p`
  margin: 20px;
`;
