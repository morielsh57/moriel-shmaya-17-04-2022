import { useDispatch } from "react-redux";
import { SET_LOCATION_FORECASTS_ACTION } from "../consts/strings";
import { ILocationForecastsT } from "../reducers/reducer.interfaces";

// hook to set the location forcasts in reducer
export const useSetLocationForcasts = () => {
    const dispatch = useDispatch();

    return (locationForecasts: ILocationForecastsT[]) => {
        dispatch({ type: SET_LOCATION_FORECASTS_ACTION, locationForecasts: locationForecasts });
    }
}