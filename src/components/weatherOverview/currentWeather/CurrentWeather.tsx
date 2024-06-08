import classNames from 'classnames'
import React from 'react'
import FiAlertTriangle from '../../../icons/alert-triangle.svg?react'
import WiWindDeg from '../../../icons/wi-wind-deg.svg?react'
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
  const WeatherIcon = getWeatherIcon(weatherSummary.icon)

  return (
    <section aria-labelledby="currentHeader" className={classNames(['card', className])}>
      <div className="flex flex-row flex-wrap gap-2 justify-between items-center">
        <div>
          <h2
            className="text-xl strong-text"
            aria-label={`${strings.CURRENT_WEATHER}: ${getFullLocationName(location)}`}
          >
            {getFullLocationName(location)}
          </h2>
          <p className="text-sm secondary-text">{formatDate(weather.dt + timezoneOffset)}</p>
        </div>
        {areAlertsAvailable && (
          <button
            aria-label={strings.CURRENT_WEATHER_ALERTS}
            className="button-alert"
            type="button"
            onClick={onShowAlerts}
          >
            <FiAlertTriangle className="h-6 w-6" role="presentation" />
          </button>
        )}
      </div>
      <div className="flex flex-row items-center">
        <div className="-ml-2 mr-2 icon-gray icon-lg">{WeatherIcon && <WeatherIcon />}</div>
        <div>
          <p className="text-lg capitalize">{weatherSummary.description}</p>
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
