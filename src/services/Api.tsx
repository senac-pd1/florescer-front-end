import axios from "axios";

const api = axios.create({
  baseURL: "https://house-plants2.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "560e7b5defmsh91395a5338028e2p169d4fjsn5d8167d2a289",
    "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

export interface Flower {
  name: string;
  img: string;
}

export async function getFlowerNamesAndImages(): Promise<Flower[]> {
  try {
    const response = await axios.get("/all-lite");
    const flowers = response.data.slice(0, 3);
    const flowerData = flowers.map((flower: { [x: string]: any; Img: any }) => {
      return { name: flower["Common name"], img: flower.Img };
    });
    return flowerData;
  } catch (error) {
    console.error(error);
    return [];
  }
}
