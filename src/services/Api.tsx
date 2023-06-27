import axios from "axios";
import { Flower } from "../interfaces/interfaces";

export const getFlowerNamesAndImages = async (): Promise<Flower[]> => {
  try {
    const response = await axios.get("http://localhost:3000/plants");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchFlowers = async (query: string): Promise<Flower[]> => {
  try {
    const response = await axios.get(
      `http://localhost:3000/plants?q=${encodeURIComponent(query)}`
    );
    console.log(response.data); // Verificar formato dos dados
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
