import { ADD_NEW_FAVORITE_ACTION, SET_CURRENT_WEATHER_LOCATION_ACTION, SET_LOCATION_FORECASTS_ACTION, SET_SELECTED_LOCATION_ACTION, TEL_AVIV_KEY, WEATHER_LOCAL_STORAGE } from "../consts/strings";
import { IActionT, IFavoriteListT, IWeatherReducerStateT } from "./reducer.interfaces";

const initState: IWeatherReducerStateT = {
  favoriteList: [],
  locationForecasts:[],
  locationSelected: {key: TEL_AVIV_KEY, location:"Tel Aviv"},
  currentWeatherLocation:null
}

const WeatherReducer = (state = initState, action: IActionT) => {
  switch (action.type) {
    case ADD_NEW_FAVORITE_ACTION:
      return saveToLocalStorage(addNewFavorite(state,action.favorite));
    case SET_LOCATION_FORECASTS_ACTION:
      return saveToLocalStorage({...state, locationForecasts: [...action.locationForecasts]});
    case SET_SELECTED_LOCATION_ACTION:
      return saveToLocalStorage({...state, locationSelected: {...action.locationSelected}});
    case SET_CURRENT_WEATHER_LOCATION_ACTION:
      return saveToLocalStorage({...state, currentWeatherLocation: {...action.currentWeatherLocation}});
    default:
      return (localStorage[WEATHER_LOCAL_STORAGE]) ? JSON.parse(localStorage[WEATHER_LOCAL_STORAGE]) : state;
  }
};
export default WeatherReducer;

const saveToLocalStorage = (stateToSave: IWeatherReducerStateT) => {
  localStorage.setItem(WEATHER_LOCAL_STORAGE, JSON.stringify(stateToSave));
  return stateToSave;
}

const addNewFavorite = (state: IWeatherReducerStateT, favorite: IFavoriteListT) => {
  let tempFavoriteList:any[] = [];
  if( state.favoriteList) tempFavoriteList = state.favoriteList;
  tempFavoriteList.push({...favorite});
  return { ...state, favoriteList: tempFavoriteList };
}