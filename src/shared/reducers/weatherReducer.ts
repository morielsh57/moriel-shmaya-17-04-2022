import { TEL_AVIV_KEY } from "../consts/strings";
import { IActionT, IWeatherReducerStateT } from "./reducerModels";

const initState: IWeatherReducerStateT = {
  favorite: new Map([]),
  locationForecasts:[],
  locationSelected: {key: TEL_AVIV_KEY, location:"Tel Aviv"},
  currentWeatherLocation:null
}

const WeatherReducer = (state = initState, action: IActionT) => {
  switch (action.type) {
    case "ADD_NEW_FAVORITE":
      return "add";
    case "SET_SELECTED_LOCATION":
      return saveToLocalStorage({...state, locationForecasts: [...action.locationForecasts]});
    case "SET_CURRENT_WEATHER_LOCATION":
      return saveToLocalStorage({...state, currentWeatherLocation: {...action.currentWeatherLocation}});
    default:
      return (localStorage["Weather"]) ? JSON.parse(localStorage["Weather"]) : state;
  }

};
export default WeatherReducer;

const saveToLocalStorage = (stateToSave: IWeatherReducerStateT) => {
  localStorage.setItem("Weather", JSON.stringify(stateToSave));
  return stateToSave;
}
