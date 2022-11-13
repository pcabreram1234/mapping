import React, { useState, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const PlaceFoundedLocation = ({ coords, placeName }) => {
  const [position, setPosition] = useState(coords);

  const map = useMap();

  const handleLocate = () => {
    map.locate({ setView: true }).setView(coords, 10);
  };

  useEffect(() => {
    handleLocate();
  }, []);

  return (
    coords.length > 0 && (
      <Marker position={position}>
        <Popup>{placeName}</Popup>
      </Marker>
    )
  );
};

export default PlaceFoundedLocation;
