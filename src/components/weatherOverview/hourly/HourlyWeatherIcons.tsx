import classNames from 'classnames'
import React from 'react'
import { IconContext } from 'react-icons'
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
      <IconContext.Provider value={{ className: 'icon-gray h-6 w-6 sm:h-8 sm:w-8' }}>
        {forecast.map((hour) => {
          const icon = getWeatherIcon(hour.weather[0].icon)
          return <div key={`icon-${hour.dt}`}>{icon ? React.createElement(icon) : null}</div>
        })}
      </IconContext.Provider>
    </div>
  )
}

export default Hourly
