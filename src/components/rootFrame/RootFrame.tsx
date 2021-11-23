import React from 'react'
import { WiUmbrella } from 'react-icons/wi'
import LocationSelector from './locationSelector/LocationSelector'

const RootFrame: React.FC = ({ children }) => (
  <div className="flex flex-col items-center">
    <header className="w-full border-gray-300 border-b flex justify-center">
      <div className="px-8 py-1 max-w-4xl w-full flex flex-row justify-between items-center">
        <div>
          <WiUmbrella className="h-14 w-14 inline" />
          <h1 className="font-semibold text-3xl inline align-middle ml-1">Weather View</h1>
        </div>

        <LocationSelector />
      </div>
    </header>
    <main className="p-8 max-w-4xl w-full">{children}</main>
  </div>
)

export default RootFrame
