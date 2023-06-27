import React, { useState, useEffect } from "react";
import { getFlowerNamesAndImages, searchFlowers } from "../../services/Api";
import SearchBar from "../../components/SearchBar/SearchBar";
import Modal from "../../components/Modal/Modal";
import LikeButton from "../../components/LikeButton/LikeButton";
import {
  Container,
  FlowerRow,
  FlowerItem,
  FlowerImg,
  FlowerName,
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

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const flowersData = await getFlowerNamesAndImages();
      setFlowers(flowersData);

      const initialButtonStates: { [key: string]: ButtonState } = {};
      flowersData.forEach((flower) => {
        initialButtonStates[flower.Id] = {
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
    if (!query) {
      setErrorMessage(
        "Por favor, digite algo na barra de pesquisa ou selecione uma opção do filtro."
      );
      setSearchedFlowers([]);
      return;
    }

    try {
      setErrorMessage("");
      const data = await searchFlowers(query);
      setSearchedFlowers(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Ocorreu um erro, tente novamente!");
      setSearchedFlowers([]);
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
    setButtonStates((prevButtonStates) => {
      const newState = { ...prevButtonStates };
      newState[flowerId] = {
        ...newState[flowerId],
        isInWishlist: !newState[flowerId]?.isInWishlist || false,
      };
      return newState;
    });
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <>
          {searchedFlowers.length === 0 ? (
            <>
              <FlowerRow>
                {flowers.slice(0, 4).map((flower) => (
                  <FlowerItem key={flower.Id}>
                    <FlowerImg
                      src={flower.Img}
                      alt={flower.Name}
                      onClick={() => handleFlowerClick(flower)}
                    />
                    <FlowerName>{flower.Name}</FlowerName>
                    <LikeButton
                      isLiked={buttonStates[flower.Id]?.isLiked}
                      isInWishlist={buttonStates[flower.Id]?.isInWishlist}
                      onClick={() => handleLikeClick(flower.Id)}
                      onWishlistClick={() => handleWishlistClick(flower.Id)}
                    />
                  </FlowerItem>
                ))}
              </FlowerRow>
              <FlowerRow>
                {flowers.slice(4, 8).map((flower) => (
                  <FlowerItem key={flower.Id}>
                    <FlowerImg
                      src={flower.Img}
                      alt={flower.Name}
                      onClick={() => handleFlowerClick(flower)}
                    />
                    <FlowerName>{flower.Name}</FlowerName>
                    <LikeButton
                      isLiked={buttonStates[flower.Id]?.isLiked}
                      isInWishlist={buttonStates[flower.Id]?.isInWishlist}
                      onClick={() => handleLikeClick(flower.Id)}
                      onWishlistClick={() => handleWishlistClick(flower.Id)}
                    />
                  </FlowerItem>
                ))}
              </FlowerRow>
            </>
          ) : (
            <FlowerRow>
              {searchedFlowers.map((flower) => (
                <FlowerItem key={flower.Id}>
                  <FlowerImg
                    src={flower.Img}
                    alt={flower.Name}
                    onClick={() => handleFlowerClick(flower)}
                  />
                  <FlowerName>{flower.Name}</FlowerName>
                  <LikeButton
                    isLiked={buttonStates[flower.Id]?.isLiked}
                    isInWishlist={buttonStates[flower.Id]?.isInWishlist}
                    onClick={() => handleLikeClick(flower.Id)}
                    onWishlistClick={() => handleWishlistClick(flower.Id)}
                  />
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
          isLiked={buttonStates[selectedFlower.Id]?.isLiked}
          isInWishlist={buttonStates[selectedFlower.Id]?.isInWishlist}
          onLikeClick={() => handleLikeClick(selectedFlower.Id)}
          onWishlistClick={() => handleWishlistClick(selectedFlower.Id)}
          onModalLikeClick={() => handleLikeClick(selectedFlower.Id)}
          onModalWishlistClick={() => handleWishlistClick(selectedFlower.Id)}
        />
      )}
    </Container>
  );
};

export default PlantListing;
