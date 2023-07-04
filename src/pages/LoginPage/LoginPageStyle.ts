import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

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
  background-color: #f5f5f5;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:1000px;
  height: 500px;
  background-color: #F2F2F2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
  position:relative;
`;
export const TitleAndLogoContainer = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 20px;
`;
export const LogoImageContainer= styled.image`
  position:absolute;
  left:0;
  top:0;
  margin-left:20px;
  margin-top:-50px;
  width:200px;
`
export const Title = styled.h2`
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
  text-align: left;
`;
export const TitleWrapper = styled.div`
  text-align: left;
  margin-right: 50px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width:65%;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333333;
  margin-bottom: 5px;
    padding-top:10px;
  font-weight:bold;
`;

export const Input = styled.input`
  background-color:#F2F2F2;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #1e1e1e;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #33cc33;
  }
`;

export const Button = styled.button`
  margin-top:15px;
  width:65%;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #1B5924;
  color: #ffffff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #29a329;
  }
`;

export const ForgotPasswordButton = styled.button`
  text-align: right;
  background-color: transparent;
  color: #1B5924;
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
  color: #333333;
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
  background: rgb(186,217,194);
  background: linear-gradient(120deg, rgba(186,217,194,1) 0%, rgba(0,24,1,1) 100%);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const LogoImage = styled.img`
width: 50%;
height: 50%;
`;
export const LogoTopContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;

export const LogoTopImage = styled.img`
  width: 100px; /* Ajuste o tamanho conforme necessário */
`;

export const WarningMessage = styled.p`
  font-size: 12px;
  color: #ff0000;
  margin-top: 5px;
`;
export default GlobalStyle;