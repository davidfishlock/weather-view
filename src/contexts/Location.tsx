import React, { createContext, ReactNode, useState } from 'react'
import { Location } from '../types/location'

type LocationState = {
  userLocation?: Location
  setUserLocation: (location: Location) => void
  selectedLocation?: Location
  setSelectedLocation: (location: Location) => void
  locationFetchCompleted: boolean
  setLocationFetchCompleted: (isCompleted: boolean) => void
}

export const LocationContext = createContext<LocationState | undefined>(undefined)

type LocationProviderProps = {
  children: ReactNode
}

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [userLocation, setUserLocation] = useState<Location>()
  const [selectedLocation, setSelectedLocation] = useState<Location>()
  const [locationFetchCompleted, setLocationFetchCompleted] = useState(false)

  const value = {
    userLocation,
    setUserLocation,
    selectedLocation,
    setSelectedLocation,
    locationFetchCompleted,
    setLocationFetchCompleted,
  }

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}

export const useLocationContext = (): LocationState => {
  const context = React.useContext(LocationContext)

  if (context === undefined) {
    throw new Error('useLocationContext must be used within a LocationProvider')
  }

  return context
}
