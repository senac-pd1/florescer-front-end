import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import UserGarden from "../../containers/UserGarden/UserGarden";
import { UserWishlist } from "../../containers/UserWishlist/UserWishlist";
import { getWishlist, deleteItemWishlist } from "../../services/ApiProfile";
import { useEffect, useState } from "react";
import { PlanstInterface } from "../../model/PlanstInterface";
import { ContainerProfilePage } from "./ProfilePageStyle";

const ProfilePage = () => {
  const [wishlist, setWishlist] = useState([]);

  const getWishlistRequest = async (userId: string) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODgzMzU4MjQsImV4cCI6MTY4ODM0MzAyNCwiaWF0IjoxNjg4MzM1ODI0LCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.XR_ItkT4w8zh7xSyFlRlvOPWcjoOPcBkpdHPdativdU";

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
    getWishlistRequest("d381ccba-990e-47a3-afcc-4219d8337a28");
  }, []);

  return (
    <ContainerProfilePage>
      <Header />
      <UserGarden />
      <UserWishlist
        wishlistPlants={wishlist}
        onDeletePlant={handleDeletePlant}
      />
    </ContainerProfilePage>
  );
};

export default ProfilePage;
