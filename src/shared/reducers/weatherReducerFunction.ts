import { WEATHER_LOCAL_STORAGE } from "../consts/strings";
import { IFavoriteListT, IWeatherReducerStateT } from "./reducer.interfaces";

export const saveToLocalStorage = (stateToSave: IWeatherReducerStateT) => {
  localStorage.setItem(WEATHER_LOCAL_STORAGE, JSON.stringify(stateToSave));
  return stateToSave;
}

export const addNewFavorite = (state: IWeatherReducerStateT, favorite: IFavoriteListT) => {
  let tempFavoriteList:IFavoriteListT[] = [];
  if( state.favoriteList) tempFavoriteList = state.favoriteList;
  tempFavoriteList.push({...favorite});
  return { ...state, favoriteList: tempFavoriteList };
}

export const removeFavorite = (state: IWeatherReducerStateT, favoriteKey: string) => {
  let tempFavoriteList:IFavoriteListT[] = state.favoriteList.filter(fav => fav.cityKey !== favoriteKey);
  return { ...state, favoriteList: tempFavoriteList };
}