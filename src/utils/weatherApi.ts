import { OpenWeatherMapApi } from 'ts-open-weather-map'

export default new OpenWeatherMapApi(process.env.REACT_APP_WEATHER_API_KEY as string)
