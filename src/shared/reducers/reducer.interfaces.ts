export interface IWeatherReducerStateT{
  // Map<citykey,cityName> to search in O1 if specific city is in the fazvorite list
  favoriteList: IFavoriteListT[];
  locationForecasts:ILocationForecastsT[];
  locationSelected:ILocationSelectetT;
  currentWeatherLocation:ICurrentWeatherLocationT|null;
  isImperialVal: boolean;
  isDarkMode: boolean;
}

export interface IFavoriteListT{
  cityKey:string;
  cityName:string;
}

export interface ILocationForecastsT{
  EpochDate: number;
  minTemp: number;
  maxTemp: number;
  dayIcon:number;
  nightIcon:number;
}

export interface ICurrentWeatherLocationT{
  cityKey:string;
  cityName:string;
  weatherText:string;
  iconNumber:number;
  temperature:number;
}

export interface ILocationSelectetT{
  key:string;
  location:string
}

export type IActionTypeT = "ADD_NEW_FAVORITE" | "REMOVE_FAVORITE" | "SET_SELECTED_LOCATION" | "SET_CURRENT_WEATHER_LOCATION" | "SET_LOCATION_FORECASTS" | "SET_IS_IMPERIAL_VAL" | "SET_IS_DARK_MODE";

export interface IActionT{
  type: IActionTypeT;
  locationForecasts: ILocationForecastsT[];
  currentWeatherLocation:ICurrentWeatherLocationT;
  locationSelected:ILocationSelectetT;
  favorite: IFavoriteListT;
  favoriteKey: string;
  isImperialVal: boolean;
  isDarkMode: boolean;
}
