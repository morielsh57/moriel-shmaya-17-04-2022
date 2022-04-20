import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ICurrentWeatherLocationApiT } from "../../shared/consts/weatherApi.interfaces";
import { IWeatherReducerStateT } from "../../shared/reducers/reducer.interfaces";
import { GET_CURRENT_WEATHER_BY_KEY } from "../../shared/services/api.service";
import FavoritCard from "./favorite-card/favoriteCard";
import "../home-page/five-days-forecasts/fiveDaysForecasts.scss";
import './favorite.scss';

export interface IFavCurrentWeatherT {
  city: string;
  weatherIcon: number;
  temperature: { C: number, F: number };
  cityKey:string
}

const Favorite: React.FC = (props) => {
  const favoriteList = useSelector((store: IWeatherReducerStateT) => store.favoriteList);
  const [favsCurrentWeather, setFavsCurrentWeather] = useState<IFavCurrentWeatherT[]>([]);

  useEffect(() => {
    if (favoriteList && favoriteList.length > 0) setCurrentWeatherFavList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setCurrentWeatherFavList = async() => {
    let favoritesCurrentWeatherArr: IFavCurrentWeatherT[] = [];
    await Promise.all(favoriteList.map(async (cityValue, indx) => {
      const currentWeatherRes: ICurrentWeatherLocationApiT = await GET_CURRENT_WEATHER_BY_KEY(cityValue.cityKey);
      const favoritesCurrentWeatherobj: IFavCurrentWeatherT = {
        city: cityValue.cityName,
        weatherIcon: currentWeatherRes.WeatherIcon,
        temperature: {
          C: currentWeatherRes.Temperature.Metric.Value,
          F: currentWeatherRes.Temperature.Imperial.Value
        },
        cityKey:cityValue.cityKey
      }
      favoritesCurrentWeatherArr.push({ ...favoritesCurrentWeatherobj });
    }));
    setFavsCurrentWeather([...favoritesCurrentWeatherArr]);
    console.log("favList", favoritesCurrentWeatherArr, favsCurrentWeather);

  }

  return (
    <>
      <div className="fav-page">
        <h1>{favoriteList ? "Favorite" : "No Favorite Found"}</h1>
        {/* <div>{favsCurrentWeather[0].city}</div> */}
        <div className="fav-container">
          {
            favsCurrentWeather.length > 0 && favsCurrentWeather.map((item, indx) => {
              return (
                <FavoritCard
                  key={item.cityKey}
                  cityKey={item.cityKey}
                  city={item.city}
                  weatherIcon={item.weatherIcon}
                  temperature={item.temperature}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}
export default Favorite;