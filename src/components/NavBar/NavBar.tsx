import { LogoHeader, NavbarContainer } from "./NavBarStyle";
import { motion } from "framer-motion";
import logo from "./../../../src/assets/logoHeader.svg";
import { Link } from "react-router-dom";
interface NavBarProps {
  open: boolean;
}

const NavBar = ({ open }: NavBarProps) => {
  const handleClick = (e: React.BaseSyntheticEvent<Event>) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: location,
      behavior: "smooth",
    });
  };
  return (
    <NavbarContainer open={open}>
      <nav>
        <LogoHeader>
          <img src={logo} alt="ilustration of Florescer logo " />
        </LogoHeader>

        <ul>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href="#home">Início</a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href="#about" onClick={handleClick}>
              Sobre
            </a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href="#newsplants" onClick={handleClick}>
              Novas plantas
            </a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/profile">
              <a>Perfil</a>
            </Link>
          </motion.li>
        </ul>
      </nav>
    </NavbarContainer>
  );
};

export default NavBar;
