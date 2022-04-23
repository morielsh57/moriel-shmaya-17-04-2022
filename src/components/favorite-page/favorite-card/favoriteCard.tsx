import React from "react";
import { weatherIconsMap } from "../../../shared/consts/icons/weatherIconsMap";
import { IFavCurrentWeatherT } from "../favorite";
import { Link } from "react-router-dom";
import { alertMessage } from "../../../shared/consts/notification";
import { useSelector } from "react-redux";
import { IWeatherReducerStateT } from "../../../shared/reducers/reducer.interfaces";
import { useSetSelectedLocation } from "../../../shared/hooks/useSetSelectedLocation";

import "../../home-page/five-days-forecasts/forecasts-card/forecastsCard.scss";
import "./favoriteCard.scss";
import "../../home-page/five-days-forecasts/forecasts-card/forecastsCardDark.scss";
import "./favoriteCardDark.scss";

const FavoritCard: React.FC<IFavCurrentWeatherT> = ({ cityName, weatherIcon, temperature, cityKey }) => {
  const isImperialVal = useSelector((store: IWeatherReducerStateT) => store.isImperialVal);
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const temperatureSign = isImperialVal ? "F" : "C";
  const setSelectedLocation = useSetSelectedLocation();
  cityName = (cityName.length>13) ? cityName.slice(0,13)+"..." : cityName;

  const onSelectFavorite = () => {
    setSelectedLocation({key: cityKey, location:cityName});
    alertMessage(`${cityName} selected`,"success");
  }

  return (
    // <Link to="/" onClick={onSelectFavorite}>
      <Link  to="/" onClick={onSelectFavorite} className={`weather-card fav-card ${isDarkMode && "dark"}`}>
        <div className="city">{cityName}</div>
        <img src={weatherIconsMap.get(weatherIcon)} alt="icon" />
        <div className="temp">{temperature}°{temperatureSign}</div>
      </Link>
    // {/* </Link> */}
  );
}
export default FavoritCard;