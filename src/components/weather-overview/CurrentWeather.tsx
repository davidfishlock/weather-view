import React from 'react'
import { CurrentWeatherReport } from 'ts-open-weather-map/dist/types/models'

type Props = {
  weather?: CurrentWeatherReport
}

const CurrentWeather: React.FC<Props> = ({ weather = undefined }) => (
  <>
    <p>{weather?.weather[0]?.description}</p>
  </>
)

export default CurrentWeather
