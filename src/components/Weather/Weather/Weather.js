import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Weather.module.css";

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
          });
        console.log(data);
      }
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <div className={styles.container}>
          <div className={styles.leftC}>
            <h1 className={styles.name}>
              {data.name}
              <span className={styles.span}> {data.sys.country}</span>
            </h1>
          </div>
          <p className={styles.temp}>{Math.round(data.main.temp)}ºC</p>
          {data.weather.map((item, index) => {
            return (
              <h2 className={styles.description} key={index}>
                {item.description}
              </h2>
            );
          })}
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
