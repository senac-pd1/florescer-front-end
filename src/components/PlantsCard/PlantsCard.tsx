import { IoCloseCircleSharp } from "react-icons/io5";
import {
  BtnInfosAndToggle,
  BtnRemoveAndNamePlant,
  ContainerToggle,
  PlantsGardenCard,
} from "./PlantsCardStyle";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { colorsVariables } from "../../style/VariablesStyle";
import { deleteItemWishlist } from "../../services/ApiProfile";
import { Tooltip } from "@mui/material";

interface PlantsCardProps {
  image: string;
  name: string;
  isWishlist: boolean;
  plantId: string;
  onDeletePlant: (plantId: string) => void;
}

const PlantsCard = ({
  image,
  name,
  isWishlist,
  plantId,
  onDeletePlant,
}: PlantsCardProps) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (val: boolean) => {
    setChecked(val);
    console.log(val);
  };

  const handleDeleteClick = () => {
    onDeletePlant(plantId);
    const userId = "63fe3802-07b8-42e4-bbdd-9f9ca514dd27";
    deleteWishlistItem(userId, plantId);
  };

  const deleteWishlistItem = async (userId: string, plantsId: string) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODgzMzExMDQsImV4cCI6MTY4ODMzODMwNCwiaWF0IjoxNjg4MzMxMTA0LCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.IZYbQ6aCQwmAcjHC4LBy895Ehh4cC2C9SHA7MGvov9g";
    try {
      const deleteService = deleteItemWishlist(userId, token, plantsId);
      await deleteService.delete("", {
        data: {
          userId: userId,
          plantaId: plantsId,
        },
      });
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  return (
    <PlantsGardenCard>
      <ul>
        <li>
          <img src={image} alt="imagem da planta" />
        </li>
        <BtnRemoveAndNamePlant>
          <h3>{name}</h3>
          <Tooltip title="Remover item">
            <button onClick={handleDeleteClick}>
              <IoCloseCircleSharp />
            </button>
          </Tooltip>
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
