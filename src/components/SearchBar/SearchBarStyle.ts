import styled from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";

export const DivSearchBar = styled.div`
  display: flex;
  margin: 60px;
  flex-direction: row;
  justify-content: center;
`;

export const InputSearch = styled.input`
  border: 1px solid #001801;
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
