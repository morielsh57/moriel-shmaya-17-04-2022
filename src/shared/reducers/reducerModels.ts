export interface IWeatherReducerStateT{
  // Map<cityName,favObj> to search in O1 if specific city is in the fazvorite list
  favorite: Map<string,IFavoriteT>;
  locationForecasts:ILocationForecastsT[];
  locationSelected:{key:string,location:string};
  currentWeatherLocation:ICurrentWeatherLocationT|null;
}

export interface IFavoriteT{
  cityKey:string;
  cityName:string;
  // weatherText:string;
  // dayIcon:number;
  // nightIcon:number;
  // temperature:{C: number, F: number};
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
  temperature:{C: number, F: number};
}

export interface IActionT{
  type: "ADD_NEW_FAVORITE" | "SET_SELECTED_LOCATION" | "SET_CURRENT_WEATHER_LOCATION";
  locationForecasts: ILocationForecastsT[];
  currentWeatherLocation:ICurrentWeatherLocationT;
}