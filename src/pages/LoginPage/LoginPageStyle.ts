import styled from 'styled-components';

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
  width: 800px;
  height: 400px;
  background-color: #ffffff;
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
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
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
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333333;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #33cc33;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #33cc33;
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
  background-color: transparent;
  color: #333333;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;

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
  background-color: #007F3D;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const LogoImage = styled.img`
  /* Estilos da imagem do logo */
`;

export const WarningMessage = styled.p`
  font-size: 12px;
  color: #ff0000;
  margin-top: 5px;
`;
