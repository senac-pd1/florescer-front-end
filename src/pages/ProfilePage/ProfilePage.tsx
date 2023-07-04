import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import UserGarden from "../../containers/UserGarden/UserGarden";
import { UserWishlist } from "../../containers/UserWishlist/UserWishlist";
import {
  getWishlist,
  deleteItemWishlist,
  getMyGarden,
} from "../../services/ApiProfile";
import { useEffect, useState } from "react";
import { PlanstInterface } from "../../model/PlanstInterface";
import { ContainerProfilePage } from "./ProfilePageStyle";

const ProfilePage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [garden, setGarden] = useState([]);

  const getWishlistRequest = async (userId: string) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODg0MjY3MTAsImV4cCI6MTY4ODQzMzkxMCwiaWF0IjoxNjg4NDI2NzEwLCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.xMWkzcSsyA1J21FZazpt0Do3yTvbcRDU9MP8-yng0OI";

    try {
      const wishlistService = getWishlist(userId, token);
      const response = await wishlistService.get("");

      if (response.data) {
        setWishlist(response.data);
      }
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  const getGardenRequest = async (userId: string) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODg0MjY3MTAsImV4cCI6MTY4ODQzMzkxMCwiaWF0IjoxNjg4NDI2NzEwLCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.xMWkzcSsyA1J21FZazpt0Do3yTvbcRDU9MP8-yng0OI";

    try {
      const gardenService = getMyGarden(userId, token);
      const response = await gardenService.get("");
      if (response.data) {
        setGarden(response.data);
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

  const handleGardenPlantDelete = (plantId: string) => {
    const updatedGarden = garden.filter(
      (plant: PlanstInterface) => plant.id !== plantId
    );
    setGarden(updatedGarden);
  };

  useEffect(() => {
    getWishlistRequest("d381ccba-990e-47a3-afcc-4219d8337a28");
    getGardenRequest("d381ccba-990e-47a3-afcc-4219d8337a28");
  }, []);

  return (
    <ContainerProfilePage>
      <Header />
      <UserGarden
        gardenPlants={garden}
        onDeletePlant={handleGardenPlantDelete}
      />
      <UserWishlist
        wishlistPlants={wishlist}
        onDeletePlant={handleDeletePlant}
      />
    </ContainerProfilePage>
  );
};

export default ProfilePage;
