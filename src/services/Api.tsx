import axios from "axios";

export interface Flower {
  name: string;
  img: string;
}

export const getFlowerNamesAndImages = async (): Promise<Flower[]> => {
  try {
    const response = await axios.get(
      "https://house-plants2.p.rapidapi.com/all-lite",
      {
        headers: {
          "X-RapidAPI-Key":
            "98764d8283msh44e3045e871b413p1ae8b4jsne57ce0a4493c",
          "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data.slice(0, 8).map((flower: any) => ({
      name: flower["Common name"],
      img: flower.Img,
    }));
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchFlowers = async (query: string): Promise<Flower[]> => {
  try {
    const response = await axios.get(
      `https://house-plants2.p.rapidapi.com/all-lite?q=${query}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "98764d8283msh44e3045e871b413p1ae8b4jsne57ce0a4493c",
          "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data.slice().map((flower: any) => ({
      name: flower["Common name"],
      img: flower.Img,
    }));

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
