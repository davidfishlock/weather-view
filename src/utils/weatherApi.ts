import { OpenWeatherMapApi } from 'ts-open-weather-map'

export const api = new OpenWeatherMapApi(process.env.REACT_APP_WEATHER_API_KEY as string)
