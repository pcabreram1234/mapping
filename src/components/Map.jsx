import React, { useEffect } from "react";
import L from "leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../styles/Map.css";

export default function LeafletMap() {
  useEffect(() => {
    map();
    console.log(mapRef);
  }, []);

  const map = () => {
    const mapInstance = L.map("map_container").setView([51.505, -0.09], 13);
  };

  return <div id="map_container"></div>;
}
