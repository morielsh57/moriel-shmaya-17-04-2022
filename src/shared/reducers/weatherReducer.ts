import { ADD_NEW_FAVORITE_ACTION, REMOVE_FAVORITE_ACTION, SET_CURRENT_WEATHER_LOCATION_ACTION, SET_IS_DARK_MODE_ACTION, SET_IS_IMPERIAL_VAL_ACTION, SET_LOCATION_FORECASTS_ACTION, SET_SELECTED_LOCATION_ACTION, WEATHER_LOCAL_STORAGE } from "../consts/strings";
import { IActionT, IWeatherReducerStateT } from "./reducer.interfaces";
import { addNewFavorite, removeFavorite, saveToLocalStorage } from "./weatherReducerFunction";

const initState: IWeatherReducerStateT = {
  favoriteList: [],
  locationForecasts:[],
  locationSelected: null,
  currentWeatherLocation:null,
  isImperialVal: false,
  isDarkMode: false,
}

const WeatherReducer = (state = initState, action: IActionT) => {
  switch (action.type) {
    case ADD_NEW_FAVORITE_ACTION:
      return saveToLocalStorage(addNewFavorite(state,action.favorite));
    case REMOVE_FAVORITE_ACTION:
      return saveToLocalStorage(removeFavorite(state,action.favoriteKey));
    case SET_LOCATION_FORECASTS_ACTION:
      return saveToLocalStorage({...state, locationForecasts: [...action.locationForecasts]});
    case SET_SELECTED_LOCATION_ACTION:
      return saveToLocalStorage({...state, locationSelected: {...action.locationSelected}});
    case SET_CURRENT_WEATHER_LOCATION_ACTION:
      return saveToLocalStorage({...state, currentWeatherLocation: {...action.currentWeatherLocation}});
    case SET_IS_IMPERIAL_VAL_ACTION:
      return saveToLocalStorage({...state, isImperialVal: action.isImperialVal});
    case SET_IS_DARK_MODE_ACTION:
      return saveToLocalStorage({...state, isDarkMode: action.isDarkMode});
    default:
      return (localStorage[WEATHER_LOCAL_STORAGE]) ? JSON.parse(localStorage[WEATHER_LOCAL_STORAGE]) : state;
  }
};
export default WeatherReducer;