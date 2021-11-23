import classNames from 'classnames'
import React from 'react'
import { City, MinutelyWeatherForecast } from 'ts-open-weather-map'
import RainMap from './RainMap'
import Timeline from './Timeline'

type Props = {
  location: City | { name: string; lat: number; lon: number }
  forecast: MinutelyWeatherForecast[]
  timezoneOffset: number
  className?: string
}

const Raincast: React.FC<Props> = ({ location, forecast, timezoneOffset, className }) => (
  <section className={classNames(['card', 'p-0', className])}>
    <div className="relative h-full w-full">
      <Timeline
        timezoneOffset={timezoneOffset}
        forecast={forecast}
        className="absolute bottom-2 left-2 z-20"
      />
      <RainMap location={location} className="h-full z-10 md:rounded-2xl" />
    </div>
  </section>
)

export default Raincast
