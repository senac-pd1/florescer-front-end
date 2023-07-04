import axios from "axios";

//adicionar dotenv
export const getWishlist = (userId: string, token: string) =>
  axios.create({
    baseURL: `http://localhost:5049/wishlist/${userId}`,
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
