import { IoCloseCircleSharp } from "react-icons/io5";
import {
  BtnInfosAndToggle,
  BtnRemoveAndNamePlant,
  PlantsGardenCard,
} from "./PlantsCardStyle";

interface ProfessionalCardProps {
  image: string;
  name: string;
  isWishlist: boolean;
}

const PlantsCard = ({ image, name, isWishlist }: ProfessionalCardProps) => (
  <PlantsGardenCard>
    <ul>
      <li>
        <img src={image} alt="imagem da planta" />
      </li>
      <BtnRemoveAndNamePlant>
        <h3>{name}</h3>
        <button>
          <IoCloseCircleSharp />
        </button>
      </BtnRemoveAndNamePlant>
      <BtnInfosAndToggle>
        {isWishlist ? true : <h3>toggle</h3>}
        <button>+ informações</button>
      </BtnInfosAndToggle>
    </ul>
  </PlantsGardenCard>
);

export default PlantsCard;
