import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { weatherIconsMap } from "../../../shared/consts/icons/weatherIconsMap";
import { ADD_NEW_FAVORITE_ACTION } from "../../../shared/consts/strings";
import { IWeatherReducerStateT } from "../../../shared/reducers/reducer.interfaces";

import "./weatherTop.scss";

const WeatherTop: React.FC = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const currentWeatherLocation = useSelector((store: IWeatherReducerStateT) => store.currentWeatherLocation);
  const favoriteList = useSelector((store: IWeatherReducerStateT) => store.favoriteList);
  const dispatch = useDispatch();

  const setIsFav = (type:"remove"|"add") => {
    console.log("s")
    if(type==="add") dispatch({type:ADD_NEW_FAVORITE_ACTION, favorite: {cityKey: currentWeatherLocation!.cityKey,cityName: currentWeatherLocation!.cityName}});
    // else dispatch({type:DELETE_FAVORITE_ACTION, favoriteKey: currentWeatherLocation!.cityKey}); 
    setIsFavorite(!isFavorite);
    console.log(favoriteList);
    
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
              <HeartFilled onClick={()=>setIsFav("remove")} />
              :
              <HeartOutlined onClick={()=>setIsFav("add")} />
            }
          </div>
        </section>
      }
    </>
  );
}
export default WeatherTop;