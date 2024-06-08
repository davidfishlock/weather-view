import { OpenWeatherMapApi } from 'ts-open-weather-map'

export const api = new OpenWeatherMapApi(import.meta.env.VITE_WEATHER_API_KEY as string)
