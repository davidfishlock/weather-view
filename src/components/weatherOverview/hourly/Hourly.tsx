import React from 'react'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import HourlyWeatherGraph from './HourlyWeatherGraph'
import HourlyWeatherIcons from './HourlyWeatherIcons'

type Props = {
  forecast: HourlyWeatherForecast[]
  timezoneOffset: number
}

const Hourly: React.FC<Props> = ({ forecast, timezoneOffset }) => {
  const trimmedForecast = forecast.slice(0, 10)
  const graphMargins = { left: 50, right: 10 }
  return (
    <section className="card relative p-0 overflow-hidden">
      <HourlyWeatherIcons
        className="-mb-8 mt-2"
        forecast={trimmedForecast}
        graphMargins={graphMargins}
      />
      <HourlyWeatherGraph
        forecast={trimmedForecast}
        timezoneOffset={timezoneOffset}
        graphMargins={graphMargins}
        className="h-52"
      />
    </section>
  )
}

export default Hourly
