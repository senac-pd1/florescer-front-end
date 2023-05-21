/*import React from "react";
import {
  Container,
  FlowerItem,
  FlowerImg,
  FlowerName,
  FlowerRow,
  LikeFlower,
} from "./PlantListStyle";
import { FcLikePlaceholder } from "react-icons/fc";
import { Flower } from "../../services/Api";

interface PlantListProps {
  flowers: Flower[];
}

const PlantList: React.FC<PlantListProps> = ({ flowers }) => {
  function onFlowerClick(flower: Flower): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Container>
      <FlowerRow>
        {flowers.slice(0, 8).map((flower) => (
          <FlowerItem
            key={flower.nomeComum}
            onClick={() => onFlowerClick(flower)}
          >
            <FlowerImg src={flower.img} alt={flower.nomeComum} />
            <FlowerName>{flower.nomeComum}</FlowerName>
            <LikeFlower>
              <FcLikePlaceholder />
            </LikeFlower>
          </FlowerItem>
        ))}
      </FlowerRow>
    </Container>
  );
};

export default PlantList;
*/

import React, { useEffect, useState } from "react";
import { Flower, getFlowerNamesAndImages } from "../../services/Api";

const FlowerListing: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      const fetchedFlowers = await getFlowerNamesAndImages();
      setFlowers(fetchedFlowers);
    };

    fetchFlowers();
  }, []);

  return (
    <div>
      {Array.isArray(flowers) && flowers.length > 0 ? (
        flowers.map((flower) => (
          <div key={flower.id}>
            <h2>{flower.nomeComum}</h2>
            <img src={flower.img} alt={flower.nomeComum} />
          </div>
        ))
      ) : (
        <p>Não foi possível carregar as plantinhas.</p>
      )}
    </div>
  );
};

export default FlowerListing;
