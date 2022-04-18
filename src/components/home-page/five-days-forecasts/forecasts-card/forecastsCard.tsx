import React from "react";
import { weatherIconsMap } from "../../../../shared/consts/icons/weatherIconsMap";
import "./forecastsCard.css";

interface IForecastsCardProps{
  day: "Sun." | "Mon." | "Tue." | "Wed." | "Thu." | "Fri." |"Sat.";
  iconNumberApi: number;
  temperature: number;
}

const ForecastsCard: React.FC<IForecastsCardProps> = ({day,iconNumberApi,temperature}) => {

  return (
    <div className="forcasts-card">
      <div className="day">{day}</div>
      <img src={weatherIconsMap.get(iconNumberApi)} alt="icon" />
      <div className="temp">{temperature}°c</div>
    </div>
  );
}
export default ForecastsCard;