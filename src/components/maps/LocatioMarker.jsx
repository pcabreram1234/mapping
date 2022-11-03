import React, { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import "../../styles/LocationMarker.css";

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
    locationerror(e) {
      console.log(e.message);
    },
    update() {
      console.log(position);
    },
    load() {
      map.locate();
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;
