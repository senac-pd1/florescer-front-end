import { useState, useEffect } from "react";
import {
  Flower,
  getFlowerNamesAndImages,
  searchFlowers,
} from "../../services/Api";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  Container,
  FlowerItemModal,
  FlowerRow,
  LikeFlowerModal,
  SectionListPlant,
  FlowerItem,
  FlowerImg,
  FlowerName,
  LikeFlower,
  ModalContainer,
  ModalImg,
  ModalTitle,
  CloseModalButton,
  TextModal,
} from "./FlowerListingStyle";
import { FcLikePlaceholder } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { DivSearchBar } from "../../components/SearchBar/SearchBarStyle";

export const FlowerListing: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [searchedFlowers, setSearchedFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const fetchFlowersData = async () => {
      const data = await getFlowerNamesAndImages();
      setFlowers(data);
    };
    fetchFlowersData();
  }, []);

  const handleFlowerClick = (flower: Flower) => {
    setSelectedFlower(flower);
  };

  const handleCloseModal = () => {
    setSelectedFlower(null);
  };

  const handleSearch = async (query: string) => {
    try {
      setFlowers([]);
      const data = await searchFlowers(query);
      setSearchedFlowers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SectionListPlant>
        <DivSearchBar>
          <SearchBar onSearch={handleSearch} />
        </DivSearchBar>
        <Container>
          {searchedFlowers.length === 0
            ? flowers.map((flower, index) => (
                <FlowerRow key={index}>
                  <FlowerItem onClick={() => handleFlowerClick(flower)}>
                    <FlowerImg src={flower.img} alt={flower.name} />
                    <FlowerName>{flower.name}</FlowerName>
                    <LikeFlower>
                      <FcLikePlaceholder />
                    </LikeFlower>
                  </FlowerItem>
                </FlowerRow>
              ))
            : searchedFlowers.map((flower, index) => (
                <FlowerRow key={index}>
                  <FlowerItem onClick={() => handleFlowerClick(flower)}>
                    <FlowerImg src={flower.img} alt={flower.name} />
                    <FlowerName>{flower.name}</FlowerName>
                    <LikeFlower>
                      <FcLikePlaceholder />
                    </LikeFlower>
                  </FlowerItem>
                </FlowerRow>
              ))}
        </Container>
      </SectionListPlant>

      {selectedFlower && (
        <ModalContainer>
          <CloseModalButton onClick={handleCloseModal}>
            <GrClose />
          </CloseModalButton>
          <ModalTitle>{selectedFlower.name}</ModalTitle>
          <TextModal>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste id
            aliquid molestias ipsam
          </TextModal>
          <TextModal>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste id
            aliquid molestias ipsam
          </TextModal>
          <TextModal>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste id
            aliquid molestias ipsam
          </TextModal>
          <FlowerItemModal>
            <ModalImg src={selectedFlower.img} alt={selectedFlower.name} />
            <LikeFlowerModal>
              <FcLikePlaceholder />
            </LikeFlowerModal>
          </FlowerItemModal>
        </ModalContainer>
      )}
    </>
  );
};

export default FlowerListing;
