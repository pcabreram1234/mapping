import React from "react";
import "../styles/LocateButton.css";
const LocateButton = () => {
  return (
    <div className="ol-control ol-unselectable locate">
      <button title="Locate me">◎</button>
    </div>
  );
};

export default LocateButton;
