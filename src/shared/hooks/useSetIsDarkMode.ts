import { useDispatch } from "react-redux";
import { SET_IS_DARK_MODE_ACTION } from "../consts/strings";

// hook to isDarkMode global state
export const useSetIsDarkMode = () => {
    const dispatch = useDispatch();

    return (isDarkMode: boolean) => {
      dispatch({ type: SET_IS_DARK_MODE_ACTION, isDarkMode: isDarkMode });
    }
}