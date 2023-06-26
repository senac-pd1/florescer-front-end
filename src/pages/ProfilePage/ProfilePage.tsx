import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import { BackButton } from "./ProfilePageStyle";
import UserGarden from "../../containers/UserGarden/UserGarden";
import UserWishlist from "../../containers/UserWishlist/UserWishlist";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <BackButton>
        <Link to="/">Voltar para Home</Link>
      </BackButton>
      <UserGarden />
      <UserWishlist />
    </>
  );
};

export default ProfilePage;
