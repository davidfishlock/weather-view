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
      <div className="flex flex-row flex-wrap gap-2 justify-between items-center">
        <div>
          <h2 className="text-xl strong-text">{getFullLocationName(location)}</h2>
          <p className="text-sm secondary-text">{formatDate(weather.dt + timezoneOffset)}</p>
        </div>
        {areAlertsAvailable && (
          <button
            aria-label={strings.CURRENT_WEATHER_ALERTS}
            className="button-alert"
            type="button"
            onClick={onShowAlerts}
          >
            <FiAlertTriangle className="h-6 w-6" />
          </button>
        )}
      </div>
      <div className="flex flex-row items-center">
        <IconContext.Provider value={{ className: 'icon-gray icon-lg' }}>
          <div className="-ml-2 mr-2">{icon ? React.createElement(icon) : null}</div>
        </IconContext.Provider>
        <div>
          <h3 className="text-lg capitalize">{weatherSummary.description}</h3>
          <p className="text-lg">{formatTemperature(weather.temp)}</p>
          {!!(Math.abs(weather.temp - weather.feelsLike) > 1) && (
            <p className="text-sm">
              ({strings.CURRENT_WEATHER_FEELS_LIKE} {formatTemperature(weather.feelsLike)})
            </p>
          )}
        </div>
      </div>
      <div className="max-w-xs grid" style={{ gridTemplateColumns: 'repeat(auto-fill, 150px)' }}>
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
            className="h-6 w-6 mx-0.5 -mt-0.5 inline"
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
