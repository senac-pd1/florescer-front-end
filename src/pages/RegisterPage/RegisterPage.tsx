import axios from "axios";


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GlobalStyle,
  LoginPageContainer,
  MainContainer,
  FormContainer,
  Title,
  TitleWrapper,
  Subtitle,
  InputWrapper,
  Label,
  Input,
  Button,
  ForgotPasswordButton,
  RegisterButton,
  ImageContainer,
  LogoImage,
  LogoTopContainer,
  LogoTopImage,
  WarningMessage,
  TitleAndLogoContainer,
  LogoImageContainer
} from './RegisterPageStyle';
import { createGlobalStyle } from 'styled-components';
import logoImage from '../../assets/logoLogin.svg';
import logoTopLogin from"../../assets/LogoTopLogin.svg";
const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [capsLockError, setCapsLockError] = useState(false);
  const [senhasDiferentesError, setSenhasDiferentesError] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    setCapsLockError(false);
    if (confirmarSenha !== '' && e.target.value !== confirmarSenha) {
      setSenhasDiferentesError(true);
    }
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    if (senhasDiferentesError) {
      setSenhasDiferentesError(true);
      return;
    }
    // Verificar se o email foi preenchido corretamente
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    if (senha !== confirmarSenha) {
      setCapsLockError(true);
      return;
    }
  



   // Enviar a requisição para o backend
   axios
   .post('http://localhost:5049/registro', {
     email: email,
     password: senha,
     confirmPassword: senha
   })
   .then(response => {
    navigate('/login');
     console.log('Usuário registrado com sucesso!');

   })
   .catch(error => {
     // Lidar com erros de autenticação, se necessário
     console.log('Erro ao fazer registro:', error);
   });
  };

  const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(e.target.value);
    setSenhasDiferentesError(false);
  
    // Verificar se as senhas são diferentes
    if (senha !== '' && e.target.value !== senha) {
      setSenhasDiferentesError(true);
    }
  };
  const handleAlreadyRegister = () => {
    navigate('/login')
  };
  
  const validateEmail = (email: string) => {
    // Lógica para validar o email
    // Retorne true se estiver válido, false caso contrário
    return email.includes('@');
  };

  const isCapsLockOn = (senha: string) => {
    // Lógica para verificar se o caps lock está ativado
    // Retorne true se estiver ativado, false caso contrário
    return senha.toLowerCase() === senha && senha.toUpperCase() !== senha;
  };

  return (
    <>
    <GlobalStyle />
    <LoginPageContainer>
      <MainContainer>
        <FormContainer>
         <LogoImageContainer>
          <LogoImage src={logoTopLogin} alt="Logo" />
          </LogoImageContainer>
        <TitleWrapper>
          <Title>Crie uma conta</Title>
          </TitleWrapper>
          <InputWrapper>
            <Label htmlFor="email">E-mail</Label>
            <Input type="text" id="email" placeholder='Digite seu e-mail' value={email} onChange={handleEmailChange} />
            {emailError && <WarningMessage>Preencha um e-mail válido</WarningMessage>}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="senha">Senha</Label>
            <Input type="password" id="senha" placeholder='Digite sua senha' value={senha} onChange={handleSenhaChange} />
            {senhasDiferentesError && <WarningMessage>As senhas não coincidem</WarningMessage>}

          </InputWrapper>
          <InputWrapper>
  <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
  <Input type="password" id="confirmarSenha" placeholder='Confirme sua senha' value={confirmarSenha} onChange={handleConfirmarSenhaChange} />
</InputWrapper>
          <Button onClick={handleLogin}>Registrar</Button>
          <RegisterButton onClick={handleAlreadyRegister}>
            Já está registrado? Faça login aqui
          </RegisterButton>
        </FormContainer>
        <ImageContainer>
          {/* Colocar a tag da imagem do logo da marca aqui */}
          <LogoImage src={logoImage} alt="Logo da marca" />
        </ImageContainer>
      </MainContainer>
    </LoginPageContainer>
    </>
  );
};

export default RegisterPage;
