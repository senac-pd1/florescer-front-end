import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <h2>Profile page</h2>
      <Link to="/">
        <a>Voltar para Home</a>
      </Link>
    </>
  );
};

export default ProfilePage;
