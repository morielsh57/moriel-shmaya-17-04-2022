export const HOME_URL = "/";
export const FAVORITE_URL = "/favorite";

//http accuweather api url
const ACCUWEATHER_API_KEY = "ZBPGJTCn5AG126BkRI5UQ9QGAfhGpx4G";
const ACCUWEATHER_DOMAIN = "https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com";
export const GET_LOCATION_URL = `${ACCUWEATHER_DOMAIN}/locations/v1/cities/autocomplete?apikey=${ACCUWEATHER_API_KEY}&language=en&q=`;
export const GET_CURRENT_WEATHER_URL = `${ACCUWEATHER_DOMAIN}/currentconditions/v1/`;
export const GET_CURRENT_WEATHER_URL_PARAMS = `?apikey=${ACCUWEATHER_API_KEY}&language=en&details=false`;
export const GET_FIVE_DAYS_FORECASTS_URL = `${ACCUWEATHER_DOMAIN}/forecasts/v1/daily/5day/`;
export const GET_FIVE_DAYS_FORECASTS_URL_PARAMS = `?apikey=${ACCUWEATHER_API_KEY}&language=en&metric=`;