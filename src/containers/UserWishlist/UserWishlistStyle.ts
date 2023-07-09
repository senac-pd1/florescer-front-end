import styled from "styled-components";
import {
  colorsVariables,
  uiVariables,
  devices,
} from "../../style/VariablesStyle";

export const WishlistContainer = styled.section`
  background-color: ${colorsVariables.whiteBackground};
  width: 85%;
  margin: 20px auto;
  border-radius: 10px;
  position: relative;
`;

export const TitleWishlist = styled.h2`
  padding: 25px;
  font-size: 24px;
  font-weight: 600;
  color: ${colorsVariables.green};
  border-bottom: 2px solid ${colorsVariables.mediumGreenTransparent};
  margin-bottom: 20px;
`;

export const ContainerInfoWishlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 90px;
`;

export const TextCardWishlist = styled.div`
  color: ${colorsVariables.darkGreen};
  max-width: 480px;
  @media ${devices.laptopL} {
    max-width: 400px;
  }
  @media ${devices.laptop} {
    margin: 0 15px;
  }
  @media ${devices.laptop} {
    width: 100%;
  }
  p {
    text-align: justify;
    font-size: 16px;
    line-height: 24px;
    margin: 20px;
  }
`;

export const ImageCardWishlist = styled.div`
  max-width: 480px;
  @media ${devices.laptopL} {
    max-width: 400px;
    margin: 0 15px;
  }
  @media ${devices.laptop} {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
export const PlantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0;
`;
