import { PlanstInterface } from "../../model/PlanstInterface";
import imageWishlist from "./../../assets/imageWishlist.png";
import {
  ContainerInfoWishlist,
  ImageCardWishlist,
  PlantsContainer,
  TextCardWishlist,
  TitleWishlist,
  WishlistContainer,
} from "./UserWishlistStyle";
import { PlantsCard } from "../../components/PlantsCard/PlantsCard";
import SearchFlourish from "../SearchFlourish/SearchFlourish";
import { NotFoundCard } from "../../components/NotFoundCard/NotFoundCard";

interface WishListProps {
  wishlistPlants: PlanstInterface[];
  onDeletePlant: (plantId: string) => void;
}

export const UserWishlist: React.FC<WishListProps> = (props) => {
  const handleDeletePlant = (plantId: string) => {
    props.onDeletePlant(plantId);
  };
  return (
    <WishlistContainer>
      <TitleWishlist>Minha Wishlist</TitleWishlist>

      <ContainerInfoWishlist>
        <ImageCardWishlist>
          <img
            src={imageWishlist}
            alt="imagem de uma mulher colocando uma nova planta em sua estante"
          />
        </ImageCardWishlist>
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
      </ContainerInfoWishlist>
      <PlantsContainer>
        {props.wishlistPlants.length > 0 && props.wishlistPlants !== null ? (
          <>
            {props.wishlistPlants.map((plants: PlanstInterface) => (
              <PlantsCard
                key={plants?.id}
                name={plants?.name}
                image={plants?.img}
                isWishlist={true}
                plantId={plants?.id}
                onDeletePlant={handleDeletePlant}
              />
            ))}
          </>
        ) : (
          <NotFoundCard message={"Nenhuma plantinha em sua wishilist"} />
        )}
      </PlantsContainer>
    </WishlistContainer>
  );
};
