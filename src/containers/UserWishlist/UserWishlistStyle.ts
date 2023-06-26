import styled from "styled-components";
import { colorsVariables, uiVariables } from "../../style/VariablesStyle";

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

export const ImageCardWishlist = styled.div`
  z-index: 2;
  flex-basis: 55%;
  max-width: 600px;
  img {
    width: 100%;
  }
`;
