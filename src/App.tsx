import React from 'react'
import MainPage from './components/MainPage'
import RootFrame from './components/RootFrame'

const App: React.FC = () => (
  <div>
    <RootFrame>
      <MainPage />
    </RootFrame>
  </div>
)

export default App
