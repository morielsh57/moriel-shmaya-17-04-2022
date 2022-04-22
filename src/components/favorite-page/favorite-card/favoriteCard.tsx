import React from "react";
import { weatherIconsMap } from "../../../shared/consts/icons/weatherIconsMap";
import { IFavCurrentWeatherT } from "../favorite";
import { Link } from "react-router-dom";
import { SET_SELECTED_LOCATION_ACTION } from "../../../shared/consts/strings";
import { useDispatch } from "react-redux";
import { alertMessage } from "../../../shared/consts/notification";
import { useSelector } from "react-redux";
import { IWeatherReducerStateT } from "../../../shared/reducers/reducer.interfaces";

import "../../home-page/five-days-forecasts/forecasts-card/forecastsCard.scss";
import "./favoriteCard.scss";
import "../../home-page/five-days-forecasts/forecasts-card/forecastsCardDark.scss";
import "./favoriteCardDark.scss";

const FavoritCard: React.FC<IFavCurrentWeatherT> = ({ city, weatherIcon, temperature, cityKey }) => {
  const isImperialVal = useSelector((store: IWeatherReducerStateT) => store.isImperialVal);
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const temperatureSign = isImperialVal ? "F" : "C";
  const dispatch = useDispatch();
city = (city.length>13) ? city.slice(0,13)+"..." : city;

  const onSelectFavorite = () => {
    dispatch({type: SET_SELECTED_LOCATION_ACTION, locationSelected:{key: cityKey, location:city}})
    alertMessage(`${city} selected`,"success");
  }

  return (
    // <Link to="/" onClick={onSelectFavorite}>
      <Link  to="/" onClick={onSelectFavorite} className={`weather-card fav-card ${isDarkMode && "dark"}`}>
        <div className="city">{city}</div>
        <img src={weatherIconsMap.get(weatherIcon)} alt="icon" />
        <div className="temp">{temperature}°{temperatureSign}</div>
      </Link>
    // {/* </Link> */}
  );
}
export default FavoritCard;