import React, { useEffect, useState } from 'react'
import { City } from 'ts-open-weather-map/dist/types/models'
import { OneCallResponse } from 'ts-open-weather-map/dist/types/requests'
import weatherAPI from '../../utils/weatherApi'
import CurrentWeather from './current-weather/CurrentWeather'

type Props = { location?: City | { name: string; lat: number; lon: number } }

const WeatherOverview: React.FC<Props> = ({ location }) => {
  const [weatherData, setWeatherData] = useState<OneCallResponse>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (!location) return

    setIsLoading(true)

    weatherAPI
      .oneCall(location.lat, location.lon)
      .then((data) => {
        console.log(data)
        setWeatherData(data)
      })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [location])

  if (!location) return <p>Please select a location.</p>
  if (isLoading) return <p>Loading...</p>
  if (!weatherData || error) return <p>There was an error.</p>

  return (
    <>
      <h2>{`Current weather for ${location.name}`}</h2>
      <CurrentWeather weather={weatherData.current} />
    </>
  )
}

export default WeatherOverview
