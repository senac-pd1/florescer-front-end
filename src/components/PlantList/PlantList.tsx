/*import React, { useEffect, useState } from "react";
import { getFlowerNamesAndImages } from "../../services/Api";
import { Flower } from "../../interfaces/interfaces";

const PlantListing: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      const fetchedFlowers = await getFlowerNamesAndImages();
      setFlowers(fetchedFlowers);
    };

    fetchFlowers();
  }, []);

  const handleWishlistClick = (id: string) => {};

  return (
    <div>
      {Array.isArray(flowers) && flowers.length > 0 ? (
        flowers.map((flower) => (
          <div key={flower.Id}>
            <h2>{flower.Name}</h2>
            <img src={flower.Img} alt={flower.Name} />
          </div>
        ))
      ) : (
        <p>Não foi possível carregar as plantinhas.</p>
      )}
    </div>
  );
};

export default PlantListing;
*/
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

  const handleWishlistClick = (id: string) => {
    // Lógica para manipular o clique no botão de lista de desejos
  };

  return (
    <div>
      {isLoading ? (
        <p>Carregando as plantinhas...</p>
      ) : error ? (
        <p>Erro ao carregar as plantinhas. Tente novamente mais tarde.</p>
      ) : flowers.length > 0 ? (
        flowers.map((flower) => (
          <div key={flower.Id}>
            <h2>{flower.Name}</h2>
            <img src={flower.Img} alt={flower.Name} />
          </div>
        ))
      ) : (
        <p>Não há plantinhas disponíveis no momento.</p>
      )}
    </div>
  );
};

export default PlantListing;
