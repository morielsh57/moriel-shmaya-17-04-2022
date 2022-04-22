import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { weatherIconsMap } from "../../../shared/consts/icons/weatherIconsMap";
import { ADD_NEW_FAVORITE_ACTION, REMOVE_FAVORITE_ACTION } from "../../../shared/consts/strings";
import SwitchTempToggle from "../../../shared/layout/switch/temperature-toggle/switchTempToggle";
import { IWeatherReducerStateT } from "../../../shared/reducers/reducer.interfaces";

import "./weatherTop.scss";
import "./weatherTopDark.scss";

const WeatherTop: React.FC = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const currentWeatherLocation = useSelector((store: IWeatherReducerStateT) => store.currentWeatherLocation);
  const favoriteList = useSelector((store: IWeatherReducerStateT) => store.favoriteList);
  const isImperialVal = useSelector((store: IWeatherReducerStateT) => store.isImperialVal);
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const temperatureSign = isImperialVal ? "F" : "C";
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(false);
    if (favoriteList && favoriteList.length > 0) isCityFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeatherLocation])

  const isCityFavorite = () => {
    for (let i = 0; i < favoriteList.length; i++) {
      if (favoriteList[i].cityKey === currentWeatherLocation?.cityKey) setIsFavorite(true);
    }
  }

  const setIsFav = (type: "remove" | "add") => {
    if (type === "add") dispatch({ type: ADD_NEW_FAVORITE_ACTION, favorite: { cityKey: currentWeatherLocation!.cityKey, cityName: currentWeatherLocation!.cityName } });
    else dispatch({ type: REMOVE_FAVORITE_ACTION, favoriteKey: currentWeatherLocation!.cityKey });
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      {
        currentWeatherLocation &&
        <section className={`weather-top ${isDarkMode && "dark"}`}>
          <div className="current">
            <img src={weatherIconsMap.get(currentWeatherLocation.iconNumber)} alt="icon" />
            <h1>
              {currentWeatherLocation.cityName}
              <br/>
              <span>{currentWeatherLocation.temperature}°{temperatureSign}</span>
            </h1>
          </div>
          <div className="fav-toggle">
              <SwitchTempToggle/>
            <button className="fav-btn">
              {isFavorite ?
                <HeartFilled onClick={() => setIsFav("remove")} />
                :
                <HeartOutlined onClick={() => setIsFav("add")} />
              }
            </button>
          </div>
        </section>
      }
    </>
  );
}
export default WeatherTop;