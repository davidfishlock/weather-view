import React from 'react'
import { WiUmbrella } from 'react-icons/wi'

const RootFrame: React.FC = ({ children }) => (
  <div className="flex flex-col items-center">
    <header className="w-full border-gray-600 border-b flex justify-center">
      <div className="px-8 max-w-4xl w-full">
        <WiUmbrella className="h-20 w-20 inline" />
        <h1 className="italic font-bold text-4xl inline align-middle">Weather View</h1>
      </div>
    </header>
    <main className="p-8 max-w-4xl w-full">{children}</main>
  </div>
)

export default RootFrame
