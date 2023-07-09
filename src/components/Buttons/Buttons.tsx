import React, { useState } from "react";
import { LikeButtonProps } from "../../interfaces/interfaces";
import { FcLike, FcDislike } from "react-icons/fc";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { LikeFlower } from "./ButtonsStyle";
import { addToGarden, addToWishlist } from "../../services/ApiProfile";
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

  const handleWishListCLick = () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      addPlantInWishlist(userId, id);
      console.log("planta", id);
    }

    onClick();
  };

  const handleGardenCLick = () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      addPlantInGarden(userId, id);
      console.log("planta", id);
    }
    onClick();
  };

  return (
    <>
      <Tooltip title={likeTooltipText}>
        <LikeFlower
          onClick={handleWishListCLick}
          onMouseEnter={handleLikeMouseEnter}
          onMouseLeave={handleLikeMouseLeave}
        >
          {isLiked ? <FcDislike /> : <FcLike />}
        </LikeFlower>
      </Tooltip>
      <Tooltip title={wishlistTooltipText}>
        <LikeFlower
          onClick={handleGardenCLick}
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
