import React, { useEffect } from 'react'
import { strings } from '../constants/strings'
import { useLocationContext } from '../contexts/Location'
import Spinner from './common/spinner/Spinner'
import WeatherOverview from './weatherOverview/WeatherOverview'

const MainPage: React.FC = () => {
  const {
    userLocation,
    setUserLocation,
    selectedLocation,
    setSelectedLocation,
    locationFetchCompleted,
    setLocationFetchCompleted,
  } = useLocationContext()

  useEffect(() => {
    if (userLocation) return

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          name: strings.CURRENT_LOCATION,
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }

        setUserLocation(location)
        if (!selectedLocation) setSelectedLocation(location)
        setLocationFetchCompleted(true)
      },
      () => setLocationFetchCompleted(true),
    )
  }, [userLocation, setUserLocation, selectedLocation, setSelectedLocation])

  if (!locationFetchCompleted)
    return (
      <div className="flex justify-center items-center my-10">
        <Spinner />
      </div>
    )

  if (!selectedLocation) return <p className="inline-message">{strings.SELECT_LOCATION}</p>

  return <WeatherOverview location={selectedLocation} />
}

export default MainPage
