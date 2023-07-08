import React, { useEffect, useState } from "react";
import { getFlowerNamesAndImages } from "../../services/Api";
import { Flower } from "../../interfaces/interfaces";

const PlantListing: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const fetchedFlowers = await getFlowerNamesAndImages();
        setFlowers(fetchedFlowers);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlowers();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Carregando as plantinhas...</p>
      ) : error ? (
        <p>Erro ao carregar as plantinhas. Tente novamente mais tarde.</p>
      ) : flowers.length > 0 ? (
        flowers.map((flower) => (
          <div key={flower.id}>
            <h2>{flower.name}</h2>
            <img src={flower.img} alt={flower.name} />
          </div>
        ))
      ) : (
        <p>Não há plantinhas disponíveis no momento.</p>
      )}
    </div>
  );
};

export default PlantListing;
