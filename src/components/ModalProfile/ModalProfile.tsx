import { ModalBox, ModalOverlay } from "./ModalProfileStyle";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export const ModalProfile = (modal: ModalProps) => {
  return (
    <>
      {modal.isOpen && (
        <ModalOverlay onClick={modal.toggle}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            {modal.children}
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
};
