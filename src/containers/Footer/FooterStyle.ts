import styled from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";

export const ContainerFooter = styled.footer`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  border-top: 10px solid ${colorsVariables.lightGreen};
  background: rgb(48, 140, 80);
  background: linear-gradient(
    309deg,
    rgba(48, 140, 80, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 40px;
`;

export const ContainerImage = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  img {
    width: 300px;
  }
  p {
    margin-top: 40px;
    width: 400px;
    font-size: 16px;
    font-weight: 200;
    color: ${colorsVariables.white};
    text-align: justify;
    margin-right: 15px;
  }
`;

export const ContainerText = styled.div`
  margin: 20px;
  border: 2px solid ${colorsVariables.lightGreen};
  border-radius: 10px;
  padding: 20px;
  h3 {
    font-size: 22px;
    color: ${colorsVariables.lightGreen};
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
    color: ${colorsVariables.lightGreen};
    font-weight: 500;
  }
`;
