import React from 'react'
import { CurrentWeatherReport } from 'ts-open-weather-map/dist/types/models'
import { toTitleCase } from '../../../utils/stringUtils'

type Props = {
  weather?: CurrentWeatherReport
}

const CurrentWeather: React.FC<Props> = ({ weather = undefined }) => (
  <div className="card">
    <p>{toTitleCase(weather?.weather[0]?.description)}</p>
  </div>
)

export default CurrentWeather
