import classNames from 'classnames'
import React from 'react'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import { formatPrecipitation, formatTemperature } from '../../../utils/numberFormatter'

type Props = {
  forecast: HourlyWeatherForecast
  className?: string
}

const HourlyGraphOverlay: React.FC<Props> = ({ forecast, className }) => {
  const totalPrecipitation = (forecast.rain?.['1h'] ?? 0) + (forecast.snow?.['1h'] ?? 0)
  return (
    <div
      className={classNames(
        'default-text whitespace-nowrap text-center text-xs secondary-background rounded-lg p-1',
        className,
      )}
    >
      <p className="capitalize">{forecast.weather[0].main}</p>
      {!!totalPrecipitation && <p>{formatPrecipitation(totalPrecipitation)}</p>}
      <p>{formatTemperature(forecast.temp, 1)}</p>
    </div>
  )
}

export default HourlyGraphOverlay
