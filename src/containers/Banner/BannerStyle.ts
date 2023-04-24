import styled, { keyframes } from "styled-components";
import { colorsVariables, devices } from "./../../style/VariablesStyle";

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
  margin-top: 60px;
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
  @media ${devices.laptopL} {
    top: 175px;
  }
  @media ${devices.laptop} {
    top: 150px;
  }
  @media ${devices.tablet} {
    top: 125px;
  }
  @media ${devices.tabletM} {
    top: 100px;
  }
`;
export const Title = styled.div`
  h2 {
    animation-name: ${moveRight};
    animation-duration: 0.7s;
    font-weight: lighter;
    font-size: 50px;
    @media ${devices.laptop} {
      font-size: 40px;
      margin-top: 15px;
    }
    @media ${devices.tablet} {
      font-size: 30px;
    }
    @media ${devices.tabletM} {
      font-size: 20px;
      margin-top: 7px;
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
    @media ${devices.laptop} {
      font-size: 40px;
      margin-top: 15px;
    }
    @media ${devices.tablet} {
      font-size: 30px;
      margin-top: 10px;
    }
    @media ${devices.tabletM} {
      font-size: 20px;
      margin-top: 7px;
    }
  }
`;
export const TypeWriterHeader = styled.div`
  font-size: 50px;
  color: ${colorsVariables.darkGreen};
  margin: 40px 0;
  font-weight: regular;
  @media ${devices.laptop} {
    font-size: 40px;
    margin-top: 15px;
  }
  @media ${devices.tablet} {
    font-size: 30px;
  }
  @media ${devices.tabletM} {
    font-size: 20px;
    margin-top: 7px;
  }
`;
