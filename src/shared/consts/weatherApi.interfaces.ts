export interface ILocationAutoCompleteApiT{
  Version:number;
  Key:string;
  Type:string;
  Rank:number;
  LocalizedName:string;
  Country:{ID:string; LocalizedName:string};
  AdministrativeArea:{ID:string; LocalizedName:string};
}

export interface ICurrentWeatherLocationApiT{
  LocalObservationDateTime:string;
  EpochTime:number;
  WeatherText:string;
  WeatherIcon:number;
  HasPrecipitation:boolean;
  PrecipitationType:any|null
  IsDayTime:boolean;
  Temperature:ITemperature;
  MobileLink:string;
  Link:string;
}

export interface IFiveDailyForecastsApiT{
  Headline: IFiveDailyForecastsApiHeadlineT;
  DailyForecasts: IFiveDailyForecastsApiDailyForecastsT[];
}

interface IFiveDailyForecastsApiHeadlineT{
  EffectiveDate:string;
  EffectiveEpochDate:string;
  Severity:number;
  Text:string;
  Category:string;
  EndDate:string;
  EndEpochDate:number;
  MobileLink:string;
  Link:string;
}

export interface IFiveDailyForecastsApiDailyForecastsT{
  Date:string;
  EpochDate:number;
  Temperature:{Minimum:ITemperatureValueT; Maximum:ITemperatureValueT;};
  Day:IApiDailyForecastsDayNightT;
  Night:IApiDailyForecastsDayNightT;
  Sources:string[];
  MobileLink:string;
  Link:string;
}

interface ITemperature{
  Metric:ITemperatureValueT;
  Imperial:ITemperatureValueT;
}

interface ITemperatureValueT{
  Value:number;
  Unit:string;
  UnitType:number
}

interface IApiDailyForecastsDayNightT{
  Icon:number;
  IconPhrase:string;
  HasPrecipitation:boolean;
}