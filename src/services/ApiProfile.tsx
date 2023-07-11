import axios from "axios";

export const getWishlist = (userId: string, token: string) =>
  axios.create({
    baseURL: `https://florescerapi.azurewebsites.net/wishlist/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getPlantById = (plantId: string, token: string) =>
  axios.create({
    baseURL: `https://florescerapi.azurewebsites.net/plantaById/${plantId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const deleteItemWishlist = (
  userId: string,
  token: string,
  plantsId: string
) =>
  axios.create({
    baseURL: `https://florescerapi.azurewebsites.net/wishlist/Remove`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getMyGarden = (userId: string, token: string) =>
  axios.create({
    baseURL: `https://florescerapi.azurewebsites.net/meujardim/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deletePlantMyGarden = (
  userId: string,
  token: string,
  plantsId: string
) =>
  axios.create({
    baseURL: `https://florescerapi.azurewebsites.net/meujardim/Remove`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const addToWishlist = (
  plantId: string,
  userId: string,
  token: string
) => {
  return axios.create({
    baseURL: "https://florescerapi.azurewebsites.net/wishlist/Add",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addToGarden = (plantId: string, userId: string, token: string) => {
  return axios.create({
    baseURL: "https://florescerapi.azurewebsites.net/meujardim/Add",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
