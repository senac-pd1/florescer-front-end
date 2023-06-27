import React, { useState } from "react";
import { LikeButtonProps } from "../../interfaces/interfaces";
import { FcLike, FcDislike } from "react-icons/fc";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { LikeFlower } from "./LikeButtonStyle";

const LikeButton: React.FC<LikeButtonProps> = ({
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
      // Lógica para remover do jardim do usuário
      console.log("Removido do jardim do usuário");
    } else {
      // Lógica para adicionar ao jardim do usuário
      console.log("Adicionado ao jardim do usuário");
    }

    onClick();
  };

  const handleWishlistClick = () => {
    if (isInWishlist) {
      // Lógica para remover da lista de desejos do usuário
      console.log("Removido da lista de desejos do usuário");
    } else {
      // Lógica para adicionar à lista de desejos do usuário
      console.log("Adicionado à lista de desejos do usuário");
    }

    onWishlistClick();
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
