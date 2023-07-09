import React, { useState } from "react";
import { LikeButtonProps } from "../../interfaces/interfaces";
import { FcLike, FcDislike } from "react-icons/fc";
import { GrFavorite, GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { LikeFlower } from "./ButtonsStyle";
import {
  addToGarden,
  deletePlantMyGarden,
  addToWishlist,
  deleteItemWishlist,
} from "../../services/ApiProfile";
import { Tooltip } from "@mui/material";

const LikeButton: React.FC<LikeButtonProps> = ({
  id,
  isLiked,
  isInWishlist,
  onClick,
  onWishlistClick,
}) => {
  const [showLikeTooltip, setShowLikeTooltip] = useState(false);
  const [showWishlistTooltip, setShowWishlistTooltip] = useState(false);

  const handleLikeMouseEnter = () => {
    setShowLikeTooltip(true);
  };

  const handleLikeMouseLeave = () => {
    setShowLikeTooltip(false);
  };

  const handleWishlistMouseEnter = () => {
    setShowWishlistTooltip(true);
  };

  const handleWishlistMouseLeave = () => {
    setShowWishlistTooltip(false);
  };

  const likeTooltipText = isLiked
    ? "Remover do seu jardim"
    : "Adicionar ao seu jardim";
  const wishlistTooltipText = isInWishlist
    ? "Remover da lista de desejos"
    : "Adicionar à lista de desejos";

  const addPlantInWishlist = async (userId: string, plantId: string) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const wishlistService = addToWishlist(plantId, userId, token);
        const response = await wishlistService.post("", {
          userId: userId,
          plantaId: plantId,
        });
        console.log(response.data);
      }
    } catch (error) {
      console.log(`Erro  ${error}`);
    }
  };

  const addPlantInGarden = async (userId: string, plantId: string) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const gardenService = addToGarden(plantId, userId, token);
        const response = await gardenService.post("", {
          userId: userId,
          plantaId: plantId,
        });
        console.log(response.data);
      }
    } catch (error) {
      console.log(`Erro ${error}`);
    }
  };

  const removePlantFromWishlist = async (userId: string, plantId: string) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const wishlistService = deleteItemWishlist(plantId, userId, token);
        const response = await wishlistService.delete("");
        console.log(response.data);
      }
    } catch (error) {
      console.log(`Erro ${error}`);
    }
  };

  const removePlantFromGarden = async (userId: string, plantId: string) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const gardenService = deletePlantMyGarden(plantId, userId, token);
        const response = await gardenService.delete("");
        console.log(response.data);
      }
    } catch (error) {
      console.log(`Erro ${error}`);
    }
  };

  const handleWishListClick = async () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      if (isInWishlist) {
        await removePlantFromWishlist(userId, id);
      } else {
        await addPlantInWishlist(userId, id);
      }
      console.log("planta", id);
    }
    onWishlistClick();
  };

  const handleGardenClick = async () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      if (isLiked) {
        await removePlantFromGarden(userId, id);
      } else {
        await addPlantInGarden(userId, id);
      }
      console.log("planta", id);
    }
    onClick();
  };

  return (
    <>
      <Tooltip title={likeTooltipText}>
        <LikeFlower
          onClick={handleGardenClick}
          onMouseEnter={handleLikeMouseEnter}
          onMouseLeave={handleLikeMouseLeave}
        >
          {isLiked ? <FcDislike /> : <GrFavorite />}
        </LikeFlower>
      </Tooltip>
      <Tooltip title={wishlistTooltipText}>
        <LikeFlower
          onClick={handleWishListClick}
          onMouseEnter={handleWishlistMouseEnter}
          onMouseLeave={handleWishlistMouseLeave}
        >
          {isInWishlist ? <GrFormSubtract /> : <GrFormAdd />}
        </LikeFlower>
      </Tooltip>
    </>
  );
};

export default LikeButton;
