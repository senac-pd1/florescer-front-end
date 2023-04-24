import { useState } from "react";
import backgroundImage from "./../../assets/banner.png";
import {
  BannerImage,
  BannerText,
  Title,
  TitleTwo,
  TypeWriterHeader,
} from "./BannerStyle";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const [state] = useState({
    title: "Para quem gosta",
    titleTwo: "de um ambiente",
  });
  return (
    <>
      <BannerImage id="home">
        <img src={backgroundImage} alt="foto de um ambiente florido" />
      </BannerImage>
      <BannerText>
        <Title>
          <h2>{state.title}</h2>
        </Title>

        <TitleTwo>
          <h2>{state.titleTwo}</h2>
        </TitleTwo>

        <TypeWriterHeader>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["saudável", "florido", "verde"],
            }}
          />
        </TypeWriterHeader>
      </BannerText>
    </>
  );
};

export default Banner;
