import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherTop from "./weather-top/weatherTop";
import FiveDaysForecasts from "./five-days-forecasts/fiveDaysForecasts";
import SearchLocation from "./search-location/searchLocation";
import { GET_CURRENT_WEATHER_BY_KEY, GET_FIVE_DAYS_FORECASTS } from "../../shared/services/api.service";
import { ICurrentWeatherLocationT, ILocationForecastsT, IWeatherReducerStateT } from "../../shared/reducers/reducer.interfaces";
import { SET_CURRENT_WEATHER_LOCATION_ACTION, SET_LOCATION_FORECASTS_ACTION } from "../../shared/consts/strings";
import { ICurrentWeatherLocationApiT, IFiveDailyForecastsApiDailyForecastsT, IFiveDailyForecastsApiT } from "../../shared/consts/weatherApi.interfaces";
import "./home.scss";
import { alertMessage } from "../../shared/consts/notification";

const Home: React.FC = (props) => {
  const dispatch = useDispatch();
  const locationSelected = useSelector((store: IWeatherReducerStateT) => store.locationSelected);
  const locationForecasts = useSelector((store: IWeatherReducerStateT) => store.locationForecasts);

  useEffect(() => {
    // getlocation5Forecasts();
    // getCurrentWeatherByLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSelected]);

  const getlocation5Forecasts = async () => {
    try {
      const forecastsRes:IFiveDailyForecastsApiT = await GET_FIVE_DAYS_FORECASTS(locationSelected.key, true);
      const locationForecasts:ILocationForecastsT[] = forecastsRes.DailyForecasts.map((dayItem: IFiveDailyForecastsApiDailyForecastsT) => {
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
      alertMessage("There was a problem geting the forcasts","error");
      throw new Error(`There was a problem geting the forcasts: ${err}`);
    }
  }


  const getCurrentWeatherByLocation = async () => {
    try {
      const currentWeatherRes:ICurrentWeatherLocationApiT = await GET_CURRENT_WEATHER_BY_KEY(locationSelected.key);
      const currentWeather:ICurrentWeatherLocationT = {
        cityKey: locationSelected.key,
        cityName: locationSelected.location,
        weatherText: currentWeatherRes.WeatherText,
        iconNumber: currentWeatherRes.WeatherIcon,
        temperature: {
          C: currentWeatherRes.Temperature.Metric.Value,
          F: currentWeatherRes.Temperature.Imperial.Value
        }
      }
      dispatch({ type: SET_CURRENT_WEATHER_LOCATION_ACTION, currentWeatherLocation: currentWeather });
    }
    catch (err) {
      alertMessage("There was a problem geting the current weather","error");
      throw new Error(`There was a problem geting the current weather ${err}`);
    }
  }

  return (
    <main>
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