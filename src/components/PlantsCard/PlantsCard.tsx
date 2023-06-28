import { IoCloseCircleSharp } from "react-icons/io5";
import {
  BtnInfosAndToggle,
  BtnRemoveAndNamePlant,
  ContainerToggle,
  PlantsGardenCard,
} from "./PlantsCardStyle";
import ReactSwitch from "react-switch";
import { useState } from "react";
interface ProfessionalCardProps {
  image: string;
  name: string;
  isWishlist: boolean;
}
import { colorsVariables } from "../../style/VariablesStyle";
const PlantsCard = ({ image, name, isWishlist }: ProfessionalCardProps) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (val: boolean) => {
    setChecked(val);
    console.log(val);
  };
  return (
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
          {isWishlist ? (
            true
          ) : (
            <ContainerToggle>
              <ReactSwitch
                height={16}
                width={41}
                checked={checked}
                onChange={handleChange}
                onColor={colorsVariables.green}
                handleDiameter={12}
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </ContainerToggle>
          )}
          <button>+ informações</button>
        </BtnInfosAndToggle>
      </ul>
    </PlantsGardenCard>
  );
};

export default PlantsCard;
