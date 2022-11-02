import React, { useEffect, useState } from "react";
import L from "leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../styles/Map.css";

const GOOGLE_URL_MAP = import.meta.env.VITE_GOOGLE_URL_MAP;
const INIT_LAT = import.meta.env.VITE_DEFAULT_INIT_LAT;
const INIT_LONG = import.meta.env.VITE_DEFAULT_INIT_LONG;

export default function LeafletMap() {
  const [map, setMap] = useState(null);

  const initMap = () => {
    let container = L.DomUtil.get("map_container");

    if (container != null) {
      container._leaflet_id = null;
    }

    let map = L.map(container).setView([INIT_LAT, INIT_LONG], 13);

    L.tileLayer(GOOGLE_URL_MAP, {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.google.com/intl/en-GB_ALL/permissions/geoguidelines/">Google Maps</a>',
    }).addTo(map);

    map.locate({ setView: true, maxZoom: 16 });
    // to use after the map is created, you can export the map object or use a ref

    setMap(map);
    return map;
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <div
      id="map_container"
      style={{ height: "100vh", touchAction: "manipulation" }}
    ></div>
  );
}
