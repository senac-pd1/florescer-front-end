import axios from "axios";

export const getWishlist = (userId: string, token: string) =>
  axios.create({
    baseURL: `https://florescerapi.azurewebsites.net/wishlist/${userId}`,
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
