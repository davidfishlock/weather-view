import React, { useEffect, useState } from 'react'
import usePortal from 'react-useportal'
import { City, OneCallResponse } from 'ts-open-weather-map'
import { strings } from '../../constants/strings'
import { getUnitsForLocale } from '../../utils/numberFormatter'
import { api } from '../../utils/weatherApi'
import AlertItem from '../alert/AlertItem'
import Modal from '../common/modal/Modal'
import Spinner from '../common/spinner/Spinner'
import CurrentWeather from './currentWeather/CurrentWeather'
import Hourly from './hourly/Hourly'
import Next7Days from './next7Days/Next7Days'
import Raincast from './rainCast/Raincast'
import classNames from 'classnames'

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
  } = usePortal({ closeOnEsc: false, closeOnOutsideClick: false })

  useEffect(() => {
    setIsLoading(true)

    api
      .oneCall(location.lat, location.lon, undefined, getUnitsForLocale(window.navigator.language))
      .then(setWeatherData)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [location])

  if (isLoading)
    return (
      <div className="flex justify-center items-center my-10">
        <Spinner />
      </div>
    )
  if (!weatherData || error)
    return <p className="error inline-message">{strings.DATA_LOAD_ERROR}</p>

  return (
    <>
      <div aria-hidden={isAlertModalOpen} className="grid grid-cols-7 md:gap-4">
        {!!weatherData.current && (
          <CurrentWeather
            className={classNames('col-span-7 border-0 md:border', {
              'md:col-span-3': !!weatherData.minutely,
            })}
            location={location}
            weather={weatherData.current}
            timezoneOffset={weatherData.timezoneOffset}
            areAlertsAvailable={!!weatherData.alerts?.length}
            onShowAlerts={openAlerts}
          />
        )}
        {!!weatherData.minutely && (
          <Raincast
            className="col-span-7 md:col-span-4 h-60 md:h-auto"
            location={location}
            forecast={weatherData.minutely}
            timezoneOffset={weatherData.timezoneOffset}
          />
        )}
        {!!weatherData.hourly && (
          <Hourly
            className="col-span-7"
            forecast={weatherData.hourly}
            timezoneOffset={weatherData.timezoneOffset}
          />
        )}
        {!!weatherData.daily && (
          <Next7Days
            className="col-span-7"
            forecast={weatherData.daily}
            timezoneOffset={weatherData.timezoneOffset}
          />
        )}
      </div>

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
