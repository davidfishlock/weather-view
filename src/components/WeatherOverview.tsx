import React, { useEffect, useState } from 'react'
import { City, OneCallResponse } from 'ts-open-weather-map'
import { api } from '../utils/weatherApi'
import Alert from './alert/Alert'
import CurrentWeather from './currentWeather/CurrentWeather'
import Next7Days from './next7Days/Next7Days'
import Raincast from './rainCast/Raincast'

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
      {weatherData.alerts?.map((alert) => (
        <Alert alert={alert} />
      ))}
      {weatherData.current ? (
        <CurrentWeather location={location} weather={weatherData.current} />
      ) : null}
      {weatherData.minutely ? (
        <Raincast location={location} forecast={weatherData.minutely} />
      ) : null}
      {weatherData.daily ? <Next7Days forecast={weatherData.daily} /> : null}
    </>
  )
}

export default WeatherOverview
