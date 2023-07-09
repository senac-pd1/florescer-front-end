import axios from "axios";
import { Flower } from "../interfaces/interfaces";

const fetchUserInfo = async () => {
  try {
    const accessToken = localStorage.getItem("token");
    const userToken = localStorage.getItem("id");

    if (!accessToken || !userToken) {
      console.error("Tokens não encontrados no localStorage.");
      return null;
    }
    const parsedUserToken = JSON.parse(userToken);
    return { userToken: { id: parsedUserToken.id }, accessToken };
  } catch (error) {
    console.error("Erro ao buscar informações do localStorage:", error);
    return null;
  }
};

export const getFlowerNamesAndImages = async (): Promise<Flower[]> => {
  try {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODg4NjQyMzcsImV4cCI6MTY4ODg3MTQzNywiaWF0IjoxNjg4ODY0MjM3LCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.I_MveCsPxrJZRnm-lGzOZhTmlaoDhzL4EIzfQZJoOVo";
    const token2 = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get("http://localhost:5049/planta", config);
    console.log(response.data);
    console.log(token2);
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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODg4NjQyMzcsImV4cCI6MTY4ODg3MTQzNywiaWF0IjoxNjg4ODY0MjM3LCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.I_MveCsPxrJZRnm-lGzOZhTmlaoDhzL4EIzfQZJoOVo";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `http://localhost:5049/plantaByLuminosity/${luminosity}`,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getFlowerByName = async (name: string): Promise<Flower | null> => {
  try {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODg4NjQyMzcsImV4cCI6MTY4ODg3MTQzNywiaWF0IjoxNjg4ODY0MjM3LCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.I_MveCsPxrJZRnm-lGzOZhTmlaoDhzL4EIzfQZJoOVo";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `http://localhost:5049/plantaByName/${name}`,
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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODg4NjQyMzcsImV4cCI6MTY4ODg3MTQzNywiaWF0IjoxNjg4ODY0MjM3LCJpc3MiOiJGbG9yZXNjZXJBUEkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.I_MveCsPxrJZRnm-lGzOZhTmlaoDhzL4EIzfQZJoOVo";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `http://localhost:5049/plantaById/${id}`,
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

export const addToWishlist = async (id: string) => {
  const userInfo = await fetchUserInfo();
  if (!userInfo) {
    console.error("Erro ao obter informações do usuário.");
    return false;
  }

  const { accessToken } = userInfo;
  const flower = await getFlowerById(id);
  if (!flower) {
    console.error("Planta não encontrada.");
    return false;
  }
  console.log(accessToken);
  console.log("ID da planta:", flower.id);

  const payload = {
    plantId: flower.id,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await axios.post(
    "http://localhost:5049/wishlist/Add",
    payload,
    config
  );

  if (response.data && response.data.success) {
    console.log("Planta adicionada com sucesso!");
    return true;
  } else {
    console.error(
      "Falha em adicionar planta à lista de desejos:",
      response.data?.message
    );
    return false;
  }
};

export const removeFromWishlist = async (idToRemove: any) => {
  const userInfo = await fetchUserInfo();
  console.log(userInfo);
  if (userInfo) {
    const {
      userToken: { id: userId },
      accessToken,
    } = userInfo;
    try {
      const payload = {
        userId,
        plantId: idToRemove,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await axios.post(
        "http://localhost:5049/wishlist/Remove",
        payload,
        config
      );

      if (response.data && response.data.success) {
        console.log("Planta removida com sucesso!");
        return true;
      } else {
        console.error("Falha ao remover planta da lista de desejos.");
        return false;
      }
    } catch (error) {
      console.error("Erro ao remover planta da lista de desejos:", error);
      return false;
    }
  } else {
    console.error("Falha ao capturar informações do usuário.");
    return false;
  }
};

export const addToGarden = async (id: any) => {
  const userInfo = await fetchUserInfo();
  console.log(userInfo);
  if (userInfo) {
    const {
      userToken: { id: userId },
      accessToken,
    } = userInfo;
    try {
      const payload = {
        userId,
        plantId: id,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await axios.post(
        "http://localhost:5049/meujardim/Add",
        payload,
        config
      );

      if (response.data && response.data.success) {
        console.log("Planta adicionada ao jardim com sucesso!");
        return true;
      } else {
        console.error("Falha ao adicionar planta ao jardim.");
        return false;
      }
    } catch (error) {
      console.error("Erro ao adicionar planta ao jardim:", error);
      return false;
    }
  } else {
    console.error("Falha ao capturar informações do usuário.");
    return false;
  }
};

export const removeFromGarden = async (idToRemove: any) => {
  const userInfo = await fetchUserInfo();
  console.log(userInfo);
  if (userInfo) {
    const {
      userToken: { id: userId },
      accessToken,
    } = userInfo;
    try {
      const payload = {
        userId,
        plantId: idToRemove,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await axios.post(
        "http://localhost:5049/meujardim/Remove",
        payload,
        config
      );

      if (response.data && response.data.success) {
        console.log("Planta removida do jardim com sucesso!");
        return true;
      } else {
        console.error("Falha ao remover planta do jardim.");
        return false;
      }
    } catch (error) {
      console.error("Erro ao remover planta do jardim:", error);
      return false;
    }
  } else {
    console.error("Falha ao capturar informações do usuário.");
    return false;
  }
};
