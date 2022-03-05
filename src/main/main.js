import React, { useState } from "react";
import "./main.css";
import axios from "axios";
import Weather from "../weather/weather";

function Main() {
  const [city, setCity] = useState({});
  const [weathers, setWeathers] = useState([]);
  const [error, setError] = useState("");
  const apiUrl =
    "http://api.weatherstack.com/current?access_key=02efd07d4e6aea201c3eef771bdcb2a9&query=";

  const search = async () => {
    setError(" ");
    try {
      const json = await axios.get(`${apiUrl}${city}`);
      if (json.data?.error) {
        setError("Not Found");
      } else {
        setWeathers((weathers) => [...weathers, json.data]);
      }
    } catch (e) {}
  };

  const removeWeather = (index) => {
    const filterWeathers = weathers.filter((d, i) => i !== parseInt(index));
    setWeathers(filterWeathers);
  };

  return (
    <div className="searchForm">
      <div className="searchtitle">
        <div>How's the weather in...</div>
        <div className="search-input">
          <div className="location"></div>
          <input
            className="textarea"
            placeholder=""
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="add" type="submit" onClick={search}>
            +
          </button>
        </div>

        <div className="not-found">{error}</div>
      </div>
      <div className="weathers">
        {weathers &&
          weathers.map((weather, index) => {
            return (
              <div key={index} className="weather-item">
                <Weather
                  weather={weather}
                  index={index}
                  onRemove={removeWeather}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Main;
