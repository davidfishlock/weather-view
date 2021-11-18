import React, { createContext, useState } from 'react'
import { Location } from '../types/location'

type LocationState = {
  userLocation?: Location
  setUserLocation: (location: Location) => void
  selectedLocation?: Location
  setSelectedLocation: (location: Location) => void
}

export const LocationContext = createContext<LocationState | undefined>(undefined)

export const LocationProvider: React.FC = ({ children }) => {
  const [userLocation, setUserLocation] = useState<Location>()
  const [selectedLocation, setSelectedLocation] = useState<Location>()

  const value = { userLocation, setUserLocation, selectedLocation, setSelectedLocation }

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}

export const useLocationContext = (): LocationState => {
  const context = React.useContext(LocationContext)

  if (context === undefined) {
    throw new Error('useLocationContext must be used within a LocationProvider')
  }

  return context
}
