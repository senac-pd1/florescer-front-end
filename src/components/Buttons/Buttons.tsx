import React, { useState } from "react";
import { LikeButtonProps } from "../../interfaces/interfaces";
import { FcLike, FcDislike } from "react-icons/fc";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { LikeFlower } from "./ButtonsStyle";

import { addToWishlist } from "../../services/Api";

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

  const handleLikeClick = () => {
    if (isLiked) {
      console.log("Removido do jardim do usuário");
    } else {
      console.log("Adicionado ao jardim do usuário");
    }

    onClick();
  };

  const handleWishlistClick = async () => {
    if (isInWishlist) {
      console.log("Removido da lista de desejos do usuário");
    } else {
      console.log("Adicionado à lista de desejos do usuário");
    }

    const addedToWishlist = await addToWishlist(id);
    if (addedToWishlist) {
      onWishlistClick();
    }
  };

  return (
    <>
      <LikeFlower
        onClick={handleLikeClick}
        onMouseEnter={handleLikeMouseEnter}
        onMouseLeave={handleLikeMouseLeave}
        title={likeTooltipText}
      >
        {isLiked ? <FcDislike /> : <FcLike />}
      </LikeFlower>
      <LikeFlower
        onClick={handleWishlistClick}
        onMouseEnter={handleWishlistMouseEnter}
        onMouseLeave={handleWishlistMouseLeave}
        title={wishlistTooltipText}
      >
        {isInWishlist ? <GrFormSubtract /> : <GrFormAdd />}
      </LikeFlower>
    </>
  );
};

export default LikeButton;
