import React from 'react'
import { WiUmbrella } from 'react-icons/wi'
import LocationSelector from './locationSelector/LocationSelector'

const Header: React.FC = () => (
  <header
    className="w-full default-border border-b sticky top-0 z-30 bg-cover bg-no-repeat"
    style={{ backgroundImage: 'url(images/thunderstorm.jpg)' }}
  >
    <div className="bg-gray-900 bg-opacity-60 flex justify-center">
      <div className="px-4 py-1 max-w-4xl w-full flex flex-row justify-between items-center">
        <div className="text-white flex flex-row items-center gap-1">
          <WiUmbrella className="h-12 w-12 -ml-2" role="presentation" />
          <h1 className="text-2xl sr-only md:not-sr-only">Weather View</h1>
        </div>

        <LocationSelector />
      </div>
    </div>
  </header>
)

export default Header
