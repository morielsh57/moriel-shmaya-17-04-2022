import { GET_CURRENT_WEATHER_URL, GET_CURRENT_WEATHER_URL_PARAMS, GET_FIVE_DAYS_FORECASTS_URL, GET_FIVE_DAYS_FORECASTS_URL_PARAMS, GET_LOCATION_URL } from "../consts/url";

const FETCH_API = async (_url: string, _method: "POST" | "PUT" | "PATCH" | "DELETE" | "GET", _body?: any) => {
  try {
    let resp = await fetch(_url, {
      method: _method,
      body: JSON.stringify(_body),
      headers: {
        'content-type': "application/json"
      }
    });
    let data = await resp.json();
    // console.log(data);
    return data;
  }
  catch (err) {
    // console.log(err);
    return err;
  }
}

export const GET_LOCATION = (location:string) => FETCH_API(GET_LOCATION_URL+location,"GET");
export const GET_CURRENT_WEATHER = (locationKey:string) => FETCH_API(GET_CURRENT_WEATHER_URL+locationKey+GET_CURRENT_WEATHER_URL_PARAMS,"GET");
export const GET_FIVE_DAYS_FORECASTS = (locationKey:string,metricValue:boolean) => FETCH_API(GET_FIVE_DAYS_FORECASTS_URL+locationKey+GET_FIVE_DAYS_FORECASTS_URL_PARAMS+metricValue,"GET");