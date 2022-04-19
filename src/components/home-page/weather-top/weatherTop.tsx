import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { weatherIconsMap } from "../../../shared/consts/icons/weatherIconsMap";
import { IWeatherReducerStateT } from "../../../shared/reducers/reducerModels";
import { GET_CURRENT_WEATHER } from "../../../shared/services/api.service";

import "./weatherTop.css";

const WeatherTop: React.FC = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const locationSelected = useSelector((store: IWeatherReducerStateT) => store.locationSelected);
  const currentWeatherLocation = useSelector((store: IWeatherReducerStateT) => store.currentWeatherLocation);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentWeatherByLocation();
  }, [locationSelected]);

  const getCurrentWeatherByLocation = async () => {
    try {
      const currentWeatherRes = await GET_CURRENT_WEATHER(locationSelected.key);
      const currentWeather = {
        cityKey: locationSelected.key,
        cityName: locationSelected.location,
        weatherText: currentWeatherRes[0].WeatherText,
        iconNumber: currentWeatherRes[0].WeatherIcon,
        temperature: {
          C: currentWeatherRes[0].Temperature.Metric.Value,
          F: currentWeatherRes[0].Temperature.Imperial.Value
        }
      }
      dispatch({ type: "SET_CURRENT_WEATHER_LOCATION", currentWeatherLocation: currentWeather });
    }
    catch (err) {
      console.log(err);

    }
  }

  const setIsFav = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      {
        currentWeatherLocation &&
        <section className="weather-top">
          <div className="current">
            <img src={weatherIconsMap.get(currentWeatherLocation.iconNumber)} alt="icon" />
            {currentWeatherLocation.cityName} <br /> {currentWeatherLocation.temperature.C}°c
          </div>
          <div className="fav">
            {isFavorite ?
              <HeartFilled onClick={setIsFav} />
              :
              <HeartOutlined onClick={setIsFav} />
            }
          </div>
        </section>
      }
    </>
  );
}
export default WeatherTop;