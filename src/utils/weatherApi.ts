import { OpenWeatherMapApi } from 'ts-open-weather-map/dist/OpenWeatherMapApi'

export const api = new OpenWeatherMapApi(process.env.REACT_APP_WEATHER_API_KEY as string)
