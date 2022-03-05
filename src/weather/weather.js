import React, { useState, useEffect } from "react";
import "./weather.css";

function Weather({ weather, index, onRemove }) {
  const [cssClassName, setCssClassName] = useState(" ");
  const [icon, setIcon] = useState(" ");
  const [query, setQuery] = useState(weather.request.query);

  useEffect(() => {
    if (weather.request.query.length > 17) {
      setQuery(weather.request.query.slice(0, 17) + "...");
    }

    const weatherDescriptions =
      weather.current.weather_descriptions[0].toLowerCase();

    if (weather.current.is_day === "yes") {
      if (weatherDescriptions.includes("clear") || weatherDescriptions.includes("sunny")) {
        setCssClassName("weather orange");
        setIcon("icon-container  sun");
      } else if (weatherDescriptions.includes("cloudy") || weatherDescriptions.includes("overcast")) {
        setCssClassName("weather pelorous");
        setIcon("icon-container cloudy");
      } else if (weatherDescriptions.includes("snow")) {
        setCssClassName("weather pelorous");
        setIcon("icon-container snow");
      } else {
        setCssClassName("weather pelorous");
        setIcon("icon-container clear");
      }
    } else {
      setCssClassName("weather black");
      setIcon("icon-container  moon");
    }
  });

  const remove = () => {
    onRemove(index);
  };

  return (
    <div className={cssClassName}>
      <div className={icon}></div>
      <div className="temperature-city">
        <span className="temperature"> {weather.current.temperature}</span>
        <div className="celsius">°C</div>
        <div className="city">{query}</div>
      </div>
      <div className="close" onClick={remove}></div>
    </div>
  );
}
export default Weather;
