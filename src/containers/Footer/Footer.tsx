import { ContainerFooter, ContainerImage, ContainerText } from "./FooterStyle";
import logo from "./../../assets/logoLogin.svg";
const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerImage>
        <img src={logo} alt="imagem do logo da marca" />
        <p>
          Abrace a natureza em suas mãos e cultive um jardim de bem-estar.
          Cuidados diários, crescimento exuberante e alegria florescendo em cada
          planta.
        </p>
      </ContainerImage>
      <ContainerText>
        <h2>Projeto de Desenvolvimento I</h2>
        <h3>Centro universitário Senac</h3>
      </ContainerText>
    </ContainerFooter>
  );
};

export default Footer;
