import React from 'react'
import Header from './Header'

const RootFrame: React.FC = ({ children }) => (
  <div className="flex flex-col items-center">
    <Header />

    <main className="md:p-4 max-w-4xl w-full">{children}</main>
  </div>
)

export default RootFrame
