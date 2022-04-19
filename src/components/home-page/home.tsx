import React, { useEffect } from "react";
import WeatherTop from "./weather-top/weatherTop";
import cloudImg from "../../assets/images/clouds.png";
import "./home.css";
import FiveDaysForecasts from "./five-days-forecasts/fiveDaysForecasts";
import SearchLocation from "./search-location/searchLocation";
import { GET_FIVE_DAYS_FORECASTS } from "../../shared/services/api.service";
import { useDispatch } from "react-redux";
import { IWeatherReducerStateT } from "../../shared/reducers/reducerModels";
import { useSelector } from "react-redux";

const Home: React.FC = (props) => {
  const dispatch = useDispatch();
  const locationSelected = useSelector((store: IWeatherReducerStateT) => store.locationSelected);
  // const telAvivKey = "215854";

  useEffect(() => {
    getTelAviv5Forecasts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTelAviv5Forecasts = async () => {
    try {
      const forecastsRes = await GET_FIVE_DAYS_FORECASTS(locationSelected.key, true);
      const locationForecasts = forecastsRes.DailyForecasts.map((dayItem: any) => {
        return {
          EpochDate: dayItem.EpochDate,
          minTemp: dayItem.Temperature.Minimum.Value,
          maxTemp: dayItem.Temperature.Maximum.Value,
          dayIcon: dayItem.Day.Icon,
          nightIcon: dayItem.Night.Icon
        }
      });
      console.log("defualt",locationForecasts);
      dispatch({type:"SET_SELECTED_LOCATION",locationForecasts:locationForecasts});
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      <div className="weather-container">
        <SearchLocation />
        <WeatherTop />
        <div className="clouds">
          <img src={cloudImg} alt="cloud" />
          <img src={cloudImg} alt="cloud" />
          <img src={cloudImg} alt="cloud" />
        </div>
        <FiveDaysForecasts />
      </div>
    </main>
  );
}
export default Home;