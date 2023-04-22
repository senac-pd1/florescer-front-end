import { StyledBurguer } from "./BurguerButtonStyle";

interface BurguerButtonProps {
  open: boolean;
  onOpen: (openState: boolean) => void;
}

const BurguerButton = ({ open, onOpen }: BurguerButtonProps) => {
  return (
    <StyledBurguer open={open} onClick={() => onOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurguer>
  );
};

export default BurguerButton;
