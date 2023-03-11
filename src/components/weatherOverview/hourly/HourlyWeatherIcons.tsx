import classNames from 'classnames'
import React from 'react'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import { getWeatherIcon } from '../../../utils/iconUtils'

type Props = {
  forecast: HourlyWeatherForecast[]
  graphMargins: { left: number; right: number }
  className: string
}

const Hourly: React.FC<Props> = ({ forecast, graphMargins, className }) => {
  return (
    <div
      className={classNames(['flex flex-row justify-around', className])}
      style={{ marginLeft: graphMargins.left, marginRight: graphMargins.right }}
    >
      {forecast.map((hour) => {
        const WeatherIcon = getWeatherIcon(hour.weather[0].icon)
        return (
          <div className="h-6 w-6 sm:h-8 sm:w-8 -mx-1" key={`icon-${hour.dt}`}>
            {!!WeatherIcon && <WeatherIcon />}
          </div>
        )
      })}
    </div>
  )
}

export default Hourly
