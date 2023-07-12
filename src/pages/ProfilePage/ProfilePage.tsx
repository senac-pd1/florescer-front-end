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
import SearchFlourish from "../../containers/SearchFlourish/SearchFlourish";

const ProfilePage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [garden, setGarden] = useState([]);
  const apiKey = "AIzaSyCfwZVHe-xEmqaDL3w_uDF1lZvL5P3E0Ck";

  const getWishlistRequest = async (userId: string | any) => {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        const wishlistService = getWishlist(userId, token);
        const response = await wishlistService.get("");

        if (response.data) {
          setWishlist(response.data);
        }
      }
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  const getGardenRequest = async (userId: string | any) => {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        const gardenService = getMyGarden(userId, token);
        const response = await gardenService.get("");
        if (response.data) {
          setGarden(response.data);
        }
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
    getWishlistRequest(localStorage.getItem("id"));
    getGardenRequest(localStorage.getItem("id"));
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
      <SearchFlourish apiKey={apiKey} />
    </ContainerProfilePage>
  );
};

export default ProfilePage;
