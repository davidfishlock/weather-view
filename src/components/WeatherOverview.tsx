import React, { useEffect, useState } from 'react'
import usePortal from 'react-useportal'
import { City, OneCallResponse } from 'ts-open-weather-map'
import { api } from '../utils/weatherApi'
import AlertItem from './alert/AlertItem'
import CurrentWeather from './currentWeather/CurrentWeather'
import Modal from './modal/Modal'
import Next7Days from './next7Days/Next7Days'
import Raincast from './rainCast/Raincast'

type Props = { location: City | { name: string; lat: number; lon: number } }

const WeatherOverview: React.FC<Props> = ({ location }) => {
  const [weatherData, setWeatherData] = useState<OneCallResponse>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()

  const {
    openPortal: openAlerts,
    closePortal: closeAlerts,
    Portal,
    isOpen: isAlertModalOpen,
  } = usePortal()

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
        <CurrentWeather
          location={location}
          weather={weatherData.current}
          timezoneOffset={weatherData.timezoneOffset}
          areAlertsAvailable={!!weatherData.alerts?.length}
          onShowAlerts={openAlerts}
        />
      ) : null}
      {weatherData.minutely ? (
        <Raincast
          location={location}
          forecast={weatherData.minutely}
          timezoneOffset={weatherData.timezoneOffset}
        />
      ) : null}
      {weatherData.daily ? (
        <Next7Days forecast={weatherData.daily} timezoneOffset={weatherData.timezoneOffset} />
      ) : null}

      {isAlertModalOpen && (
        <Portal>
          <Modal title="Weather Alerts" onClose={closeAlerts}>
            {weatherData.alerts?.map((alert) => (
              <AlertItem key={alert.description} alert={alert} />
            ))}
          </Modal>
        </Portal>
      )}
    </>
  )
}

export default WeatherOverview
