import { PlanstInterface } from "../../model/PlanstInterface";
import imagePlant from "./../../assets/plant.png";
import imageWishlist from "./../../assets/imageWishlist.png";
import { IoCloseCircleSharp } from "react-icons/io5";
import {
  ContainerInfoWishlist,
  ImageCardWishlist,
  PlantsContainer,
  TextCardWishlist,
  TitleWishlist,
  WishlistContainer,
} from "./UserWishlistStyle";
import PlantsCard from "../../components/PlantsCard/PlantsCard";

const UserWishlist = () => {
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
    <WishlistContainer>
      <TitleWishlist>Minha Wishlist</TitleWishlist>
      <ContainerInfoWishlist>
        <TextCardWishlist>
          <p>
            Aqui você pode criar uma lista personalizada de desejos das plantas
            que você gostaria de ter em seu jardim. Ao adicionar plantas à sua
            Wishlist, você estará criando uma lista especial de referência, onde
            poderá acompanhar todas as plantas que deseja obter no futuro. Essa
            é uma ótima maneira de planejar suas compras e se inspirar ao
            expandir sua coleção de plantas. Além disso, oferecemos uma
            funcionalidade extra emocionante! Junto com sua Wishlist, fornecemos
            um mapa interativo que mostra as lojas de plantas mais próximas a
            você. Isso torna ainda mais fácil encontrar as lojas ideais para
            comprar suas plantas desejadas. Basta explorar o mapa e encontrar as
            lojas que estão convenientemente localizadas em sua região. Nosso
            objetivo é tornar sua jornada como jardineiro(a) ainda mais
            empolgante e ajudar você a transformar seus sonhos de plantas em
            realidade. Com a Wishlist e o mapa de lojas, você terá uma
            ferramenta poderosa para descobrir novas plantas e encontrar os
            lugares certos para adquiri-las.
          </p>
        </TextCardWishlist>
        <ImageCardWishlist>
          <img
            src={imageWishlist}
            alt="imagem de uma mulher colocando uma nova planta em sua estante"
          />
        </ImageCardWishlist>
      </ContainerInfoWishlist>
      <PlantsContainer>
        {listPlants.map((plants: PlanstInterface) => (
          <PlantsCard
            key={plants.id}
            name={plants.name}
            image={plants.img}
            isWishlist={true}
          />
        ))}
      </PlantsContainer>
      <TitleWishlist>Lojas próximas</TitleWishlist>
    </WishlistContainer>
  );
};

export default UserWishlist;
