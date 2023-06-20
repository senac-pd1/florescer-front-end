import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import { BackButton } from "./ProfilePageStyle";
import UserGarden from "../../containers/UserGarden/UserGarden";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <BackButton>
        <Link to="/">Voltar para Home</Link>
      </BackButton>
      <UserGarden />
    </>
  );
};

export default ProfilePage;
