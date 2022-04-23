import { useDispatch } from "react-redux";
import { SET_IS_IMPERIAL_VAL_ACTION } from "../consts/strings";

// hook to isImperialVal global state
export const useSetIsImperialVal = () => {
    const dispatch = useDispatch();

    return (isImperialVal: boolean) => {
      dispatch({ type: SET_IS_IMPERIAL_VAL_ACTION, isImperialVal: isImperialVal });
    }
}