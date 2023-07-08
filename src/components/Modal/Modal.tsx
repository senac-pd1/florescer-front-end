import React, { useEffect, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { ModalProps } from "../../interfaces/interfaces";
import LikeButton from "../Buttons/Buttons";
import { GrClose } from "react-icons/gr";
import {
  ModalContainer,
  ModalImg,
  ModalTitle,
  CloseModalButton,
  ModalSubTitle,
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
  onModalLikeClick,
  onModalWishlistClick,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("modal-open");

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleEscKeyPress);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <ModalContainer ref={modalRef}>
        <CloseModalButton onClick={onClose}>
          <GrClose />
        </CloseModalButton>
        <ModalTitle>{flower.name}</ModalTitle>
        <ModalSubTitle>({flower.scientificName})</ModalSubTitle>
        <ModalImg src={flower.img} alt={flower.name} />
        <TabelaModal>
          <li>
            <strong>Familia</strong>: {flower.family}
          </li>
          <li>
            <strong>Crescimento</strong>: {flower.growth}
          </li>

          <li>
            <strong>Clima</strong>: {flower.climate}
          </li>
          <li>
            <strong>Luz Ideal</strong>: {flower.luminosity}
          </li>
        </TabelaModal>
        <ButtonContainer>
          <LikeButton
            isLiked={isLiked}
            isInWishlist={isInWishlist}
            onClick={onModalLikeClick}
            onWishlistClick={onModalWishlistClick}
            id={undefined}
          />
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

export default Modal;

