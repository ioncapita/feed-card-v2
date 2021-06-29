import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState([]);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!lat | !long) {
        return;
      } else {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&appid=3ee6fe61ca94ebcef8ecfe69881bf40a`
          )
          .then((response) => {
            setData(response.data);
            console.log(data);
          });
      }
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <div>
          <h1>{data.name}</h1>
          <span>{data.sys.country}</span>
          <h2>{data.weather[0].description}</h2>
          <p>{Math.round(data.main.temp)}ºC</p>
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="imgicon"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
