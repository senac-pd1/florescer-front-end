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
  plantId?: string;
  onDeletePlant?: (plantId: string) => void;
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
    if (plantId && onDeletePlant) {
      onDeletePlant(plantId);
      const userId = "d381ccba-990e-47a3-afcc-4219d8337a28";
      deleteWishlistItem(userId, plantId);
    }
  };

  const deleteWishlistItem = async (userId: string, plantsId: string) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODgzMzU4MjQsImV4cCI6MTY4ODM0MzAyNCwiaWF0IjoxNjg4MzM1ODI0LCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.XR_ItkT4w8zh7xSyFlRlvOPWcjoOPcBkpdHPdativdU";
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
