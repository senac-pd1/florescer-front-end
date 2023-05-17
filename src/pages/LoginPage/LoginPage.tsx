import React, { useState } from 'react';
import {
  LoginPageContainer,
  MainContainer,
  FormContainer,
  Title,
  Subtitle,
  InputWrapper,
  Label,
  Input,
  Button,
  ForgotPasswordButton,
  RegisterButton,
  ImageContainer,
  LogoImage,
  WarningMessage
} from './LoginPageStyle';
import logoImage from '../../assets/logoLogin.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [capsLockError, setCapsLockError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    setCapsLockError(false);
  };

  const handleLogin = () => {
    // Verificar se o email foi preenchido corretamente
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }



    // Lógica para fazer login com as credenciais fornecidas
    console.log('Email:', email);
    console.log('Senha:', senha);
  };
  const handleForgotPassword = () => {
    // Lógica para lidar com "Esqueci minha senha"
    console.log('Esqueci minha senha');
  };
  
  const handleRegister = () => {
    // Lógica para lidar com "Crie sua conta aqui"
    console.log('Crie sua conta aqui');
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
    <LoginPageContainer>
      <MainContainer>
        <FormContainer>
          <Title>Bem-Vindo</Title>
          <Subtitle>Por favor, entre com seu e-mail e senha</Subtitle>
          <InputWrapper>
            <Label htmlFor="email">E-mail:</Label>
            <Input type="text" id="email" value={email} onChange={handleEmailChange} />
            {emailError && <WarningMessage>Preencha um e-mail válido</WarningMessage>}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="senha">Senha:</Label>
            <Input type="password" id="senha" value={senha} onChange={handleSenhaChange} />
            {capsLockError && <WarningMessage>Caps Lock está ativado</WarningMessage>}
          </InputWrapper>
          <Button onClick={handleLogin}>Login</Button>
          <ForgotPasswordButton onClick={handleForgotPassword}>
            Esqueci minha senha
          </ForgotPasswordButton>
          <RegisterButton onClick={handleRegister}>
            Ainda não está registrado? Crie sua conta aqui
          </RegisterButton>
        </FormContainer>
        <ImageContainer>
          {/* Colocar a tag da imagem do logo da marca aqui */}
          <LogoImage src={logoImage} alt="Logo da marca" />
        </ImageContainer>
      </MainContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
