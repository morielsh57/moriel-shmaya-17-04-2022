import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherTop from "./weather-top/weatherTop";
import FiveDaysForecasts from "./five-days-forecasts/fiveDaysForecasts";
import SearchLocation from "./search-location/searchLocation";
import { GET_CURRENT_WEATHER_BY_KEY, GET_FIVE_DAYS_FORECASTS } from "../../shared/services/api.service";
import { ICurrentWeatherLocationT, ILocationForecastsT, IWeatherReducerStateT } from "../../shared/reducers/reducer.interfaces";
import { SET_CURRENT_WEATHER_LOCATION_ACTION, SET_LOCATION_FORECASTS_ACTION } from "../../shared/consts/strings";
import { ICurrentWeatherLocationApiT, IFiveDailyForecastsApiDailyForecastsT, IFiveDailyForecastsApiT } from "../../shared/consts/weatherApi.interfaces";
import { alertMessage } from "../../shared/consts/notification";

import "./home.scss";
import "./homeDark.scss";

const Home: React.FC = (props) => {
  const dispatch = useDispatch();
  const locationSelected = useSelector((store: IWeatherReducerStateT) => store.locationSelected);
  const locationForecasts = useSelector((store: IWeatherReducerStateT) => store.locationForecasts);
  const isImperialVal = useSelector((store: IWeatherReducerStateT) => store.isImperialVal);
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);

  useEffect(() => {
    console.log(isImperialVal);
    
    getlocation5Forecasts();
    getCurrentWeatherByLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSelected, isImperialVal]);

  const getlocation5Forecasts = async () => {
    try {
      const forecastsRes: IFiveDailyForecastsApiT = await GET_FIVE_DAYS_FORECASTS(locationSelected.key, !isImperialVal);
      const locationForecasts: ILocationForecastsT[] = forecastsRes.DailyForecasts.map((dayItem: IFiveDailyForecastsApiDailyForecastsT) => {
        return {
          EpochDate: dayItem.EpochDate,
          minTemp: dayItem.Temperature.Minimum.Value,
          maxTemp: dayItem.Temperature.Maximum.Value,
          dayIcon: dayItem.Day.Icon,
          nightIcon: dayItem.Night.Icon
        }
      });
      dispatch({ type: SET_LOCATION_FORECASTS_ACTION, locationForecasts: locationForecasts });
    }
    catch (err) {
      alertMessage("There was a problem geting the forcasts", "error");
      throw new Error(`There was a problem geting the forcasts: ${err}`);
    }
  }


  const getCurrentWeatherByLocation = async () => {
    try {
      const currentWeatherRes: ICurrentWeatherLocationApiT = await GET_CURRENT_WEATHER_BY_KEY(locationSelected.key);
      const currentWeather: ICurrentWeatherLocationT = {
        cityKey: locationSelected.key,
        cityName: locationSelected.location,
        weatherText: currentWeatherRes.WeatherText,
        iconNumber: currentWeatherRes.WeatherIcon,
        temperature: isImperialVal ? currentWeatherRes.Temperature.Imperial.Value : currentWeatherRes.Temperature.Metric.Value
      }
      dispatch({ type: SET_CURRENT_WEATHER_LOCATION_ACTION, currentWeatherLocation: currentWeather });
    }
    catch (err) {
      alertMessage("There was a problem geting the current weather", "error");
      throw new Error(`There was a problem geting the current weather ${err}`);
    }
  }

  return (
    <main className={`${isDarkMode && "dark"}`}>
      {locationForecasts.length > 0 &&
        <div className="weather-container">
          <SearchLocation />
          <WeatherTop />
          <FiveDaysForecasts />
        </div>
      }
    </main>
  );
}
export default Home;