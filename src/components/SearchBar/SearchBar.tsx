import { ChangeEvent, FormEvent, useState } from "react";
import { ButtonSearch, DivSearchBar, InputSearch } from "./SearchBarStyle";
import { VscSearch } from "react-icons/vsc";

interface Flower {
  name: string;
  img: string;
}

interface SearchBarProps {
  onSearch: (flower: Flower | null, error: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      onSearch(null, "Please enter a search query.");
      return;
    }

    const formattedQuery = query.trim().toLowerCase();
    const apiUrl = `https://house-plants2.p.rapidapi.com/Common-Name`;

    fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": "560e7b5defmsh91395a5338028e2p169d4fjsn5d8167d2a289",
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const flower = data.find((flower: { [x: string]: any }) =>
          flower["Common name"].includes(formattedQuery)
        );
        if (flower) {
          const flowerData = {
            name: flower["Common name"],
            img: flower.Img,
          };
          onSearch(flowerData, "");
        } else {
          onSearch(null, "Não foi encontrado nenhuma planta.");
        }
      })
      .catch((error) => {
        onSearch(null, "Ocorreu um erro, por favor, tente novamente!");
      });
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
    </DivSearchBar>
  );
};

export default SearchBar;
