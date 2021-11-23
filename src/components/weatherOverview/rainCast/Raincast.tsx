import React from 'react'
import { City, MinutelyWeatherForecast } from 'ts-open-weather-map'
import RainMap from './RainMap'
import Timeline from './Timeline'

type Props = {
  location: City | { name: string; lat: number; lon: number }
  forecast: MinutelyWeatherForecast[]
  timezoneOffset: number
}

const Raincast: React.FC<Props> = ({ location, forecast, timezoneOffset }) => (
  <section className="card h-52 relative p-0 bg-gray-200">
    <Timeline
      timezoneOffset={timezoneOffset}
      forecast={forecast}
      className="absolute bottom-2 left-2 z-20"
    />
    <RainMap location={location} className="h-full z-10 rounded-2xl" />
  </section>
)

export default Raincast
