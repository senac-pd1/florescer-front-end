import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface Floricultura {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface MapProps {
  apiKey: string;
  address: string;
}

const Map: React.FC<MapProps> = ({ apiKey, address }) => {
  const [floriculturas, setFloriculturas] = useState<Floricultura[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const markers: google.maps.Marker[] = []; // Armazena referências aos marcadores

  const loadMap = async () => {
    const loader = new Loader({
      apiKey: apiKey,
      libraries: ["places"],
    });

    await loader.load();

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address }, (results, status) => {
      if (
        status === google.maps.GeocoderStatus.OK &&
        results &&
        results.length > 0
      ) {
        const location = results[0].geometry.location;
        const mapBounds = {
          nw: {
            lat: location.lat() + 0.1,
            lng: location.lng() - 0.1,
          },
          se: {
            lat: location.lat() - 0.1,
            lng: location.lng() + 0.1,
          },
        };

        const map = new google.maps.Map(mapRef.current!, {
          center: location,
          zoom: 12,
        });

        const placesService = new google.maps.places.PlacesService(map);
        const request = {
          bounds: {
            north: mapBounds.nw.lat,
            south: mapBounds.se.lat,
            east: mapBounds.se.lng,
            west: mapBounds.nw.lng,
          },
          type: "florist",
        };

        placesService.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            const floriculturasData: Floricultura[] = results
              .filter(
                (result) =>
                  result.geometry !== undefined &&
                  result.geometry.location !== undefined
              )
              .map((result) => ({
                name: result.name ?? "",
                address: result.vicinity ?? "",
                lat: result.geometry!.location!.lat(),
                lng: result.geometry!.location!.lng(),
              }));

            setFloriculturas(floriculturasData);

            // Adiciona marcadores para as floriculturas
            floriculturasData.forEach((floricultura) => {
              const marker = new google.maps.Marker({
                position: { lat: floricultura.lat, lng: floricultura.lng },
                map: map,
                title: floricultura.name,
              });

              markers.push(marker); // Armazena referência ao marcador
            });

            // Adiciona marcador para o endereço com cor diferente
            const addressMarker = new google.maps.Marker({
              position: { lat: location.lat(), lng: location.lng() },
              map: map,
              title: "Endereço",
              icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
              },
            });

            markers.push(addressMarker); // Armazena referência ao marcador do endereço
          }
        });
      }
    });
  };

  useEffect(() => {
    loadMap();

    // Limpa os marcadores quando o componente for desmontado
    return () => {
      markers.forEach((marker) => {
        marker.setMap(null);
      });
    };
  }, []);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <div ref={mapRef} style={{ height: "100%", width: "100%" }}></div>
      <ul>
        {floriculturas.map((floricultura, index) => (
          <li key={index}>
            <strong>{floricultura.name}</strong>
            <p>{floricultura.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
