import React from 'react'
import 'react-vis/dist/style.css'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import {
  formatDate,
  formatPrecipitation,
  formatTemperature,
  hourFormat,
} from '../../../utils/numberFormatter'

type Props = {
  forecast: HourlyWeatherForecast[]
  timezoneOffset: number
}

const HourlyAccessibleDescription: React.FC<Props> = ({ forecast, timezoneOffset }) => {
  return (
    <ul className="sr-only">
      {forecast.map((entry) => {
        const totalPrecipitation = (entry.rain?.['1h'] ?? 0) + (entry.snow?.['1h'] ?? 0)
        return (
          <li key={`hourlyDescription-${entry.dt}`}>
            <h3>
              {entry === forecast[0]
                ? strings.TIME_NOW
                : formatDate(entry.dt + timezoneOffset, hourFormat).replace(/\s/g, '')}
            </h3>
            <p>{entry.weather[0].main}</p>
            {!!totalPrecipitation && (
              <p>
                {strings.PRECIPITATION}: {formatPrecipitation(totalPrecipitation)}
              </p>
            )}
            <p>
              {strings.TEMPERATURE}: {formatTemperature(entry.temp, 1)}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default HourlyAccessibleDescription
