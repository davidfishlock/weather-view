import React, { useEffect } from 'react'
import { strings } from '../constants/strings'
import { useLocationContext } from '../contexts/Location'
import WeatherOverview from './WeatherOverview'

const MainPage: React.FC = () => {
  const { userLocation, setUserLocation, selectedLocation, setSelectedLocation } =
    useLocationContext()

  useEffect(() => {
    if (userLocation) return

    navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        name: strings.CURRENT_LOCATION,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }

      setUserLocation(location)
      if (!selectedLocation) setSelectedLocation(location)
    })
  }, [userLocation, setUserLocation, selectedLocation, setSelectedLocation])

  if (!selectedLocation) return <p>{strings.SELECT_LOCATION}</p>

  return <WeatherOverview location={selectedLocation} />
}

export default MainPage
