import axios from "axios";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
  LogoImageContainer,
} from "./LoginPageStyle";
import { createGlobalStyle } from "styled-components";
import logoImage from "../../assets/logoLogin.svg";
import logoTopLogin from "../../assets/LogoTopLogin.svg";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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
  const navigate = useNavigate();
  const handleLogin = () => {
    // Verificar se o email foi preenchido corretamente
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    // Enviar a requisição para o backend
    axios
      .post("https://florescerapi.azurewebsites.net/login", {
        email: email,
        password: senha,
      })
      .then((response) => {
        navigate("/home");
        console.log("Usuário logado com sucesso!");
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("id", response.data.userToken.id);
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("id");
        console.log("Token: ", token);
        console.log("ID: ", id);
      })
      .catch((error) => {
        // Lidar com erros de autenticação, se necessário
        console.log("Erro ao fazer login:", error);
      });
  };
  const handleForgotPassword = () => {
    // Lógica para lidar com "Esqueci minha senha"
    console.log("Esqueci minha senha");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const validateEmail = (email: string) => {
    // Lógica para validar o email
    // Retorne true se estiver válido, false caso contrário
    return email.includes("@");
  };

  const isCapsLockOn = (senha: string) => {
    // Lógica para verificar se o caps lock está ativado
    // Retorne true se estiver ativado, false caso contrário
    return senha.toLowerCase() === senha && senha.toUpperCase() !== senha;
  };

  return (
    <>
      <LoginPageContainer>
        <MainContainer>
          <FormContainer>
            <LogoImageContainer>
              <LogoImage src={logoTopLogin} alt="Logo" />
            </LogoImageContainer>
            <TitleWrapper>
              <Title>Bem-Vindo</Title>
              <Subtitle>Por favor, entre com seu e-mail e senha</Subtitle>
            </TitleWrapper>
            <InputWrapper>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="text"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <WarningMessage>Preencha um e-mail válido</WarningMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="senha">Senha</Label>
              <Input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={handleSenhaChange}
              />
              {capsLockError && (
                <WarningMessage>Caps Lock está ativado</WarningMessage>
              )}
            </InputWrapper>
            <ForgotPasswordButton onClick={handleForgotPassword}>
              Esqueci minha senha
            </ForgotPasswordButton>
            <Button onClick={handleLogin}>Entrar</Button>
            <RegisterButton onClick={handleRegister}>
              Ainda não está registrado? Crie sua conta aqui
            </RegisterButton>
          </FormContainer>
          <ImageContainer>
            <LogoImage src={logoImage} alt="Logo da marca" />
          </ImageContainer>
        </MainContainer>
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;
