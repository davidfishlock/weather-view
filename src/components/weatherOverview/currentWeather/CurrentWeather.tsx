import classNames from 'classnames'
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

type Props = {
  location: City | { name: string; lat: number; lon: number }
  weather: CurrentWeatherReport
  timezoneOffset: number
  areAlertsAvailable: boolean
  onShowAlerts: () => void
  className?: string
}

const CurrentWeather: React.FC<Props> = ({
  location,
  weather,
  timezoneOffset,
  areAlertsAvailable,
  onShowAlerts,
  className,
}) => {
  const weatherSummary = weather.weather[0]
  const icon = getWeatherIcon(weatherSummary.icon)

  return (
    <section className={classNames(['card', className])}>
      <h3 className="text-xl strong-text">{getFullLocationName(location)}</h3>
      <p className="text-sm secondary-text">{formatDate(weather.dt + timezoneOffset)}</p>
      {areAlertsAvailable && (
        <button className="button-alert mt-2" type="button" onClick={onShowAlerts}>
          <FiAlertTriangle className="h-6 w-6 mr-2" /> {strings.CURRENT_WEATHER_ALERTS}
        </button>
      )}

      <div className="flex flex-row items-center">
        <IconContext.Provider value={{ className: 'icon-gray icon-lg' }}>
          <div className="-ml-2 mr-2">{icon ? React.createElement(icon) : null}</div>
        </IconContext.Provider>
        <div>
          <h4 className="text-xl capitalize">{weatherSummary.description}</h4>
          <p className="text-lg">{formatTemperature(weather.temp)}</p>
          {!!(Math.abs(weather.temp - weather.feelsLike) > 1) && (
            <p className="text-sm">
              ({strings.CURRENT_WEATHER_FEELS_LIKE} {formatTemperature(weather.feelsLike)})
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
        <p>
          <span className="strong-text">{strings.CURRENT_WEATHER_HUMIDITY}</span>{' '}
          {formatPercentage(weather.humidity)}
        </p>
        <p>
          <span className="strong-text">{strings.CURRENT_WEATHER_UV}</span>{' '}
          {Math.round(weather.uvi)}
        </p>
        <p>
          <span className="strong-text">{strings.CURRENT_WEATHER_WIND}</span>
          <WiWindDeg
            className="h-6 w-6 ml-1 mb-0.5 inline"
            style={{ transform: `rotate(${weather.windDeg - 180}deg)` }}
          />
          {formatWindSpeed(weather.windSpeed)}
        </p>
        <p>
          <span className="strong-text">{strings.CURRENT_WEATHER_PRESSURE}</span>{' '}
          {formatPressure(weather.pressure)}
        </p>
      </div>
    </section>
  )
}

export default CurrentWeather
