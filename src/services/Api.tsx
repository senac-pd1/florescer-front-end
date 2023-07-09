import axios from "axios";
import { Flower } from "../interfaces/interfaces";

export const getFlowerNamesAndImages = async (): Promise<Flower[]> => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      "https://florescerapi.azurewebsites.net/planta",
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getFlowerByLuminosity = async (
  luminosity: string
): Promise<Flower[]> => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://florescerapi.azurewebsites.net/plantaByLuminosity/${luminosity}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getFlowerByName = async (name: string): Promise<Flower | null> => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://florescerapi.azurewebsites.net/plantaByName/${name}`,
      config
    );

    if (response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getFlowerById = async (id: string): Promise<Flower | null> => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://florescerapi.azurewebsites.net/plantaById/${id}`,
      config
    );

    if (response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
