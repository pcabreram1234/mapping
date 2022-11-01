import React, { useState } from "react";
import SearchMenu from "../components/SearchMenu";
import PopUpModal from "../components/PopUpModal";
import Map from "../components/Map";
import "../styles/Home.css";

const Home = () => {
  /* Modals */
  const [showPopUp, setShowPopUp] = useState(false);

  const [isReseted, setIsReseted] = useState(false);

  return (
    <div className="home">
      <SearchMenu
        setShowPopUp={setShowPopUp}
        isReseted={isReseted}
        setIsReseted={setIsReseted}
      />
      <Map />
      {showPopUp && (
        <PopUpModal setShowPopUp={setShowPopUp} setIsReseted={setIsReseted} />
      )}
    </div>
  );
};

export default Home;
