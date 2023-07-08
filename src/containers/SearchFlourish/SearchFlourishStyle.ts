import styled from "styled-components";
import { colorsVariables, uiVariables } from "../../style/VariablesStyle";

export const TitleMap = styled.h2`
  padding: 25px;
  font-size: 24px;
  font-weight: 600;
  color: ${colorsVariables.green};
  border-bottom: 2px solid ${colorsVariables.mediumGreenTransparent};
  margin-bottom: 20px;
`;

export const ContainerSearchFlourish = styled.section`
  height: 600px;
  background-color: ${colorsVariables.whiteBackground};
  width: 85%;
  margin: 20px auto;
  border-radius: 10px;
  position: relative;
`;
export const SearchContainer = styled.div`
  margin: 40px auto;
  width: 400px;
`;

export const InputSearch = styled.input`
  width: 260px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${colorsVariables.green};
  background-color: transparent;
  margin: 0 15px;
  font-size: 16px;
  color: ${colorsVariables.black}
  font-weight: 700;
  padding-left: 10px;
  &:focus {
    border: 3px solid ${colorsVariables.green};
    color: ${colorsVariables.green};
    font-weight: 700;
  }
  &:placeholder{
    font-size: 16px;
    font-weight: 700;
    color: ${colorsVariables.green}
  }
`;

export const ButtonSubmit = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background: ${colorsVariables.green};
  border: none;
  color: ${colorsVariables.white};
  font-size: 16px;
  font-weight: 700;
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0px 0px 10px 10px;
`;
