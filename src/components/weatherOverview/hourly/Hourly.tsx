import classNames from 'classnames'
import React from 'react'
import { HourlyWeatherForecast } from 'ts-open-weather-map'
import HourlyWeatherGraph from './HourlyWeatherGraph'
import HourlyWeatherIcons from './HourlyWeatherIcons'
import { strings } from '../../../constants/strings'
import HourlyAccessibleDescription from './HourlyAccessibleDescription'

type Props = {
  forecast: HourlyWeatherForecast[]
  timezoneOffset: number
  className?: string
}

const Hourly: React.FC<Props> = ({ forecast, timezoneOffset, className }) => {
  const trimmedForecast = forecast.slice(0, 10)
  const graphMargins = { left: 50, right: 10 }
  return (
    <section
      aria-labelledby="hourlyHeader"
      className={classNames(['card', 'relative', 'p-0', 'overflow-hidden', className])}
    >
      <h2 id="hourlyHeader" className="sr-only">
        {strings.HOURLY_WEATHER}
      </h2>
      <div aria-hidden="true">
        <HourlyWeatherIcons
          className="-mb-9 mt-3"
          forecast={trimmedForecast}
          graphMargins={graphMargins}
        />
        <HourlyWeatherGraph
          forecast={trimmedForecast}
          timezoneOffset={timezoneOffset}
          graphMargins={graphMargins}
          className="h-52"
        />
      </div>
      <HourlyAccessibleDescription forecast={trimmedForecast} timezoneOffset={timezoneOffset} />
    </section>
  )
}

export default Hourly
