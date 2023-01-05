import React, { ReactNode } from 'react'
import Header from './Header'

type Props = {
  children: ReactNode
}

const RootFrame: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col items-center">
    <Header />

    <main className="md:p-4 max-w-4xl w-full">{children}</main>
  </div>
)

export default RootFrame
