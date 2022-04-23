import { useDispatch } from "react-redux";
import { SET_SELECTED_LOCATION_ACTION } from "../consts/strings";
import { ILocationSelectetT } from "../reducers/reducer.interfaces";

// hook to set the selected location in reducer
export const useSetSelectedLocation = () => {
    const dispatch = useDispatch();

    return (locationSelected: ILocationSelectetT) => {
      dispatch({ type: SET_SELECTED_LOCATION_ACTION, locationSelected: locationSelected });
    }
}