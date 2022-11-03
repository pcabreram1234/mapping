import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./maps/LocatioMarker";

import "../../node_modules/leaflet/dist/leaflet.css";
import "../styles/Map.css";

const GOOGLE_URL_MAP = import.meta.env.VITE_GOOGLE_URL_MAP;
const INIT_LAT = import.meta.env.VITE_DEFAULT_INIT_LAT;
const INIT_LONG = import.meta.env.VITE_DEFAULT_INIT_LONG;

export default function LeafletMap({ coords }) {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <MapContainer center={[INIT_LAT, INIT_LONG] || coords} zoom={20}>
      <TileLayer
        url={GOOGLE_URL_MAP}
        attribution='&copy; <a href="https://www.google.com/intl/en-GB_ALL/permissions/geoguidelines/">Google Maps</a> contributors'
      />
      <button
        style={{
          position: "fixed",
          zIndex: "9999",
          left: "95%",
          top: "95%",
          cursor: "pointer",
        }}
        onClick={() => {
          setShowPopUp(true);
        }}
      >
        📍
      </button>

      {showPopUp && <LocationMarker />}
    </MapContainer>
  );
}
