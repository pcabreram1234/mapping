import React, { useState, useRef } from "react";
import "../styles/SearchMenu.css";
import RestaurantIcon from "../assets/icons/restaurants.svg";
import ParksIcon from "../assets/icons/parks.svg";
import BarsIcon from "../assets/icons/bars.svg";

const SearchMenu = () => {
  const handleClick = (el) => {
    el.currentTarget.classList.toggle("button_active");
  };

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
        <button id="restaurants" onClick={handleClick}>
          <img src={RestaurantIcon} />
          Restaurantes
        </button>

        <button className="parks" onClick={handleClick}>
          <img src={ParksIcon} />
          Parques y sitios al aire libre
        </button>
        <button className="bars" onClick={handleClick}>
          <img src={BarsIcon} />
          Bares
        </button>

        <div className="slider_container">
          <h2>Distáncia desde mi posición (10km)</h2>
          <input
            type="range"
            name="distance_slider"
            id="distance_slider"
            onChange={(e) => {
              console.log(e);
            }}
            max={100}
            value={30}
          />
        </div>
      </div>

      <hr />
      <button id="seach_button" className="green_button" type="buton">
        BUSCAR
      </button>
    </aside>
  );
};

export default SearchMenu;
