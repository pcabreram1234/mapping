import React from "react";
import "../styles/PopUpModal.css";

const PopUpModal = ({ setShowPopUp, setIsReseted }) => {
  return (
    <div className="modal" aria-modal>
      <h2>Ups, no hemos encontrado nada</h2>
      <p>
        No hemos encontrado ningún resultado con la busqueda que estás
        intentando realizar.
      </p>
      <button
        id="close_popup_button"
        className="green_button"
        type="button"
        onClick={() => {
          setShowPopUp(false);
          setIsReseted(true);
        }}
      >
        Cerrar
      </button>
    </div>
  );
};

export default PopUpModal;
