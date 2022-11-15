import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadowIcon from "leaflet/dist/images/marker-shadow.png";

const PlaceFoundedLocation = ({
  coords,
  placeName,
  setSearchButtonClicked,
}) => {
  const map = useMap();

  const leafletIcon = L.icon({
    iconUrl: MarkerIcon,
    shadowUrl: MarkerShadowIcon,
    iconSize: [20, 35],
    shadowSize: [25, 40],
  });

  const handleLocate = () => {
    map.setView(coords, 10);
  };

  handleLocate();

  useEffect(() => {
    handleLocate();
    console.log(Marker);
  }, [setSearchButtonClicked()]);

  return (
    <Marker icon={leafletIcon} position={coords}>
      <Popup>{placeName}</Popup>
    </Marker>
  );
};

export default PlaceFoundedLocation;
