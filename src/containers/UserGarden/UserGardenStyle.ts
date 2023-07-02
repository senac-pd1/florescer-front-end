import styled from "styled-components";
import {
  colorsVariables,
  uiVariables,
  devices,
} from "../../style/VariablesStyle";

export const GardenContainer = styled.section`
  background-color: ${colorsVariables.whiteBackground};
  width: 85%;
  margin: 20px auto;
  border-radius: 10px;
  position: relative;
`;

export const TitleGarden = styled.h2`
  padding: 25px;
  font-size: 24px;
  font-weight: 600;
  color: ${colorsVariables.green};
  border-bottom: 2px solid ${colorsVariables.mediumGreenTransparent};
  margin-bottom: 20px;
`;

export const CircleShapeLeft = styled.span`
  position: absolute;
  top: 300px;
  left: 0;
  width: 550px;
  height: 550px;
  shape-outside: circle(50% at 30%);
  clip-path: circle(50% at 0%);
  background: ${colorsVariables.mediumGreenTransparent};
  shape-outside: inset(20px 5px 30px 10px);
  opacity: 0.4;
`;

export const CircleShapeRight = styled.span`
  position: absolute;
  top: 80px;
  right: 0;
  transform: rotate(180deg);
  width: 550px;
  height: 550px;
  shape-outside: circle(50% at 30%);
  clip-path: circle(50% at 0%);
  background: ${colorsVariables.mediumGreenTransparent};
  shape-outside: inset(20px 5px 30px 10px);
  opacity: 0.6;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 90px;
`;

export const TextCard = styled.div`
  color: ${colorsVariables.darkGreen};
  flex-basis: 40%;
  max-width: 800px;
  @media ${devices.laptopL} {
    width: 100%;
    margin: 0 15px;
  }
  p {
    text-align: justify;
    font-size: 16px;
    line-height: 24px;
    margin: 20px;
  }
`;

export const ImageCard = styled.div`
  flex-basis: 55%;
  max-width: 800px;
  @media ${devices.laptopL} {
    width: 100%;
    margin: 0 15px;
  }
  img {
    width: 100%;
  }
`;

export const PlantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 50px 0;
`;
