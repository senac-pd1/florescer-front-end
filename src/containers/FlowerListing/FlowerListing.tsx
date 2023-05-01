import { useState, useEffect } from "react";
import axios from "axios";
import { SectionListPlant } from "./FlowerListingStyle";
import SearchBar from "../../components/SearchBar/SearchBar";
import PlantList from "../../components/FlowerListing/FlowerListing";
import {
  FlowerItem,
  FlowerImg,
  FlowerName,
  LikeFlower,
} from "./FlowerListingStyle";
import { FcLikePlaceholder } from "react-icons/fc";

interface Flower {
  name: string;
  img: string;
}

export const FlowerListing: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      const response = await axios.get(
        "https://house-plants2.p.rapidapi.com/all-lite",
        {
          headers: {
            "X-RapidAPI-Key":
              "560e7b5defmsh91395a5338028e2p169d4fjsn5d8167d2a289",
            "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data.slice(0, 8).map((flower: any) => ({
        name: flower["Common name"],
        img: flower.Img,
      }));
      setFlowers(data);
    };
    fetchFlowers();
  }, []);

  return (
    <div>
      <PlantList flowers={flowers} />
    </div>
  );
};

function FlowerList() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(
        `https://house-plants2.p.rapidapi.com/all-lite?q=${query}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "560e7b5defmsh91395a5338028e2p169d4fjsn5d8167d2a289",
            "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data.slice().map((flower: any) => ({
        name: flower["Common name"],
        img: flower.Img,
      }));

      setFlowers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SectionListPlant>
        <SearchBar onSearch={handleSearch} />
        <FlowerListing />
      </SectionListPlant>
      {flowers.map((flower) => (
        <SectionListPlant>
          <FlowerItem key={flower.name}>
            <FlowerImg src={flower.img} alt={flower.name} />
            <FlowerName>{flower.name}</FlowerName>
            <LikeFlower>
              <FcLikePlaceholder />
            </LikeFlower>
          </FlowerItem>
        </SectionListPlant>
      ))}
      ;
    </>
  );
}

export default FlowerList;
function setFlowers(data: any) {
  throw new Error("Function not implemented.");
}
