import React, { useState, useEffect } from "react";
import { getFlowerNamesAndImages } from "../../services/Api";
import SearchBar from "../../components/SearchBar/SearchBar";
import Modal from "../../components/Modal/Modal";
import LikeButton from "../../components/Buttons/Buttons";
import {
  Container,
  FlowerRow,
  FlowerItem,
  FlowerImg,
  FlowerName,
  ButtonsListing,
} from "./PlantListingStyle";
import { Flower, ButtonState } from "../../interfaces/interfaces";

const PlantListing: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [searchedFlowers, setSearchedFlowers] = useState<Flower[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonStates, setButtonStates] = useState<{
    [key: string]: ButtonState;
  }>({});
  const [showAllFlowers, setShowAllFlowers] = useState(true);
  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const flowersData = await getFlowerNamesAndImages();
      setFlowers(flowersData);

      const initialButtonStates: { [key: string]: ButtonState } = {};
      flowersData.forEach((flower) => {
        initialButtonStates[flower.id] = {
          isLiked: false,
          isInWishlist: false,
        };
      });

      setButtonStates(initialButtonStates);
    } catch (error) {
      setErrorMessage(
        "Ocorreu um erro ao carregar as plantas, tente novamente."
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
    if (!query || typeof query !== "string") {
      setErrorMessage("");
      setSearchedFlowers([]);
      setShowAllFlowers(true);
      return;
    }

    try {
      setErrorMessage("");
      const data = await getFlowerNamesAndImages();
      const filteredFlowers = data.filter(
        (flower) =>
          flower.name.charAt(0).toUpperCase() === query.charAt(0).toUpperCase()
      );
      setSearchedFlowers(filteredFlowers);
      setShowAllFlowers(filteredFlowers.length === 0);
    } catch (error) {
      console.error(error);
      setSearchedFlowers([]);
      setShowAllFlowers(true);
    }
  };

  const handleLikeClick = (flowerId: string) => {
    setButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [flowerId]: {
        ...prevButtonStates[flowerId],
        isLiked: !prevButtonStates[flowerId]?.isLiked || false,
      },
    }));
  };

  const handleWishlistClick = (flowerId: string) => {
    setButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [flowerId]: {
        ...prevButtonStates[flowerId],
        isInWishlist: !prevButtonStates[flowerId]?.isInWishlist || false,
      },
    }));
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <>
          {showAllFlowers ? (
            <>
              <FlowerRow>
                {flowers.slice(0, 4).map((flower) => (
                  <FlowerItem key={flower.id}>
                    <FlowerImg
                      src={flower.img}
                      alt={flower.name}
                      onClick={() => handleFlowerClick(flower)}
                    />
                    <FlowerName>{flower.name}</FlowerName>
                    <ButtonsListing>
                      <LikeButton
                        isLiked={buttonStates[flower.id]?.isLiked}
                        isInWishlist={buttonStates[flower.id]?.isInWishlist}
                        onClick={() => handleLikeClick(flower.id)}
                        onWishlistClick={() => handleWishlistClick(flower.id)}
                        id={flower.id}
                      />
                    </ButtonsListing>
                  </FlowerItem>
                ))}
              </FlowerRow>
              <FlowerRow>
                {flowers.slice(4, 8).map((flower) => (
                  <FlowerItem key={flower.id}>
                    <FlowerImg
                      src={flower.img}
                      alt={flower.name}
                      onClick={() => handleFlowerClick(flower)}
                    />
                    <FlowerName>{flower.name}</FlowerName>
                    <ButtonsListing>
                      <LikeButton
                        isLiked={buttonStates[flower.id]?.isLiked}
                        isInWishlist={buttonStates[flower.id]?.isInWishlist}
                        onClick={() => handleLikeClick(flower.id)}
                        onWishlistClick={() => handleWishlistClick(flower.id)}
                        id={flower.id}
                      />
                    </ButtonsListing>
                  </FlowerItem>
                ))}
              </FlowerRow>
            </>
          ) : (
            <FlowerRow>
              {searchedFlowers.map((flower) => (
                <FlowerItem key={flower.id}>
                  <FlowerImg
                    src={flower.img}
                    alt={flower.name}
                    onClick={() => handleFlowerClick(flower)}
                  />
                  <FlowerName>{flower.name}</FlowerName>
                  <ButtonsListing>
                    <LikeButton
                      isLiked={buttonStates[flower.id]?.isLiked}
                      isInWishlist={buttonStates[flower.id]?.isInWishlist}
                      onClick={() => handleLikeClick(flower.id)}
                      onWishlistClick={() => handleWishlistClick(flower.id)}
                      id={flower.id}
                    />
                  </ButtonsListing>
                </FlowerItem>
              ))}
            </FlowerRow>
          )}
        </>
      )}
      {selectedFlower && (
        <Modal
          flower={selectedFlower}
          onClose={handleCloseModal}
          isLiked={buttonStates[selectedFlower.id]?.isLiked}
          isInWishlist={buttonStates[selectedFlower.id]?.isInWishlist}
          onLikeClick={() => handleLikeClick(selectedFlower.id)}
          onWishlistClick={() => handleWishlistClick(selectedFlower.id)}
          onModalLikeClick={() => handleLikeClick(selectedFlower.id)}
          onModalWishlistClick={() => handleWishlistClick(selectedFlower.id)}
        />
      )}
    </Container>
  );
};

export default PlantListing;
