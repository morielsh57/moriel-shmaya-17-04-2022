import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { weatherIconsMap } from "../../../../shared/consts/icons/weatherIconsMap";
import { IWeatherReducerStateT } from "../../../../shared/reducers/reducer.interfaces";

import "./forecastsCard.scss";
import "./forecastsCardDark.scss";

interface IForecastsCardProps {
  epochDate: number;
  iconNumberApi: number;
  minTemperature: number;
  maxTemperature: number;
}

const ForecastsCard: React.FC<IForecastsCardProps> = ({ epochDate, iconNumberApi, minTemperature, maxTemperature }) => {
  const daysArray = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  const [day, setDay] = useState<string>("");
  const isImperialVal = useSelector((store: IWeatherReducerStateT) => store.isImperialVal);
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const temperatureSign = isImperialVal ? "F" : "C";

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
        <div className={`weather-card ${isDarkMode && "dark"}`}>
          <div className="day">{day}</div>
          <img src={weatherIconsMap.get(iconNumberApi)} alt="icon" />
          <div className="temp">{minTemperature}°{temperatureSign} - {maxTemperature}°{temperatureSign}</div>
        </div>
      }
    </>
  );
}
export default ForecastsCard;