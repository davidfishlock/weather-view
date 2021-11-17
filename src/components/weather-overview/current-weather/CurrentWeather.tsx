import React from 'react'
import { City, CurrentWeatherReport } from 'ts-open-weather-map/dist/types/models'
import { strings } from '../../../constants/strings'
import { getWeatherIconPath } from '../../../utils/iconUtils'
import {
  formatDate,
  formatMetresPerSecond,
  formatPercentage,
  formatPressure,
  formatTemperature,
} from '../../../utils/numberFormatter'
import { toTitleCase } from '../../../utils/stringUtils'

type Props = {
  location: City | { name: string; lat: number; lon: number }
  weather: CurrentWeatherReport
}

const CurrentWeather: React.FC<Props> = ({ location, weather }) => {
  const weatherSummary = weather.weather[0]

  return (
    <div className="card">
      <h3 className="text-2xl">{toTitleCase(location.name)}</h3>
      <p>{formatDate(weather.dt)}</p>
      <div className="flex flex-row">
        <img
          className="h-40 w-40"
          src={getWeatherIconPath(weatherSummary.icon)}
          alt={weatherSummary.main}
        />

        <div>
          <h4 className="text-xl">{toTitleCase(weatherSummary.description)}</h4>
          <p className="text-xl">
            {`${formatTemperature(weather.temp)} (${
              strings.CURRENT_WEATHER_FEELS_LIKE
            } ${formatTemperature(weather.feelsLike)})`}
          </p>
          <p>
            <span className="font-semibold">{strings.CURRENT_WEATHER_HUMIDITY}</span>{' '}
            {formatPercentage(weather.humidity)}
          </p>
          <p>
            <span className="font-semibold">{strings.CURRENT_WEATHER_UV}</span>{' '}
            {Math.round(weather.uvi)}
          </p>
          <p>
            <span className="font-semibold">{strings.CURRENT_WEATHER_WIND}</span>{' '}
            {formatMetresPerSecond(weather.windSpeed)}
          </p>
          <p>
            <span className="font-semibold">{strings.CURRENT_WEATHER_PRESSURE}</span>{' '}
            {formatPressure(weather.pressure)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
