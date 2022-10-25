import React from "react";

const PopUpModal = () => {
  return (
    <div>
      <h2>Ups, no hemos encontrado nada</h2>
      <p>
        No hemos encontrado ningún resultado con la busqueda que estás
        intentando realizar.
      </p>
      <button id="close_popup_button" className="green_button" type="button">
        Cerrar
      </button>
    </div>
  );
};

export default PopUpModal;
