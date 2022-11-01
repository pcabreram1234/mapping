import React, { useState, useEffect, useRef } from "react";
import "../styles/SearchMenu.css";
import RestaurantIcon from "../assets/icons/restaurants.svg";
import ParksIcon from "../assets/icons/parks.svg";
import BarsIcon from "../assets/icons/bars.svg";

const SearchMenu = ({ setShowPopUp, isReseted, setIsReseted }) => {
  const [radioValue, setRadioValue] = useState([10]);
  const [placeToSearch, setPlaceToSearhc] = useState([]);

  const restBtnRef = useRef();
  const parksBtnRef = useRef();
  const barsBtnRef = useRef();

  const handleClick = (el) => {
    el.currentTarget.classList.toggle("button_active");
  };

  useEffect(() => {
    setIsReseted(false);
  });

  if (isReseted === true) {
    restBtnRef.current.classList.remove("button_active");
    parksBtnRef.current.classList.remove("button_active");
    barsBtnRef.current.classList.remove("button_active");
    console.log("reset");
  }

  return (
    <aside className="SearchMenu__container">
      <div className="title">
        <h2>FIND YOUR PLACE</h2>
        <p>
          Findyourplace, te permite buscar e forma rápida restaurantes, parques
          y bares para que puedas descansar o trabajar fuera de casa
        </p>
        <input
          type={"search"}
          id="search"
          value={placeToSearch}
          onInput={(e) => {
            setPlaceToSearhc(e.currentTarget.value);
          }}
          placeholder="Encuentra espacios para trabajar y descansar"
        />
      </div>

      <hr />
      <div className="featured">
        <h2>Destacados</h2>
        <p>
          Selecciona algunos de los marcadores por defecto que hemos
          seleccionado para ti
        </p>
        <button ref={restBtnRef} id="restaurants" onClick={handleClick}>
          <img src={RestaurantIcon} />
          Restaurantes
        </button>

        <button ref={parksBtnRef} className="parks" onClick={handleClick}>
          <img src={ParksIcon} />
          Parques y sitios al aire libre
        </button>
        <button ref={barsBtnRef} className="bars" onClick={handleClick}>
          <img src={BarsIcon} />
          Bares
        </button>

        <div className="slider_container">
          <h2>Distáncia desde mi posición ({radioValue}km)</h2>
          <input
            type={"range"}
            name="distance_slider"
            id="distance_slider"
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
            }}
            max={100}
            defaultValue={radioValue}
          />
        </div>
      </div>

      <hr />
      <button
        id="seach_button"
        className="green_button "
        type="buton"
        onClick={() => {
          setShowPopUp(true);
        }}
      >
        BUSCAR
      </button>
    </aside>
  );
};

export default SearchMenu;
