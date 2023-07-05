import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { colorsVariables, devices,uiVariables } from "./../../style/VariablesStyle";


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

  body {
    font-family: 'DM Sans', sans-serif;
  }
`;

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: ${colorsVariables.lightGrey};


export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 500px;
  background-color: ${colorsVariables.white};
  box-shadow: ${colorsVariables.boxShadow};
  border-radius: ${uiVariables.borderRadius};

  @media ${devices.mobileL} {
    width: 100%;
    height: auto;
    flex-direction: column;
    margin: 5px; /* Adicione as margens desejadas */
  }


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
  position: relative;

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export const TitleAndLogoContainer = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 10px;
`;

export const LogoImageContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  margin-left: 20px;
  margin-top: -50px;
  width: 200px;

  @media ${devices.mobileL} {
    position: static;
    margin-top: 0;
    margin-bottom: 20px;
    width: 150px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${colorsVariables.black};
  margin-bottom: 10px;
  text-align: left;
`;

export const TitleWrapper = styled.div`
  text-align: left;
  margin-right: 50px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${colorsVariables.mediumGrey};
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 65%;

`;

export const Label = styled.label`
  font-size: 14px;
  color: ${colorsVariables.black};
  margin-bottom: 5px;
  padding-top: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: ${colorsVariables.white};
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${colorsVariables.black};
  outline: none;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: ${colorsVariables.green};

  }
`;

export const Button = styled.button`
  margin-top: 15px;
  width: 65%;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${colorsVariables.green};
  color: ${colorsVariables.white};

  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colorsVariables.mediumGreen};

  }
`;

export const ForgotPasswordButton = styled.button`
  text-align: right;
  background-color: transparent;
  color: ${colorsVariables.green};
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
  margin-left: auto;
  padding-right: 18%;
  &:hover {
    text-decoration: underline;
  }
`;

export const RegisterButton = styled.button`
  background-color: transparent;
  color: ${colorsVariables.black};
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, ${colorsVariables.lightGreen} 0%, ${colorsVariables.darkGreen} 100%);
  border-top-right-radius: ${uiVariables.borderRadius};
  border-bottom-right-radius: ${uiVariables.borderRadius};

  @media ${devices.mobileL} {
    display:none;
  }
`;

export const LogoImage = styled.img`
  width: 50%;
  height: 50%;

  @media ${devices.mobileL} {
    width: 80%;
    height: 80%;
  }
`;

export const LogoTopContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;

export const LogoTopImage = styled.img`
  width: 100px;
`;

export const WarningMessage = styled.p`
  font-size: 12px;
  color:color: #ff0000;
  margin-top: 5px;
`;

export default GlobalStyle;

