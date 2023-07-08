import {
  ContainerButtons,
  LogoHeader,
  LogoutButton,
  NavbarContainer,
} from "./NavBarStyle";
import { motion } from "framer-motion";
import logo from "./../../../src/assets/logoHeader.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface NavBarProps {
  open: boolean;
}

const NavBar = ({ open }: NavBarProps) => {
  const location = useLocation();

  const handleClick = (e: React.BaseSyntheticEvent<Event>) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: location,
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.href = "/";
    console.log("deslogado com sucesso!");
  };

  const isProfilePage = location.pathname === "/profile";
  const isHomePage = location.pathname === "/";

  return (
    <NavbarContainer open={open}>
      <nav>
        <LogoHeader>
          <Link to="/">
            <img src={logo} alt="ilustration of Florescer logo " />
          </Link>
        </LogoHeader>

        <ul>
          {isHomePage && (
            <>
              <motion.li whileTap={{ scale: 1.1 }}>
                <a href="#home" onClick={handleClick}>
                  Home
                </a>
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
                <Link to="/login">Entrar</Link>
              </motion.li>
              <motion.li whileTap={{ scale: 1.1 }}>
                <Link to="/profile">Perfil</Link>
              </motion.li>
            </>
          )}

          {isProfilePage && (
            <ContainerButtons>
              <motion.li whileTap={{ scale: 1.1 }}>
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li whileTap={{ scale: 1.1 }}>
                <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
              </motion.li>
            </ContainerButtons>
          )}
        </ul>
      </nav>
    </NavbarContainer>
  );
};

export default NavBar;
