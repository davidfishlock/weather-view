import { render } from '@testing-library/react'
import App from './App'
import { vi } from 'vitest'

Object.defineProperty(global.navigator, 'geolocation', {
  writable: true,
  value: {
    getCurrentPosition: vi.fn((success) => {
      success({
        coords: {
          latitude: 0,
          longitude: 0,
          accuracy: 0,
        },
      })
    }),
  },
})

test('renders without error', () => {
  render(<App />)
})
