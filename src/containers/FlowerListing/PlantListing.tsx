import { useState, useEffect } from "react";
import {
  getFlowerNamesAndImages,
  searchFlowers,
  Flower,
} from "../../services/Api";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  Container,
  FlowerRow,
  LikeFlower,
  FlowerItem,
  FlowerImg,
  FlowerName,
} from "./PlantListingStyle";
import { FcLikePlaceholder } from "react-icons/fc";
import Modal from "../../components/Modal/Modal";

const PlantListing: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [searchedFlowers, setSearchedFlowers] = useState<Flower[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [foundFlower, setFoundFlower] = useState<Flower | null>(null);

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const flowersData = await getFlowerNamesAndImages();
      setFlowers(flowersData);
    } catch (error) {
      setErrorMessage(
        "Ocorreu um erro ao carregar as plantas. Tente novamente mais tarde."
      );
    }
  };

  const handleFlowerClick = (flower: Flower) => {
    setSelectedFlower(flower);
  };

  const handleCloseModal = () => {
    setSelectedFlower(null);
  };

  const handleSearch = async (query: string) => {
    if (!query) {
      setErrorMessage("Por favor, digite algo na barra de pesquisa.");
      setSearchedFlowers([]);
      return;
    }

    try {
      setErrorMessage("");
      const data = await searchFlowers(query);
      if (data.length > 0) {
        setSearchedFlowers(data);
        setFoundFlower(data[0]); // Salva a primeira planta encontrada
      } else {
        setSearchedFlowers([]);
        setFoundFlower(null);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Ocorreu um erro, tente novamente!");
      setSearchedFlowers([]);
      setFoundFlower(null);
    }
  };

  return (
    <Container id="newsplants">
      <SearchBar onSearch={handleSearch} />
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <>
          <FlowerRow>
            {flowers.slice(0, 4).map((flower) => (
              <FlowerItem
                key={flower.id}
                onClick={() => handleFlowerClick(flower)}
              >
                <FlowerImg src={flower.img} alt={flower.nomeComum} />
                <FlowerName>{flower.nomeComum}</FlowerName>
                <LikeFlower>
                  <FcLikePlaceholder />
                </LikeFlower>
              </FlowerItem>
            ))}
          </FlowerRow>
          <FlowerRow>
            {flowers.slice(4, 8).map((flower) => (
              <FlowerItem
                key={flower.id}
                onClick={() => handleFlowerClick(flower)}
              >
                <FlowerImg src={flower.img} alt={flower.nomeComum} />
                <FlowerName>{flower.nomeComum}</FlowerName>
                <LikeFlower>
                  <FcLikePlaceholder />
                </LikeFlower>
              </FlowerItem>
            ))}
          </FlowerRow>
          {searchedFlowers.map((flower) => (
            <FlowerRow key={flower.id}>
              <FlowerItem onClick={() => handleFlowerClick(flower)}>
                <FlowerImg src={flower.img} alt={flower.nomeComum} />
                <FlowerName>{flower.nomeComum}</FlowerName>
                <LikeFlower>
                  <FcLikePlaceholder />
                </LikeFlower>
              </FlowerItem>
            </FlowerRow>
          ))}
        </>
      )}
      {selectedFlower && (
        <Modal flower={selectedFlower} onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default PlantListing;
