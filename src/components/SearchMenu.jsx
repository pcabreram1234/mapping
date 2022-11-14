import React, { useState, useEffect, useRef } from "react";
import "../styles/SearchMenu.css";
import RestaurantIcon from "../assets/icons/restaurants.svg";
import ParksIcon from "../assets/icons/parks.svg";
import BarsIcon from "../assets/icons/bars.svg";

const HOST = import.meta.env.VITE_HOST;

const SearchMenu = ({
  setShowPopUp,
  setCoords,
  setPlaceName,
  setSearchButtonClicked,
  setCenter,
}) => {
  const [radioValue, setRadioValue] = useState([10]);
  const [placeToSearch, setPlaceToSearch] = useState("");
  const [placeFounded, setPlaceFounded] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);
  const [placePosition, setPlacePosition] = useState([]);

  const restBtnRef = useRef();
  const parksBtnRef = useRef();
  const barsBtnRef = useRef();
  const rangeInputRef = useRef();

  const toggleButtonClass = (el) => {
    el.currentTarget.classList.toggle("button_active");
  };

  const searchHandle = () => {
    if (
      isPlaceSelected !== true ||
      placePosition.length === 0 ||
      placeToSearch === ""
    ) {
      setShowPopUp(true);
      restBtnRef.current.classList.remove("button_active");
      parksBtnRef.current.classList.remove("button_active");
      barsBtnRef.current.classList.remove("button_active");
      setRadioValue(20);
      setCoords([]);
      setPlaceName([]);
      setSearchButtonClicked(false);
    } else {
      setCoords(placePosition);
      setSearchButtonClicked(true);
      setCenter(placePosition);
      setShowPopUp(false);
    }
  };

  const clearAlllist = () => {
    setPlaceFounded([]);
    setListItems([]);
  };

  const generateList = () => {
    if (placeToSearch.trim() === "") {
      setListItems("");
    }

    if (placeToSearch.trim() !== "" && placeFounded.length > 0) {
      const itemsToInsert = [];
      placeFounded.forEach((place) => {
        itemsToInsert.push(
          <li
            value={place.name}
            key={place.code}
            onClick={(e) => {
              setPlaceToSearch(e.currentTarget.innerText.toString());
              setPlacePosition([place.latitude, place.longitude]);
              setPlaceName(place.name);
              setIsPlaceSelected(true);
              clearAlllist();
            }}
            role={"option"}
          >
            {place.name}
          </li>
        );
      });
      setListItems(itemsToInsert);
    }
  };

  useEffect(() => {
    generateList();
  }, [placeFounded]);

  return (
    <aside className="SearchMenu__container">
      <div className="title">
        <h2>FIND YOUR PLACE</h2>
        <p>
          Findyourplace, te permite buscar e forma rápida restaurantes, parques
          y bares para que puedas descansar o trabajar fuera de casa
        </p>
        <div className="inputSearchContainer">
          <input
            type={"search"}
            id="search"
            value={placeToSearch}
            onInput={(e) => {
              setPlaceToSearch(e.currentTarget.value);
              let elAc = [];
              fetch(`${HOST}/json/countries.json`)
                .then((res) => res.json())
                .then((res) => {
                  res.forEach((place) => {
                    if (
                      place.name
                        .toLowerCase()
                        .includes(placeToSearch.toLowerCase().trim())
                    ) {
                      elAc.push(place);
                    }
                  });
                  setPlaceFounded(elAc);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            placeholder="Encuentra espacios para trabajar y descansar"
          />
          <ul
            id="autocompete-results"
            role={"listbox"}
            aria-label="Search for a country"
            className="autocomplete-list"
          >
            {listItems}
          </ul>
        </div>
      </div>

      <hr />
      <div className="featured">
        <h2>Destacados</h2>
        <p>
          Selecciona algunos de los marcadores por defecto que hemos
          seleccionado para ti
        </p>
        <button ref={restBtnRef} id="restaurants" onClick={toggleButtonClass}>
          <img src={RestaurantIcon} />
          Restaurantes
        </button>

        <button ref={parksBtnRef} className="parks" onClick={toggleButtonClass}>
          <img src={ParksIcon} />
          Parques y sitios al aire libre
        </button>
        <button ref={barsBtnRef} className="bars" onClick={toggleButtonClass}>
          <img src={BarsIcon} />
          Bares
        </button>

        <div className="slider_container">
          <h2>Distáncia desde mi posición ({radioValue}km)</h2>
          <input
            type={"range"}
            name="distance_slider"
            id="distance_slider"
            ref={rangeInputRef}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
            }}
            max={100}
            value={radioValue}
          />
        </div>
        <hr />
        <button
          id="seach_button"
          className="green_button "
          type="buton"
          onClick={searchHandle}
        >
          BUSCAR
        </button>
      </div>
    </aside>
  );
};

export default SearchMenu;
