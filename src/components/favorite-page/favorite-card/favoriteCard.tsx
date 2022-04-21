import React, { useEffect } from "react";
import { weatherIconsMap } from "../../../shared/consts/icons/weatherIconsMap";
import { IFavCurrentWeatherT } from "../favorite";
import "../../home-page/five-days-forecasts/forecasts-card/forecastsCard.scss";
import "./favoriteCard.scss";
import { Link } from "react-router-dom";
import { SET_SELECTED_LOCATION_ACTION } from "../../../shared/consts/strings";
import { useDispatch } from "react-redux";
import { alertMessage } from "../../../shared/consts/notification";

const FavoritCard: React.FC<IFavCurrentWeatherT> = ({ city, weatherIcon, temperature, cityKey }) => {
const dispatch = useDispatch();
city = (city.length>13) ? city.slice(0,13)+"..." : city;

  const onSelectFavorite = () => {
    dispatch({type: SET_SELECTED_LOCATION_ACTION, locationSelected:{key: cityKey, location:city}})
    alertMessage(`${city} selected`,"success");
  }

  return (
    // <Link to="/" onClick={onSelectFavorite}>
      <Link  to="/" onClick={onSelectFavorite} className="weather-card fav-card">
        <div className="city">{city}</div>
        <img src={weatherIconsMap.get(weatherIcon)} alt="icon" />
        <div className="temp">{temperature.C}°c</div>
      </Link>
    // {/* </Link> */}
  );
}
export default FavoritCard;