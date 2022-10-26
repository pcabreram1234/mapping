import React, { useState } from "react";
import SearchMenu from "../components/SearchMenu";
import PopUpModal from "../components/PopUpModal";
import MapContainer from "../components/Map";
import "../styles/Home.css";
const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className="home">
      <SearchMenu setShowPopUp={setShowPopUp} />
      <MapContainer />
      {showPopUp && <PopUpModal setShowPopUp={setShowPopUp} />}
    </div>
  );
};

export default Home;
