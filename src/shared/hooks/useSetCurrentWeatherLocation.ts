import { useDispatch } from "react-redux";
import { SET_CURRENT_WEATHER_LOCATION_ACTION } from "../consts/strings";
import { ICurrentWeatherLocationT } from "../reducers/reducer.interfaces";

// hook to set the current weather location in reducer
export const useSetCurrentWeatherLocation = () => {
    const dispatch = useDispatch();

    return (currentWeather: ICurrentWeatherLocationT) => {
        dispatch({ type: SET_CURRENT_WEATHER_LOCATION_ACTION, currentWeatherLocation: currentWeather });
    }
}