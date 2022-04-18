import React from "react";
import { weatherIconsMap } from "../../../shared/consts/icons/weatherIconsMap";
import "./fiveDaysForecasts.css";

const FiveDaysForecasts: React.FC = () => {

  return (
    <div className="five-days-forecasts">
      <div className="forcasts-card">
        <div>Sunday</div>
        <img src={weatherIconsMap.get(2)} alt="icon" />
        <div>34°c</div>
      </div>
      <div className="forcasts-card">
        <div>Manday</div>
        <img src={weatherIconsMap.get(1)} alt="icon" />
        <div>30°c</div>
      </div>
      <div className="forcasts-card">
        <div>Tusday</div>
        <img src={weatherIconsMap.get(4)} alt="icon" />
        <div>24°c</div>
      </div>
      <div className="forcasts-card">
        <div>Sunday</div>
        <img src={weatherIconsMap.get(5)} alt="icon" />
        <div>34°c</div>
      </div>
      <div className="forcasts-card">
        <div>Sunday</div>
        <img src={weatherIconsMap.get(6)} alt="icon" />
        <div>32°c</div>
      </div>
    </div>
  );
}
export default FiveDaysForecasts;