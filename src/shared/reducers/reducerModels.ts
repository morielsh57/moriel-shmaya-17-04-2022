export interface IWeatherReducerStateT{
  favorite: Map<string,IFavoriteT>
}

export interface IFavoriteT{
  cityKey:string;
  cityName:string;
  weatherText:string;
  dayIcon:number;
  nightIcon:number;
  temperature:{C: number, F: number};
}


export interface IActionT{
  type: "ADD_NEW_FAVORITE";
}