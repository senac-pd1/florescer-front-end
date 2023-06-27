import React, { ChangeEvent, FormEvent, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { FiFilter } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import {
  ButtonSearch,
  DivSearchBar,
  InputSearch,
  FilterOptions,
  FilterGroup,
  FilterTitle,
  FilterOption,
  ButtonFilter,
  MensasageError,
  SearchContainer,
  FoundFlowerImg,
  FoundFlowerItem,
  FoundFlowerName,
  FoundFlowerRow,
  SearchResultsTitle,
  SearchResultSeparator,
  ButtonClean,
} from "./SearchBarStyle";
import { searchFlowers } from "../../services/Api";
import {
  Flower,
  SearchBarProps,
  ButtonState,
} from "../../interfaces/interfaces";
import Modal from "../Modal/Modal";
import LikeButton from "../LikeButton/LikeButton";

const useButtonStates = () => {
  const [buttonStates, setButtonStates] = useState<{
    [key: string]: ButtonState;
  }>({});

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

  return { buttonStates, handleLikeClick, handleWishlistClick };
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [foundFlowers, setFoundFlowers] = useState<Flower[]>([]);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedLuminosity, setSelectedLuminosity] = useState("");
  const [searchDisabled, setSearchDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(true);

  const { buttonStates, handleLikeClick, handleWishlistClick } =
    useButtonStates();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query && !selectedLuminosity) {
      if (showFilter) {
        setFoundFlowers([]);
        setErrorMessage("Por favor, selecione uma opção do filtro.");
        return;
      } else {
        setErrorMessage("Por favor, digite algo na barra de pesquisa.");
        return;
      }
    }

    try {
      setErrorMessage("");
      const flowers = await searchFlowers(query);
      const filteredFlowers = flowers.filter(
        (flower) =>
          selectedLuminosity === "" || flower.Luminosity === selectedLuminosity
      );

      setFoundFlowers(filteredFlowers);
      onSearch(filteredFlowers);
      setShowSearchResults(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFlowerClick = (flower: Flower) => {
    setSelectedFlower(flower);
  };

  const handleCloseModal = () => {
    setSelectedFlower(null);
  };

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
    setSearchDisabled(!showFilter);
    if (!showFilter) {
      setQuery("");
    }
  };

  const handleLuminositySelect = (luminosity: string) => {
    setSelectedLuminosity((prevLuminosity) =>
      prevLuminosity === luminosity ? "" : luminosity
    );
  };

  const handleClearSearch = () => {
    setQuery("");
    setShowSearchResults(false);
  };

  return (
    <SearchContainer>
      <DivSearchBar>
        <form onSubmit={handleSubmit}>
          <InputSearch
            placeholder="Pesquise sua planta favorita"
            type="text"
            value={query}
            onChange={handleChange}
            disabled={searchDisabled}
          />
          <ButtonSearch type="submit">
            <VscSearch />
          </ButtonSearch>
          <ButtonFilter type="button" onClick={handleFilterClick}>
            <FiFilter /> {showFilter ? "Fechar Filtro" : "Abrir Filtro"}
          </ButtonFilter>
          {showSearchResults && foundFlowers.length > 0 && (
            <ButtonClean type="button" onClick={handleClearSearch}>
              <MdOutlineCleaningServices /> Limpar Pesquisa
            </ButtonClean>
          )}
        </form>
        {showFilter && (
          <FilterOptions>
            <FilterGroup>
              <FilterTitle>Luminosidade</FilterTitle>
              <FilterOption
                selected={selectedLuminosity === "Luz forte"}
                onClick={() => handleLuminositySelect("Luz forte")}
              >
                Luz Forte
              </FilterOption>
              <FilterOption
                selected={selectedLuminosity === "Luz fraca"}
                onClick={() => handleLuminositySelect("Luz fraca")}
              >
                Luz Fraca
              </FilterOption>
              <FilterOption
                selected={selectedLuminosity === "Meia sombra"}
                onClick={() => handleLuminositySelect("Meia sombra")}
              >
                Meia Sombra
              </FilterOption>
            </FilterGroup>
          </FilterOptions>
        )}
        {errorMessage && <MensasageError>{errorMessage}</MensasageError>}
        {showSearchResults && foundFlowers.length > 0 && (
          <>
            <SearchResultsTitle>Resultado da Busca</SearchResultsTitle>
            <FoundFlowerRow>
              {foundFlowers.map((flower) => (
                <FoundFlowerItem key={flower.Id}>
                  <FoundFlowerImg
                    src={flower.Img}
                    alt={flower.Name}
                    onClick={() => handleFlowerClick(flower)}
                  />
                  <FoundFlowerName>{flower.Name}</FoundFlowerName>
                  <LikeButton
                    isLiked={buttonStates[flower.Id]?.isLiked}
                    isInWishlist={buttonStates[flower.Id]?.isInWishlist}
                    onClick={() => handleLikeClick(flower.Id)}
                    onWishlistClick={() => handleWishlistClick(flower.Id)}
                  />
                </FoundFlowerItem>
              ))}
            </FoundFlowerRow>
            <SearchResultSeparator />
          </>
        )}
      </DivSearchBar>
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
    </SearchContainer>
  );
};

export default SearchBar;
