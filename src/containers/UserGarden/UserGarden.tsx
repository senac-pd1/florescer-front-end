import { PlanstInterface } from "../../model/PlanstInterface";
import imageGarden from "./../../assets/imageGarden.png";
import imagePlant from "./../../assets/plant.png";
import { IoCloseCircleSharp } from "react-icons/io5";
import {
  CircleShapeLeft,
  CircleShapeRight,
  ContainerInfo,
  GardenContainer,
  ImageCard,
  PlantsContainer,
  TextCard,
  TitleGarden,
} from "./UserGardenStyle";
import PlantsCard from "../../components/PlantsCard/PlantsCard";

interface GardenProps {
  gardenPlants: PlanstInterface[];
  onDeletePlant: (plantId: string) => void;
}

const UserGarden: React.FC<GardenProps> = (props) => {
  const handleDeletePlant = (plantId: string) => {
    props.onDeletePlant(plantId);
  };
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
      <PlantsContainer>
        {props.gardenPlants.map((plants: PlanstInterface) => (
          <PlantsCard
            key={plants.id}
            name={plants.name}
            image={plants.img}
            isWishlist={false}
            plantId={plants.id}
            onDeletePlant={handleDeletePlant}
          />
        ))}
      </PlantsContainer>
    </GardenContainer>
  );
};

export default UserGarden;
