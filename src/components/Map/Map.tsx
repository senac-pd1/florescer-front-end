import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "800px",
  borderRadius: "0px 0px 10px 10px",
};

const center = {
  lat: -30.005793238843143,
  lng: -51.15629610313375,
};
const mapOptions = {
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
};

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const checkGoogleMapsLoaded = setInterval(() => {
      if (window.google && window.google.maps) {
        setMapLoaded(true);
        clearInterval(checkGoogleMapsLoaded);
      }
    }, 100);
    return () => clearInterval(checkGoogleMapsLoaded);
  }, []);

  const markers = [
    { lat: -30.005793238843143, lng: -51.15629610313375 },
    { lat: -30.008868479727226, lng: -51.156746714349126 },
    // Adicione mais marcadores conforme necessário
  ];

  const calculateBounds = () => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach((marker) => {
      bounds.extend(marker);
    });
    return bounds;
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCNQzehFbFXA2dW9GgXxiKNVo3RecpdP7Q">
      {mapLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={(map) => {
            const bounds = calculateBounds();
            map.fitBounds(bounds);
          }}
          options={{
            scrollwheel: true,
            zoomControl: true,
            minZoom: 4,
            maxZoom: 20,
            styles: mapOptions.styles,
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              animation={window.google.maps.Animation.DROP}
              icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            />
          ))}
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default Map;
