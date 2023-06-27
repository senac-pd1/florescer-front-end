import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Flower, ModalProps } from "../../interfaces/interfaces";
import LikeButton from "../LikeButton/LikeButton";
import { GrClose } from "react-icons/gr";
import {
  ModalContainer,
  ModalImg,
  ModalTitle,
  CloseModalButton,
  TextModal,
  TabelaModal,
  ButtonContainer,
} from "./ModalStyle";

const GlobalStyle = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`;

const Modal: React.FC<ModalProps> = ({
  flower,
  onClose,
  isLiked,
  isInWishlist,
  onLikeClick,
  onWishlistClick,
  onModalLikeClick,
  onModalWishlistClick,
}) => {
  useEffect(() => {
    document.body.classList.add("modal-open");

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <ModalContainer>
        <CloseModalButton onClick={onClose}>
          <GrClose />
        </CloseModalButton>
        <ModalTitle>{flower.Name}</ModalTitle>
        <TextModal>({flower.Name})</TextModal>
        <ModalImg src={flower.Img} alt={flower.Name} />
        <TabelaModal>
          <li>
            <strong>Familia</strong>: {flower.Family}
          </li>
          <li>
            <strong>Crescimento</strong>: {flower.Growth}
          </li>
          <li>
            <strong>Rega</strong>: {flower.Irrigation}
          </li>
          <li>
            <strong>Clima</strong>: {flower.Climate}
          </li>
          <li>
            <strong>Luz Ideal</strong>: {flower.Luminosity}
          </li>
        </TabelaModal>
        <ButtonContainer>
          <LikeButton
            isLiked={isLiked}
            isInWishlist={isInWishlist}
            onClick={onModalLikeClick}
            onWishlistClick={onModalWishlistClick}
          />
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

export default Modal;
