import React from 'react'
import { IconContext } from 'react-icons'
import { FiAlertTriangle } from 'react-icons/fi'
import { WiWindDeg } from 'react-icons/wi'
import { City, CurrentWeatherReport } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { getFullLocationName } from '../../../types/location'
import { getWeatherIcon } from '../../../utils/iconUtils'
import {
  formatDate,
  formatPercentage,
  formatPressure,
  formatTemperature,
  formatWindSpeed,
} from '../../../utils/numberFormatter'
import { toTitleCase } from '../../../utils/stringUtils'

type Props = {
  location: City | { name: string; lat: number; lon: number }
  weather: CurrentWeatherReport
  timezoneOffset: number
  areAlertsAvailable: boolean
  onShowAlerts: () => void
}

const CurrentWeather: React.FC<Props> = ({
  location,
  weather,
  timezoneOffset,
  areAlertsAvailable,
  onShowAlerts,
}) => {
  const weatherSummary = weather.weather[0]
  const icon = getWeatherIcon(weatherSummary.icon)

  return (
    <section className="card">
      <h3 className="text-2xl">{getFullLocationName(location)}</h3>
      <p>{formatDate(weather.dt + timezoneOffset)}</p>
      {areAlertsAvailable ? (
        <button className="button-alert my-2" type="button" onClick={onShowAlerts}>
          <FiAlertTriangle className="icon-white h-6 w-6 mr-2 inline" />{' '}
          {strings.CURRENT_WEATHER_ALERTS}
        </button>
      ) : null}

      <div className="flex flex-row">
        <IconContext.Provider value={{ className: 'icon-gray icon-lg' }}>
          <div className="-ml-2 mr-2">{icon ? React.createElement(icon) : null}</div>
        </IconContext.Provider>
        <div>
          <h4 className="text-xl">{toTitleCase(weatherSummary.description)}</h4>
          <p className="text-xl">
            {formatTemperature(weather.temp)}
            {Math.abs(weather.temp - weather.feelsLike) > 1 ? (
              <span className="text-sm ml-2 mb-1 inline-block align-middle">
                ({strings.CURRENT_WEATHER_FEELS_LIKE} {formatTemperature(weather.feelsLike)})
              </span>
            ) : null}
          </p>
          <div className="grid grid-cols-2 mt-2 gap-x-2">
            <p>
              <span className="font-semibold">{strings.CURRENT_WEATHER_HUMIDITY}</span>{' '}
              {formatPercentage(weather.humidity)}
            </p>
            <p>
              <span className="font-semibold">{strings.CURRENT_WEATHER_UV}</span>{' '}
              {Math.round(weather.uvi)}
            </p>
            <p>
              <span className="font-semibold">{strings.CURRENT_WEATHER_WIND}</span>
              <WiWindDeg
                className="h-6 w-6 ml-1 mb-0.5 inline"
                style={{ transform: `rotate(${weather.windDeg - 180}deg)` }}
              />
              {formatWindSpeed(weather.windSpeed)}
            </p>
            <p>
              <span className="font-semibold">{strings.CURRENT_WEATHER_PRESSURE}</span>{' '}
              {formatPressure(weather.pressure)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentWeather
