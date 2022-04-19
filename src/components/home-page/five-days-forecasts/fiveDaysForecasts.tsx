import React from "react";
import { useSelector } from "react-redux";
import { ILocationForecastsT, IWeatherReducerStateT } from "../../../shared/reducers/reducerModels";
import "./fiveDaysForecasts.css";
import ForecastsCard from "./forecasts-card/forecastsCard";

const FiveDaysForecasts: React.FC = () => {
  const locationForecasts = useSelector((store:IWeatherReducerStateT) => store.locationForecasts);

  return (
    <div className="five-days-forecasts">
      {
        locationForecasts.map((dayItem:ILocationForecastsT,indx:number) => {
          return(
            <ForecastsCard
            key={indx}
            epochDate={dayItem.EpochDate}
            iconNumberApi={dayItem.dayIcon}
            minTemperature={dayItem.minTemp}
            maxTemperature={dayItem.maxTemp}
            />
          );
        })
      }
    </div>
  );
}
export default FiveDaysForecasts;