import styled, { keyframes } from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";

const moveRight = keyframes`  
0% {
  opacity: 0;
  transform: translateX(100px);
}
100% {
  opacity: 1;
  transform: translate(0px);
}`;

const moveLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(-150px);
}
100% {
  opacity: 1;
  transform: translate(0px);
}`;

export const BannerImage = styled.div`
  img {
    width: 100%;
  }
`;
export const BannerText = styled.div`
  position: absolute;
  color: ${colorsVariables.white};
  padding-left: 90px;
  top: 250px;
  line-height: 30px;
  height: 30px;
  @media (max-width: 885px) {
    top: 150px;
  }
  @media (max-width: 669px) {
    top: 125px;
  }
  @media (max-width: 477px) {
    top: 100px;
  }
`;
export const Title = styled.div`
  h2 {
    animation-name: ${moveRight};
    animation-duration: 0.7s;
    font-weight: lighter;
    font-size: 50px;
    @media (max-width: 669px) {
      font-size: 30px;
    }
  }
`;
export const TitleTwo = styled.div`
  h2 {
    animation-name: ${moveLeft};
    animation-duration: 1s;
    font-weight: lighter;
    font-size: 50px;
    margin-top: 30px;
    @media (max-width: 669px) {
      font-size: 30px;
      margin-top: 10px;
    }
  }
`;
export const TypeWriterHeader = styled.div`
  font-size: 50px;
  color: ${colorsVariables.darkGreen};
  margin: 40px 0;
  font-weight: regular;
  @media (max-width: 669px) {
    font-size: 35px;
    margin: 10px;
  }
`;
