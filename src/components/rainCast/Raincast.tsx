import React from 'react'
import { City, MinutelyWeatherForecast } from 'ts-open-weather-map'
import RainMap from './RainMap'
import Timeline from './Timeline'

type Props = {
  location: City | { name: string; lat: number; lon: number }
  forecast: MinutelyWeatherForecast[]
}

const Raincast: React.FC<Props> = ({ location, forecast }) => (
  <section className="card h-52 relative p-4">
    <Timeline forecast={forecast} className="absolute bottom-6 left-6 z-20" />
    <RainMap location={location} className="h-full z-10" />
  </section>
)

export default Raincast
