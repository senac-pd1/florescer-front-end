/*import { ChangeEvent, FormEvent, useState } from "react";
import {
  ButtonSearch,
  DivSearchBar,
  InputSearch,
  MensasageError,
} from "./SearchBarStyle";
import { VscSearch } from "react-icons/vsc";
import { searchFlowers, Flower } from "../../services/Api";

interface SearchBarProps {
  onSearch: (flowers: Flower[], error: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      setErrorMessage("Por favor, digite algo na barra de pesquisa.");
      onSearch([], "");
      return;
    }

    try {
      const flowers = await searchFlowers(query);
      if (flowers.length > 0) {
        onSearch(flowers, "");
      } else {
        onSearch([], "Não foi encontrada nenhuma planta.");
      }
    } catch (error) {
      onSearch([], "Ocorreu um erro, tente novamente!");
    }
  };

  return (
    <DivSearchBar>
      <form onSubmit={handleSubmit}>
        <InputSearch
          placeholder="Pesquise sua planta favorita"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <ButtonSearch type="submit">
          <VscSearch />
        </ButtonSearch>
      </form>
      {errorMessage && <MensasageError>{errorMessage}</MensasageError>}
    </DivSearchBar>
  );
};

export default SearchBar;
*/

import { ChangeEvent, FormEvent, useState } from "react";
import {
  ButtonSearch,
  DivSearchBar,
  InputSearch,
  MensasageError,
} from "./SearchBarStyle";
import { VscSearch } from "react-icons/vsc";
import { searchFlowers, Flower } from "../../services/Api";
import {
  FlowerImg,
  FlowerItem,
  FlowerName,
  FlowerRow,
  LikeFlower,
} from "../PlantList/PlantListStyle";
import { FcLikePlaceholder } from "react-icons/fc";
import Modal from "../Modal/Modal";

interface SearchBarProps {
  onSearch: (flowers: Flower[], error: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [foundFlower, setFoundFlower] = useState<Flower | null>(null);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      setErrorMessage("Por favor, digite algo na barra de pesquisa.");
      onSearch([], "");
      return;
    }

    try {
      const flowers = await searchFlowers(query);
      if (flowers.length > 0) {
        setFoundFlower(flowers[0]);
        onSearch(flowers, "");
      } else {
        setFoundFlower(null);
        setErrorMessage("Planta não localizada.");
        onSearch([], "");
      }
    } catch (error) {
      onSearch([], "Ocorreu um erro, tente novamente!");
    }
  };

  const handleFlowerClick = (flower: Flower) => {
    setSelectedFlower(flower);
  };

  const handleCloseModal = () => {
    setSelectedFlower(null);
  };

  return (
    <DivSearchBar>
      <form onSubmit={handleSubmit}>
        <InputSearch
          placeholder="Pesquise sua planta favorita"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <ButtonSearch type="submit">
          <VscSearch />
        </ButtonSearch>
      </form>
      {errorMessage && <MensasageError>{errorMessage}</MensasageError>}
      {foundFlower && (
        <FlowerRow key={foundFlower.id}>
          <FlowerItem onClick={() => handleFlowerClick(foundFlower)}>
            <FlowerImg src={foundFlower.img} alt={foundFlower.nomeComum} />
            <FlowerName>{foundFlower.nomeComum}</FlowerName>
            <LikeFlower>
              <FcLikePlaceholder />
            </LikeFlower>
          </FlowerItem>
        </FlowerRow>
      )}
      {selectedFlower && (
        <Modal flower={selectedFlower} onClose={handleCloseModal} />
      )}
    </DivSearchBar>
  );
};

export default SearchBar;
