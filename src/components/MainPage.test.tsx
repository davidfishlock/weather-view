import { render, screen } from '@testing-library/react'
import { strings } from '../constants/strings'
import { LocationProvider } from '../contexts/Location'
import MainPage from './MainPage'
import { vi } from 'vitest'

Object.defineProperty(global.navigator, 'geolocation', {
  writable: true,
  value: {
    getCurrentPosition: vi.fn().mockImplementation((_, error) =>
      Promise.resolve(
        error?.({
          code: 1,
          message: 'GeoLocation Error',
          PERMISSION_DENIED: 1,
          POSITION_UNAVAILABLE: 0,
          TIMEOUT: 0,
        }),
      ),
    ),
  },
})

test('renders prompt when no location selected', () => {
  render(
    <LocationProvider>
      <MainPage />
    </LocationProvider>,
  )
  expect(screen.getByText(strings.SELECT_LOCATION)).toBeInTheDocument()
})
