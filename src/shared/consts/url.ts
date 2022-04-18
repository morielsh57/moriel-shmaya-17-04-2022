export const HOME_URL = "/";
export const FAVORITE_URL = "/favorite";

//http accuweather api url
const ACCUWEATHER_API_KEY = "zrmO2zXv2DCwGb7sAgyOVBsb75qisNAz";
const ACCUWEATHER_DOMAIN = "http://dataservice.accuweather.com";
export const GET_LOCATION_URL = `${ACCUWEATHER_DOMAIN}/locations/v1/cities/autocomplete?apikey=${ACCUWEATHER_API_KEY}&language=en&q=`;
export const GET_CURRENT_WEATHER_URL = `${ACCUWEATHER_DOMAIN}/currentconditions/v1/locationKey?apikey=${ACCUWEATHER_API_KEY}&language=en&details=false`;
export const GET_FIVE_DAYS_FORECASTS_URL = `${ACCUWEATHER_DOMAIN}/forecasts/v1/daily/5day/locationKey?apikey=${ACCUWEATHER_API_KEY}&language=en&metric=`;