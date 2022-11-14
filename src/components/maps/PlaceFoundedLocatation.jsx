import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const PlaceFoundedLocation = ({
  coords,
  placeName,
  searchButtonClicked,
  setSearchButtonClicked,
}) => {
  const map = useMap();

  const handleLocate = () => {
    map.setView(coords, 10);
  };

  handleLocate();

  useEffect(() => {
    handleLocate();
  }, [setSearchButtonClicked()]);

  return (
    <Marker position={coords}>
      <Popup>{placeName}</Popup>
    </Marker>
  );
};

export default PlaceFoundedLocation;
