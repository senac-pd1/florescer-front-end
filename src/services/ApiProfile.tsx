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
