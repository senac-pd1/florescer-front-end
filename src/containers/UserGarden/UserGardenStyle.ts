import styled from "styled-components";
import { colorsVariables, uiVariables } from "../../style/VariablesStyle";

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
  z-index: 1;
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
  z-index: 1;
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
  z-index: 2;
  flex-basis: 40%;
  max-width: 800px;
  p {
    text-align: justify;
    font-size: 16px;
    line-height: 24px;
    margin: 20px;
  }
`;

export const ImageCard = styled.div`
  z-index: 2;
  flex-basis: 55%;
  max-width: 800px;
  img {
    width: 100%;
  }
`;

export const PlantsGardenCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 50px 0;
  ul {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${colorsVariables.green};
    border-radius: ${uiVariables.borderRadius};
    margin: 20px;
    li {
      z-index: 2;
      display: flex;
      justify-content: space-between;
      img {
        margin: 15px 5px;
        border-radius: ${uiVariables.borderRadius};
      }
    }
  }
`;

export const BtnRemoveAndNamePlant = styled.li`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  h3 {
    font-size: 16px;
    color: ${colorsVariables.green};
    font-weight: 600;
    margin: 0 15px;
  }
  button {
    margin: 0 15px;
    color: ${colorsVariables.red};
    border: none;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const BtnInfosAndToggle = styled.li`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  button {
    margin: 0 15px;
    color: ${colorsVariables.green};
    font-size: 12px;
    font-weight: 800;
    border: none;
  }
  h3 {
    margin: 0 15px;
    font-size: 10px;
  }
`;
