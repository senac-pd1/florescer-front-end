import React from "react";
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
          <FlowerItem key={flower.name} onClick={() => onFlowerClick(flower)}>
            <FlowerImg src={flower.img} alt={flower.name} />
            <FlowerName>{flower.name}</FlowerName>
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
