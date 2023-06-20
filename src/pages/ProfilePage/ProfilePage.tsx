import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import { BackButton } from "./ProfilePageStyle";

const ProfilePage = () => {
  return (
    <>
      
      <Header/>
      <BackButton>
        <Link to="/">
          Voltar para Home
        </Link>
      </BackButton>
    </>
  );
};

export default ProfilePage;
