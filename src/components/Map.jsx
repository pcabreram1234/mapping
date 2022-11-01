import React, { useEffect, useState } from "react";
import { initMap } from "../utils/maps";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../styles/Map.css";

const lat = import.meta.env.VITE_DEFAULT_INIT_LAT;
const long = import.meta.env.VITE_DEFAULT_INIT_LONG;
const mapContainer = import.meta.env.VITE_MAP_CONTAINER;

const Map = () => {
  const [coords, setCoords] = useState([lat, long]);

  useEffect(() => {
    initMap();
  }, []);

  return <div id="map_container"></div>;
};

export default Map;
