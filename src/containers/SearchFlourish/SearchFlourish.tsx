import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import markerAddress from "./../../assets/markerAddress.png";
import markerFlourish from "./../../assets/markerFlourish.png";
import {
  ButtonSubmit,
  ContainerSearchFlourish,
  InputSearch,
  MapContainer,
  SearchContainer,
  TitleMap,
} from "./SearchFlourishStyle";
interface Flourish {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface MapProps {
  apiKey: string;
}

const SearchFlourish: React.FC<MapProps> = ({ apiKey }) => {
  const [flourish, setFlourish] = useState<Flourish[]>([]);
  const [address, setAddress] = useState("Porto Alegre");
  const [searchClicked, setSearchClicked] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const markers: google.maps.Marker[] = [];

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
          zoom: 15,
          styles: [
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
          ],
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
            const floriculturasData: Flourish[] = results
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

            setFlourish(floriculturasData);

            floriculturasData.forEach((flourish) => {
              const marker = new google.maps.Marker({
                position: { lat: flourish.lat, lng: flourish.lng },
                map: map,
                title: flourish.name,
                icon: markerFlourish,
                animation: google.maps.Animation.DROP,
              });
              const infowindow = new google.maps.InfoWindow({
                content: `<strong>${flourish.name}</strong><br>${flourish.address}`,
              });

              marker.addListener("click", () => {
                infowindow.open(map, marker);
              });
              markers.push(marker);
            });

            const addressMarker = new google.maps.Marker({
              position: { lat: location.lat(), lng: location.lng() },
              map: map,
              title: "Endereço",
              icon: markerAddress,
              animation: google.maps.Animation.DROP,
            });
            const infowindow = new google.maps.InfoWindow({
              content: "Você está aqui!",
            });

            addressMarker.addListener("click", () => {
              infowindow.open(map, addressMarker);
            });
            markers.push(addressMarker);
          }
        });
      }
    });
  };

  const handleSearch = () => {
    setSearchClicked(true);
  };

  useEffect(() => {
    if (searchClicked || address === "Porto Alegre") {
      loadMap();
      setSearchClicked(false);
    }
    return () => {
      markers.forEach((marker) => {
        marker.setMap(null);
      });
    };
  }, [searchClicked]);

  return (
    <ContainerSearchFlourish>
      <TitleMap>Lojas próximas</TitleMap>
      <SearchContainer>
        <InputSearch
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Digite o endereço"
        />
        <ButtonSubmit onClick={handleSearch}>Buscar</ButtonSubmit>
      </SearchContainer>
      <MapContainer ref={mapRef}></MapContainer>
      {/* <ul>
        {flourish.map((flourish, index) => (
          <li key={index}>
            <strong>{flourish.name}</strong>
            <p>{flourish.address}</p>
          </li>
        ))}
      </ul> */}
    </ContainerSearchFlourish>
  );
};

export default SearchFlourish;
