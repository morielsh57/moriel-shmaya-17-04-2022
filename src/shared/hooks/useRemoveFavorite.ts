import { useDispatch } from "react-redux";
import { REMOVE_FAVORITE_ACTION } from "../consts/strings";

// hook to remove favorite from the global favorite list
export const useRemoveFavorite = () => {
    const dispatch = useDispatch();

    return (favoriteKey: string) => {
      dispatch({ type: REMOVE_FAVORITE_ACTION, favoriteKey: favoriteKey });
    }
}