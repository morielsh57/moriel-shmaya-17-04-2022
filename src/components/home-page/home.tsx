import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import WeatherTop from "./weather-top/weatherTop";
import FiveDaysForecasts from "./five-days-forecasts/fiveDaysForecasts";
import SearchLocation from "./search-location/searchLocation";
import { GET_CURRENT_WEATHER_BY_KEY, GET_FIVE_DAYS_FORECASTS, GET_LOCATION_BY_GEOPOSITION } from "../../shared/services/api.service";
import { ICurrentWeatherLocationT, ILocationForecastsT, IWeatherReducerStateT } from "../../shared/reducers/reducer.interfaces";
import { TEL_AVIV_GEOPOSITION_LAT, TEL_AVIV_GEOPOSITION_LON } from "../../shared/consts/strings";
import { ICurrentWeatherLocationApiT, IFiveDailyForecastsApiDailyForecastsT, IFiveDailyForecastsApiT, ILocationGeopositionApiT } from "../../shared/consts/weatherApi.interfaces";
import { alertMessage } from "../../shared/consts/notification";
import { useSetLocationForcasts } from "../../shared/hooks/useSetLocationForcasts";
import { useSetCurrentWeatherLocation } from "../../shared/hooks/useSetCurrentWeatherLocation";
import { useSetSelectedLocation } from "../../shared/hooks/useSetSelectedLocation";

import "./home.scss";
import "./homeDark.scss";

const Home: React.FC = (props) => {
  const locationSelected = useSelector((store: IWeatherReducerStateT) => store.locationSelected);
  const locationForecasts = useSelector((store: IWeatherReducerStateT) => store.locationForecasts);
  const isImperialVal = useSelector((store: IWeatherReducerStateT) => store.isImperialVal);
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const setLocationForcasts = useSetLocationForcasts();
  const setCurrentWeatherLocation = useSetCurrentWeatherLocation();
  const setSelectedLocation = useSetSelectedLocation();

  useEffect(() => {
    if(locationSelected){
      getlocation5Forecasts();
      getCurrentWeatherByLocation();
    }
    else getTelAvivByGeoposition()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSelected, isImperialVal]);

  const getlocation5Forecasts = async () => {
    try {
      const forecastsRes: IFiveDailyForecastsApiT = await GET_FIVE_DAYS_FORECASTS(locationSelected!.key, !isImperialVal);
      const locationForecasts: ILocationForecastsT[] = forecastsRes.DailyForecasts.map((dayItem: IFiveDailyForecastsApiDailyForecastsT) => {
        return {
          EpochDate: dayItem.EpochDate,
          minTemp: dayItem.Temperature.Minimum.Value,
          maxTemp: dayItem.Temperature.Maximum.Value,
          dayIcon: dayItem.Day.Icon,
          nightIcon: dayItem.Night.Icon
        }
      });
      // dispatch({ type: SET_LOCATION_FORECASTS_ACTION, locationForecasts: locationForecasts });
      setLocationForcasts(locationForecasts);
    }
    catch (err) {
      alertMessage("There was a problem geting the forcasts", "error");
      throw new Error(`There was a problem geting the forcasts: ${err}`);
    }
  }


  const getCurrentWeatherByLocation = async () => {
    try {
      const currentWeatherRes: ICurrentWeatherLocationApiT = await GET_CURRENT_WEATHER_BY_KEY(locationSelected!.key);
      const currentWeather: ICurrentWeatherLocationT = {
        cityKey: locationSelected!.key,
        cityName: locationSelected!.location,
        weatherText: currentWeatherRes.WeatherText,
        iconNumber: currentWeatherRes.WeatherIcon,
        temperature: isImperialVal ? currentWeatherRes.Temperature.Imperial.Value : currentWeatherRes.Temperature.Metric.Value
      }
      // dispatch({ type: SET_CURRENT_WEATHER_LOCATION_ACTION, currentWeatherLocation: currentWeather });
      setCurrentWeatherLocation(currentWeather);
    }
    catch (err) {
      alertMessage("There was a problem geting the current weather", "error");
      throw new Error(`There was a problem geting the current weather ${err}`);
    }
  }

  //get tel-aviv details by geoposition and set the locationSelected global state to tel-aviv details
  const getTelAvivByGeoposition = async() => {
    const telAvivData: ILocationGeopositionApiT = await GET_LOCATION_BY_GEOPOSITION(TEL_AVIV_GEOPOSITION_LAT,TEL_AVIV_GEOPOSITION_LON);
    // dispatch({ type: SET_SELECTED_LOCATION_ACTION, locationSelected: { key: telAvivData.Key, location: telAvivData.AdministrativeArea.LocalizedName } });
    setSelectedLocation({key: telAvivData.Key, location: telAvivData.AdministrativeArea.LocalizedName});
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