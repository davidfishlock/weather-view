import classNames from 'classnames'
import React from 'react'
import { City, MinutelyWeatherForecast } from 'ts-open-weather-map'
import RainMap from './RainMap'
import Timeline from './Timeline'
import { strings } from '../../../constants/strings'

type Props = {
  location: City | { name: string; lat: number; lon: number }
  forecast: MinutelyWeatherForecast[]
  timezoneOffset: number
  className?: string
}

const Raincast: React.FC<Props> = ({ location, forecast, timezoneOffset, className }) => (
  <section aria-labelledby="raincastHeader" className={classNames(['card', 'p-0', className])}>
    <h2 id="raincastHeader" className="sr-only">
      {strings.RAIN_FORECAST}
    </h2>
    <div className="relative h-full w-full">
      <Timeline
        timezoneOffset={timezoneOffset}
        forecast={forecast}
        className="absolute bottom-2 left-2 z-20"
      />
      <div aria-hidden={true} className="relative h-full w-full">
        <RainMap location={location} className="h-full z-10 md:rounded-2xl" />
      </div>
    </div>
  </section>
)

export default Raincast
