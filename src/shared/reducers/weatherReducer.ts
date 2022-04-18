import { IActionT, IWeatherReducerStateT } from "./reducerModels";

const initState: IWeatherReducerStateT = {
  favorite: new Map([])
}

const WeatherReducer = (state = initState, action: IActionT) => {
  switch (action.type) {
    case "ADD_NEW_FAVORITE":
      return "add";
    default:
      return (localStorage["Weather"]) ? JSON.parse(localStorage["Weather"]) : state;
  }

};
export default WeatherReducer;

const saveToLocalStorage = (stateToSave: IWeatherReducerStateT) => {
  localStorage.setItem("Weather", JSON.stringify(stateToSave));
  return stateToSave;
}
