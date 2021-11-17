import React, { useEffect, useState } from 'react'
import { City } from 'ts-open-weather-map/dist/types/models'
import { strings } from '../constants/strings'
import WeatherOverview from './weather-overview/WeatherOverview'

const MainPage: React.FC = () => {
  const [location, setLocation] = useState<City | { name: string; lat: number; lon: number }>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setLocation({
        name: strings.CURRENT_LOCATION,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }),
    )
  }, [])

  if (!location) return <p>{strings.SELECT_LOCATION}</p>

  return <WeatherOverview location={location} />
}

export default MainPage
