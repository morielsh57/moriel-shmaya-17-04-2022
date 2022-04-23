import axios from "axios";
import { alertMessage } from "../consts/notification";
import { ACCUWEATHER_API_KEY, ACCUWEATHER_DOMAIN, GET_CURRENT_WEATHER_BY_KEY_URL, GET_FIVE_DAYS_FORECASTS_URL, GET_LOCATION_AUTO_COMPLETE_URL, GET_LOCATION_BY_GEOPOSITION_URL } from "../consts/url";
import { ICurrentWeatherLocationApiT, IFiveDailyForecastsApiT, ILocationAutoCompleteApiT, ILocationGeopositionApiT } from "../consts/weatherApi.interfaces";

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
    alertMessage("there was a problem geting the location", "error");
    throw new Error("there was a problem geting the location");
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
    alertMessage("There was a problem geting the current weather", "error");
    throw new Error("There was a problem geting the current weather");
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
    alertMessage("There was a problem geting the forcasts", "error");
    throw new Error("There was a problem geting the forcasts");
  }
}

// get location by geoposition (lat,lon)
export const GET_LOCATION_BY_GEOPOSITION = async(lat:number,lon:number) => {
  try{
    const locationData = await axiosInstance.get<ILocationGeopositionApiT>(GET_LOCATION_BY_GEOPOSITION_URL,{params:{q:`${lat},${lon}`}});
    return locationData.data;
  }
  catch(error){
    alertMessage("There was a problem geting the location geoposition", "error");
    throw new Error("There was a problem geting the location geoposition");
  }
}