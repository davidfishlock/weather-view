import React from 'react'
import MainPage from './components/MainPage'
import RootFrame from './components/RootFrame'
import { LocationProvider } from './contexts/Location'

const App: React.FC = () => (
  <LocationProvider>
    <RootFrame>
      <MainPage />
    </RootFrame>
  </LocationProvider>
)

export default App
