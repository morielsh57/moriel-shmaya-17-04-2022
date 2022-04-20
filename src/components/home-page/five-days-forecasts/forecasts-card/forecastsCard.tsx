import React, { useEffect, useState } from "react";
import { weatherIconsMap } from "../../../../shared/consts/icons/weatherIconsMap";
import "./forecastsCard.scss";

interface IForecastsCardProps {
  epochDate: number;
  iconNumberApi: number;
  minTemperature: number;
  maxTemperature: number;
}

const ForecastsCard: React.FC<IForecastsCardProps> = ({ epochDate, iconNumberApi, minTemperature, maxTemperature }) => {
  const daysArray = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    getDayFromEpochDate();
  }, []);

  const getDayFromEpochDate = () => {
    const date = convertEpochDateToLocalDate();
    setDay(daysArray[date.getDay()]);

  }

  const convertEpochDateToLocalDate = () => {
    let date = new Date(0); // The 0 there is the key, which sets the date to the epoch
    date.setUTCSeconds(epochDate);
    return date;
  }

  return (
    <>
      {day.length > 0 &&
        <div className="weather-card">
          <div className="day">{day}</div>
          <img src={weatherIconsMap.get(iconNumberApi)} alt="icon" />
          <div className="temp">{minTemperature}°c - {maxTemperature}°c</div>
        </div>
      }
    </>
  );
}
export default ForecastsCard;