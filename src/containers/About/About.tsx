import aboutImage from "./../../assets/aboutImage.png";
import { useAnimation } from "framer-motion";
import { ImageAbout, SectionAbout, TextAbout } from "./AboutStyle";

const About = () => {
  const control = useAnimation();

  return (
    <SectionAbout id="about">
      <ImageAbout>
        <img src={aboutImage} alt="foto de uma mulher regando suas plantas" />
      </ImageAbout>
      <TextAbout>
        <p>
          Florescer é uma aplicação web que oferece suporte aos cuidados diários
          de plantas. Com recursos como lembretes diários, listas de cuidados a
          serem realizados, e a possibilidade de favoritar suas plantas
          preferidas, Florescer ajuda os usuários a manter suas plantas
          saudáveis e felizes.
        </p>
      </TextAbout>
    </SectionAbout>
  );
};

export default About;
