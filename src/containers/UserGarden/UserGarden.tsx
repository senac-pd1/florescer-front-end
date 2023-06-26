import { PlanstInterface } from "../../model/PlanstInterface";
import imageGarden from "./../../assets/imageGarden.png";
import imagePlant from "./../../assets/plant.png";
import { IoCloseCircleSharp } from "react-icons/io5";
import {
  BtnInfosAndToggle,
  BtnRemoveAndNamePlant,
  CircleShapeLeft,
  CircleShapeRight,
  ContainerInfo,
  GardenContainer,
  ImageCard,
  PlantsGardenCard,
  TextCard,
  TitleGarden,
} from "./UserGardenStyle";

const UserGarden = () => {
  const listPlants = [
    {
      id: "1",
      name: "Samambaia",
      img: imagePlant,
      latinName: "Samambaia",
      toleratedLight: "Luz difusa (menos de 5.300 lux / 500 fc)",
      idealLight: "Luz forte (21.500 a 3.200 lux/2.000 a 300 fc)",
      watering: "Mantenha úmido entre as regas e pode secar entre as regas",
      notification: true,
    },
    {
      id: "2",
      name: "Samambaia",
      img: imagePlant,
      latinName: "Samambaia",
      toleratedLight: "Luz difusa (menos de 5.300 lux / 500 fc)",
      idealLight: "Luz forte (21.500 a 3.200 lux/2.000 a 300 fc)",
      watering: "Mantenha úmido entre as regas e pode secar entre as regas",
      notification: true,
    },
    {
      id: "3",
      name: "Samambaia",
      img: imagePlant,
      latinName: "Samambaia",
      toleratedLight: "Luz difusa (menos de 5.300 lux / 500 fc)",
      idealLight: "Luz forte (21.500 a 3.200 lux/2.000 a 300 fc)",
      watering: "Mantenha úmido entre as regas e pode secar entre as regas",
      notification: true,
    },
    {
      id: "4",
      name: "Samambaia",
      img: imagePlant,
      latinName: "Samambaia",
      toleratedLight: "Luz difusa (menos de 5.300 lux / 500 fc)",
      idealLight: "Luz forte (21.500 a 3.200 lux/2.000 a 300 fc)",
      watering: "Mantenha úmido entre as regas e pode secar entre as regas",
      notification: false,
    },
    {
      id: "5",
      name: "Samambaia",
      img: imagePlant,
      latinName: "Samambaia",
      toleratedLight: "Luz difusa (menos de 5.300 lux / 500 fc)",
      idealLight: "Luz forte (21.500 a 3.200 lux/2.000 a 300 fc)",
      watering: "Mantenha úmido entre as regas e pode secar entre as regas",
      notification: false,
    },
  ];

  return (
    <GardenContainer>
      <TitleGarden>Meu Jardim</TitleGarden>
      <CircleShapeLeft></CircleShapeLeft>
      <CircleShapeRight></CircleShapeRight>
      <ContainerInfo>
        <ImageCard>
          <img
            src={imageGarden}
            alt="imagem de 5 pessoas seguram um vaso de planta em frente ao seu rosto"
          />
        </ImageCard>
        <TextCard>
          <p>
            Bem-vindo ao seu Jardim! Esta é uma seção especial em nosso site
            onde você pode criar e organizar seu próprio jardim virtual. Aqui
            estão listadas todas as plantas que você favoritou e tem em sua
            casa. O recurso mais legal é a opção de ativar ou desativar as
            notificações de cuidados para cada uma de suas plantas. Isso
            significa que você pode escolher receber lembretes e dicas
            específicas sobre quando regar ou cuidar de suas plantas, de acordo
            com suas preferências individuais. Digamos que você tenha uma planta
            delicada que requer cuidados especiais. Você pode ativar as
            notificações para essa planta e receber lembretes úteis para
            garantir que ela receba a atenção necessária. Por outro lado, se
            você tiver uma planta resistente que você já conhece bem, você pode
            desativar as notificações para essa planta e cuidar dela de acordo
            com o seu próprio ritmo. Nosso objetivo é ajudá-lo a manter suas
            plantas saudáveis e felizes, fornecendo informações valiosas e
            lembretes oportunos. Queremos tornar sua jornada como jardineiro(a)
            mais fácil e agradável.
          </p>
        </TextCard>
      </ContainerInfo>
      <PlantsGardenCard>
        {listPlants.map((plant: PlanstInterface, index: number) => (
          <ul key={plant.id}>
            <li>
              <img src={plant.img} alt="imagem da planta" />
            </li>
            <BtnRemoveAndNamePlant>
              <h3>{plant.name}</h3>
              <button>
                <IoCloseCircleSharp />
              </button>
            </BtnRemoveAndNamePlant>
            <BtnInfosAndToggle>
              <h3>toggle</h3>
              <button>+ informações</button>
            </BtnInfosAndToggle>
          </ul>
        ))}
      </PlantsGardenCard>
    </GardenContainer>
  );
};

export default UserGarden;
