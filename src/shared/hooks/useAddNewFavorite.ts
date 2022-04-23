import { useDispatch } from "react-redux";
import { ADD_NEW_FAVORITE_ACTION } from "../consts/strings";
import { IFavoriteListT } from "../reducers/reducer.interfaces";

// hook to add new favorite to the global favorite list
export const useAddNewFavorite = () => {
    const dispatch = useDispatch();

    return (newFavorite: IFavoriteListT) => {
      dispatch({ type: ADD_NEW_FAVORITE_ACTION, favorite: newFavorite });
    }
}