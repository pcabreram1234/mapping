import React, { useState } from "react";
import SearchMenu from "../components/SearchMenu";
import PopUpModal from "../components/PopUpModal";
import LeafletMap from "../components/Map";
import "../styles/Home.css";

const INIT_LAT = import.meta.env.VITE_DEFAULT_INIT_LAT;
const INIT_LONG = import.meta.env.VITE_DEFAULT_INIT_LONG;

const Home = () => {
  /* Modals */
  const [showPopUp, setShowPopUp] = useState(false);
  const [isReseted, setIsReseted] = useState(false);

  /* Maps State */
  const [coords, setCoords] = useState([]);
  const [placeName, setPlaceName] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [center, setCenter] = useState([INIT_LAT, INIT_LONG]);
  return (
    <div className="home">
      <SearchMenu
        setCoords={setCoords}
        setPlaceName={setPlaceName}
        setShowPopUp={setShowPopUp}
        setSearchButtonClicked={setSearchButtonClicked}
        setCenter={setCenter}
      />
      <LeafletMap
        coords={coords}
        placeName={placeName}
        searchButtonClicked={searchButtonClicked}
        center={center}
      />
      {showPopUp && (
        <PopUpModal setShowPopUp={setShowPopUp} setIsReseted={setIsReseted} />
      )}
    </div>
  );
};

export default Home;
