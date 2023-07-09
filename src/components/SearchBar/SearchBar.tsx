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
  Form,
  ButtonsFound,
} from "./SearchBarStyle";
import { getFlowerByName, getFlowerByLuminosity } from "../../services/Api";

import {
  Flower,
  SearchBarProps,
  ButtonState,
} from "../../interfaces/interfaces";
import Modal from "../Modal/Modal";
import LikeButton from "../Buttons/Buttons";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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
  const [isFilterOptionsVisible, setFilterOptionsVisible] = useState(false);

  const toggleFilterOptions = () => {
    setFilterOptionsVisible((prevState) => !prevState);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const capitalizedQuery = capitalizeFirstLetter(query);
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
      if (selectedLuminosity) {
        const flowers = await getFlowerByLuminosity(selectedLuminosity);
        setFoundFlowers(flowers);
        onSearch(flowers);
        setShowSearchResults(true);
      } else {
        const flower = await getFlowerByName(capitalizedQuery);
        if (flower) {
          setFoundFlowers([flower]);
          onSearch([flower]);
          setShowSearchResults(true);
        } else {
          setFoundFlowers([]);
          setErrorMessage("Nenhuma planta encontrada com esse nome.");
          setShowSearchResults(false);
        }
      }
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
    setShowFilter((prevShowFilter) => !prevShowFilter);
    setSearchDisabled((prevSearchDisabled) => !prevSearchDisabled);
    if (!showFilter) {
      setQuery("");
    }
  };

  const handleLuminositySelect = async (luminosity: string) => {
    setSelectedLuminosity((prevLuminosity) =>
      prevLuminosity === luminosity ? "" : luminosity
    );

    try {
      if (luminosity) {
        const flowers = await getFlowerByLuminosity(luminosity);
        setFoundFlowers(flowers);
        onSearch(flowers);
        setShowSearchResults(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearSearch = () => {
    setSelectedLuminosity("");
    setFoundFlowers([]);
    setShowSearchResults(false);
    setSelectedFlower(null);
  };

  return (
    <SearchContainer>
      <DivSearchBar>
        <Form onSubmit={handleSubmit}>
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
        </Form>

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
                <FoundFlowerItem key={flower.id}>
                  <FoundFlowerImg
                    src={flower.img}
                    alt={flower.name}
                    onClick={() => handleFlowerClick(flower)}
                  />
                  <FoundFlowerName>{flower.name}</FoundFlowerName>
                  <ButtonsFound>
                    <LikeButton
                      isLiked={buttonStates[flower.id]?.isLiked}
                      isInWishlist={buttonStates[flower.id]?.isInWishlist}
                      onClick={() => handleLikeClick(flower.id)}
                      onWishlistClick={() => handleWishlistClick(flower.id)}
                      id={flower.id}
                    />
                  </ButtonsFound>
                </FoundFlowerItem>
              ))}
              {foundFlowers.length % 4 !== 0 &&
                Array.from({ length: 4 - (foundFlowers.length % 4) }).map(
                  (_, index) => (
                    <div
                      key={`empty-${index}`}
                      style={{ visibility: "hidden" }}
                    />
                  )
                )}
            </FoundFlowerRow>
            <SearchResultSeparator />
          </>
        )}
      </DivSearchBar>
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
    </SearchContainer>
  );
};

export default SearchBar;
