import React, { useEffect, useState } from "react";
import axios from "axios";

// const Map = () => {
//   const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const response = await axios.get("https://ipapi.co/json/");
//         const { latitude, longitude } = response.data;
//         setLocation({
//           accuracy: 0,
//           altitude: null,
//           altitudeAccuracy: null,
//           heading: null,
//           latitude: parseFloat(latitude),
//           longitude: parseFloat(longitude),
//           speed: null,
//         });
//       } catch (error) {
//         setError("Failed to fetch location.");
//       }
//     };

//     fetchLocation();
//   }, []);

//   useEffect(() => {
//     if (location) {
//       // Aqui você pode fazer a chamada à API do Google Maps para buscar floriculturas próximas com base na latitude e longitude
//       // Exemplo de código:
//       // const fetchNearbyFlorists = async () => {
//       //   try {
//       //     const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=5000&type=florist&key=YOUR_API_KEY`);
//       //     // Processar a resposta da API do Google Maps
//       //   } catch (error) {
//       //     setError('Failed to fetch nearby florists.');
//       //   }
//       // };
//       // fetchNearbyFlorists();
//     }
//   }, [location]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!location) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       Latitude: {location.latitude}, Longitude: {location.longitude}
//     </div>
//   );
// };

// export default Map;

const Map: React.FC = () => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          "https://geoip.maxmind.com/geoip/v2.1/city/me?demo=1",
          {
            headers: {
              Authorization: "Bearer YOUR_API_KEY", //conseguir chave
            },
          }
        );

        const { latitude, longitude } = response.data.location;
        setLocation({
          accuracy: 0,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          speed: null,
        });
      } catch (error) {
        setError("Failed to fetch location.");
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    if (location) {
      // Aqui você pode fazer a chamada à API do Google Maps para buscar floriculturas próximas com base na latitude e longitude
      // Exemplo de código:
      // const fetchNearbyFlorists = async () => {
      //   try {
      //     const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=5000&type=florist&key=YOUR_API_KEY`);
      //     // Processar a resposta da API do Google Maps
      //   } catch (error) {
      //     setError('Failed to fetch nearby florists.');
      //   }
      // };
      // fetchNearbyFlorists();
    }
  }, [location]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Latitude: {location.latitude}, Longitude: {location.longitude}
    </div>
  );
};

export default Map;
