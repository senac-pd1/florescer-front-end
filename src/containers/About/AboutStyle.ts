import styled from "styled-components";
import { colorsVariables, devices } from "./../../style/VariablesStyle";

export const SectionAbout = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colorsVariables.darkGreen};
  margin-top: -5px;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageAbout = styled.figure`
  margin: 60px 20px;
  img {
    width: 350px;
    @media ${devices.tablet} {
      max-width: 300px;
    }
    @media ${devices.tabletM} {
      max-width: 200px;
    }
  }
`;

export const TextAbout = styled.div`
  max-width: 350px;
  p {
    color: ${colorsVariables.white};
    text-align: justify;
    font-size: 20px;
    font-weight: lighter;
    line-height: 1.5;
    letter-spacing: 1px;
    margin: 0 15px;
  }
`;
