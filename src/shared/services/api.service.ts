import axios from "axios";
import { ACCUWEATHER_API_KEY, ACCUWEATHER_DOMAIN, GET_CURRENT_WEATHER_BY_KEY_URL, GET_FIVE_DAYS_FORECASTS_URL, GET_LOCATION_AUTO_COMPLETE_URL } from "../consts/url";
import { ICurrentWeatherLocationApiT, IFiveDailyForecastsApiT, ILocationAutoCompleteApiT } from "../consts/weatherApi.interfaces";

const axiosInstance = axios.create({
  baseURL: ACCUWEATHER_DOMAIN,
  params: {
    apikey: ACCUWEATHER_API_KEY,
    language: "en"
  },
});

// get list of cities by location query
export const GET_LOCATION_AUTO_COMPLETE = async(location:string) =>{
  try{
    const locationData = await axiosInstance.get<ILocationAutoCompleteApiT[]>(GET_LOCATION_AUTO_COMPLETE_URL,{params:{q:location}});
    return locationData.data;
  }
  catch(error){
    throw new Error("there is a problem location not found");
  }
}

//get current weather by location key
export const GET_CURRENT_WEATHER_BY_KEY = async(locationKey:string) =>{
  try{
    const currentWeatherUrl = GET_CURRENT_WEATHER_BY_KEY_URL+locationKey
    const currentWeatherData = await axiosInstance.get<ICurrentWeatherLocationApiT[]>(currentWeatherUrl,{params:{details: false}});
    return currentWeatherData.data[0];
  }
  catch(error){
    throw new Error("there is a problem");
  }
}

// get 5 days daily forecasts by location key and if data in metric(C) value
export const GET_FIVE_DAYS_FORECASTS = async(locationKey:string,metricValue:boolean) => {
  try{
    const forcastsUrl = GET_FIVE_DAYS_FORECASTS_URL+locationKey;
    const forcastsData = await axiosInstance.get<IFiveDailyForecastsApiT>(forcastsUrl,{params:{metric:metricValue}});
    return forcastsData.data;
  }
  catch(error){
    throw new Error("there is a problem");
  }
}