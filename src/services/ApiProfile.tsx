import axios from "axios";

export const getWishlist = (userId: string, token: string) =>
  axios.create({
    baseURL: `http://localhost:5049/wishlist/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getPlantById = (plantId: string, token: string) =>
  axios.create({
    baseURL: `http://localhost:5049/plantaById/${plantId}`,
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
    baseURL: `http://localhost:5049/wishlist/Remove`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getMyGarden = (userId: string, token: string) =>
  axios.create({
    baseURL: `http://localhost:5049/meujardim/${userId}`,
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
    baseURL: `http://localhost:5049/meujardim/Remove`,
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
    baseURL: "http://localhost:5049/wishlist/Add",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addToGarden = (plantId: string, userId: string, token: string) => {
  return axios.create({
    baseURL: "http://localhost:5049/meujardim/Add",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
