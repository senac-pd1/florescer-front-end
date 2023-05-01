import React from "react";
import {
  Container,
  FlowerItem,
  FlowerImg,
  FlowerName,
  FlowerRow,
  LikeFlower,
} from "./FlowerListingStyle";
import { FcLikePlaceholder } from "react-icons/fc";

export interface Flower {
  name: string;
  img: string;
}

interface PlantListProps {
  flowers: Flower[];
}

const PlantList: React.FC<PlantListProps> = ({ flowers }) => {
  return (
    <Container>
      <FlowerRow>
        {flowers.slice(0, 4).map((flower) => (
          <FlowerItem key={flower.name}>
            <FlowerImg src={flower.img} alt={flower.name} />
            <FlowerName>{flower.name}</FlowerName>
            <LikeFlower>
              <FcLikePlaceholder />
            </LikeFlower>
          </FlowerItem>
        ))}
      </FlowerRow>
      <FlowerRow>
        {flowers.slice(4, 8).map((flower) => (
          <FlowerItem key={flower.name}>
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
