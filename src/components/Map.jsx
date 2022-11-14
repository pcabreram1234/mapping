import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./maps/LocatioMarker";
import PlaceFoundedLocation from "./maps/PlaceFoundedLocatation";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../styles/Map.css";

const GOOGLE_URL_MAP = import.meta.env.VITE_GOOGLE_URL_MAP;

export default function LeafletMap({
  coords,
  placeName,
  searchButtonClicked,
  center,
  setSearchButtonClicked,
}) {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    console.log(coords, placeName);
  }, [coords]);

  return (
    <MapContainer center={center} zoom={20}>
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
      {coords.length > 0 && (
        <PlaceFoundedLocation
          coords={coords}
          placeName={placeName}
          searchButtonClicked={searchButtonClicked}
          setSearchButtonClicked={setSearchButtonClicked}
        />
      )}
    </MapContainer>
  );
}
