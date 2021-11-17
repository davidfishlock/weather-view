import React, { useEffect, useState } from 'react'
import { City } from 'ts-open-weather-map/dist/types/models'
import { OneCallResponse } from 'ts-open-weather-map/dist/types/requests'
import { api } from '../../utils/weatherApi'
import CurrentWeather from './current-weather/CurrentWeather'

type Props = { location: City | { name: string; lat: number; lon: number } }

const WeatherOverview: React.FC<Props> = ({ location }) => {
  const [weatherData, setWeatherData] = useState<OneCallResponse>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setIsLoading(true)

    api
      .oneCall(location.lat, location.lon, undefined, 'metric')
      .then(setWeatherData)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [location])

  if (isLoading) return <p>Loading...</p>
  if (!weatherData || error) return <p>There was an error.</p>

  return (
    <>
      {weatherData.current ? (
        <CurrentWeather location={location} weather={weatherData.current} />
      ) : null}
    </>
  )
}

export default WeatherOverview
