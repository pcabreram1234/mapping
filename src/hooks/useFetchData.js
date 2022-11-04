import { useState, useEffect } from "react";

const useFetchData = (input, API) => {
  const [placeFounded, setPlaceFounded] = useState([]);
  const params = {
    q: input,
    format: "json",
    addressdetails: 1,
    polygon_geojson: 0,
  };
  const queryString = new URLSearchParams(params).toString();
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(`${API}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setPlaceFounded(JSON.parse(result));
      });
  }, []);

  return placeFounded;
};

export default useFetchData;
