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
import {
  deleteItemWishlist,
  deletePlantMyGarden,
} from "../../services/ApiProfile";
import { Tooltip } from "@mui/material";
import { ModalProfile } from "../ModalProfile/ModalProfile";
import { useModal } from "../../hooks/useModal";
import { PlantsProfileDetail } from "../PlantsProfileDetail/PlantsProfileDetai";

interface PlantsCardProps {
  image: string;
  name: string;
  isWishlist: boolean;
  plantId: string;
  onDeletePlant: (plantId: string) => void;
}

export const PlantsCard = ({
  image,
  name,
  isWishlist,
  plantId,
  onDeletePlant,
}: PlantsCardProps) => {
  const [checked, setChecked] = useState(true);
  const [selectId, setSelectId] = useState("");
  const { isOpen, toggle } = useModal();
  const handleChange = (val: boolean) => {
    setChecked(val);
    console.log(val);
  };

  const toggleHandler = (id: string) => {
    setSelectId(id);
    toggle();
  };

  const handleDeleteClick = () => {
    if (plantId && onDeletePlant) {
      onDeletePlant(plantId);
      const userId = localStorage.getItem("id");
      isWishlist;
      if (userId) {
        deleteWishlistItem(userId, plantId);
      }
    }
  };

  const handleDeleteClickGarden = () => {
    if (plantId && onDeletePlant) {
      onDeletePlant(plantId);
      const userId = localStorage.getItem("id");
      isWishlist = false;
      if (userId) {
        deleteGardenItem(userId, plantId);
      }
    }
  };

  const deleteWishlistItem = async (userId: string, plantsId: string) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const deleteService = deleteItemWishlist(userId, token, plantsId);
        await deleteService.delete("", {
          data: {
            userId: userId,
            plantaId: plantsId,
          },
        });
      }
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  const deleteGardenItem = async (userId: string, plantsId: string) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const deleteServiceGarden = deletePlantMyGarden(
          userId,
          token,
          plantsId
        );
        await deleteServiceGarden.delete("", {
          data: {
            userId: userId,
            plantaId: plantsId,
            notifica: false,
          },
        });
      }
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  return (
    <PlantsGardenCard>
      <ul>
        <li>
          <img src={image} alt="imagem da planta"></img>
        </li>
        <BtnRemoveAndNamePlant>
          <h3>{name}</h3>
          {isWishlist ? (
            <Tooltip title="Remover item">
              <button onClick={handleDeleteClick}>
                <IoCloseCircleSharp />
              </button>
            </Tooltip>
          ) : (
            <Tooltip title="Remover item">
              <button onClick={handleDeleteClickGarden}>
                <IoCloseCircleSharp />
              </button>
            </Tooltip>
          )}
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
          <button
            onClick={() => {
              toggleHandler(plantId);
            }}
          >
            + informações
          </button>
        </BtnInfosAndToggle>
      </ul>
      <ModalProfile isOpen={isOpen} toggle={toggle}>
        <PlantsProfileDetail id={selectId}></PlantsProfileDetail>
      </ModalProfile>
    </PlantsGardenCard>
  );
};
