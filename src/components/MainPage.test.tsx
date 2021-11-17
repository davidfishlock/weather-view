import { render, screen } from '@testing-library/react'
import React from 'react'
import { strings } from '../constants/strings'
import MainPage from './MainPage'

const geoLocationSpy = jest.spyOn(navigator.geolocation, 'getCurrentPosition')

test('renders prompt when no location selected', () => {
  geoLocationSpy.mockImplementationOnce((success, error) =>
    Promise.resolve(
      error?.({
        code: 1,
        message: 'GeoLocation Error',
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 0,
        TIMEOUT: 0,
      }),
    ),
  )

  render(<MainPage />)
  expect(screen.getByText(strings.SELECT_LOCATION)).toBeInTheDocument()
})
