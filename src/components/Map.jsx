import React, { useEffect } from "react";
import { initMap } from "../maps";
import "../styles/Map.css";

const MapContainer = () => {
  useEffect(() => {
    initMap("map_container");
  }, []);
  return <div id="map_container"></div>;
};

export default MapContainer;
