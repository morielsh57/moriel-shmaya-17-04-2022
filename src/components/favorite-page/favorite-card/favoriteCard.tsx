import React from "react";
import { weatherIconsMap } from "../../../shared/consts/icons/weatherIconsMap";
import { IFavCurrentWeatherT } from "../favorite";
import "../../home-page/five-days-forecasts/forecasts-card/forecastsCard.scss";

const FavoritCard: React.FC<IFavCurrentWeatherT> = ({ city, weatherIcon, temperature }) => {

  return (
        <div className="weather-card">
          <div className="city">{city}</div>
          <img src={weatherIconsMap.get(weatherIcon)} alt="icon" />
          <div className="temp">{temperature.C}°c</div>
        </div>
  );
}
export default FavoritCard;