import { FcLikePlaceholder } from "react-icons/fc";
import { Flower } from "../../services/Api";
import {
  ModalContainer,
  ModalImg,
  ModalTitle,
  CloseModalButton,
  TextModal,
  LikeFlowerModal,
  TabelaModal,
} from "./ModalStyle";
import { GrClose } from "react-icons/gr";

interface ModalProps {
  flower: Flower;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ flower, onClose }) => {
  return (
    <ModalContainer>
      <CloseModalButton onClick={onClose}>
        <GrClose />
      </CloseModalButton>
      <ModalTitle>{flower.nomeComum}</ModalTitle>
      <TextModal>{flower.nomeLatino}</TextModal>
      <ModalImg src={flower.img} alt={flower.nomeComum} />
      <TabelaModal>
        <li>
          <strong>Rega</strong>: {flower.rega}
        </li>
        <li>
          <strong>Clima</strong>: {flower.clima}
        </li>
        <li>
          <strong>Luz tolerada</strong>: {flower.luzTolerada}
        </li>
        <li>
          <strong>Luz ideal</strong>: {flower.luzIdeal}
        </li>
        <li>
          <strong>Temperatura max.</strong>: {flower.temperaturaMax}
        </li>
      </TabelaModal>
      <LikeFlowerModal>
        <FcLikePlaceholder />
      </LikeFlowerModal>
    </ModalContainer>
  );
};

export default Modal;
