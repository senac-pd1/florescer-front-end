import { useEffect, useState } from "react";
import { HeaderContainer } from "./HeaderStyle";
import NavBar from "../../components/NavBar/NavBar";
import BurguerButton from "../../components/BurguerButton/BurguerButton";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSolidColor, setIsSolidColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setIsSolidColor(false);
    } else {
      setIsSolidColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [changeColor]);

  return (
    <HeaderContainer isSolidColor={isSolidColor}>
      <NavBar open={open} />
      <BurguerButton open={open} onOpen={setOpen} />
    </HeaderContainer>
  );
};

export default Header;
