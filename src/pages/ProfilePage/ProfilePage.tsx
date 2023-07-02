import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import { BackButton } from "./ProfilePageStyle";
import UserGarden from "../../containers/UserGarden/UserGarden";
import { UserWishlist } from "../../containers/UserWishlist/UserWishlist";
import { getWishlist, deleteItemWishlist } from "../../services/ApiProfile";
import { useEffect, useState } from "react";
import { PlanstInterface } from "../../model/PlanstInterface";

const ProfilePage = () => {
  const [wishlist, setWishlist] = useState([]);

  const getWishlistRequest = async (userId: string) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODgzMzExMDQsImV4cCI6MTY4ODMzODMwNCwiaWF0IjoxNjg4MzMxMTA0LCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.IZYbQ6aCQwmAcjHC4LBy895Ehh4cC2C9SHA7MGvov9g";

    try {
      const wishlistService = getWishlist(userId, token);
      const response = await wishlistService.get("");

      if (response.data) {
        console.log(response.data);
        setWishlist(response.data);
      }
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  const handleDeletePlant = (plantId: string) => {
    const updatedWishlist = wishlist.filter(
      (plant: PlanstInterface) => plant.id !== plantId
    );
    setWishlist(updatedWishlist);
  };

  useEffect(() => {
    getWishlistRequest("63fe3802-07b8-42e4-bbdd-9f9ca514dd27");
  }, []);

  return (
    <>
      <Header />
      <BackButton>
        <Link to="/">Voltar para Home</Link>
      </BackButton>
      <UserGarden />
      <UserWishlist
        wishlistPlants={wishlist}
        onDeletePlant={handleDeletePlant}
      />
    </>
  );
};

export default ProfilePage;
