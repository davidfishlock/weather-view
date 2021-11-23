import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { strings } from '../../../constants/strings'
import * as locationContext from '../../../contexts/Location'
import { Location } from '../../../types/location'
import LocationSelector from './LocationSelector'

const DEFAULT_SEARCH_QUERY = 'Somewhere'
const DEFAULT_USER_LOCATION = { lat: 123, lon: 456, name: 'Somewhere' }

const DEFAULT_CITIES_RESPONSE = [
  {
    lat: 1,
    lon: 1,
    name: 'City 1',
  },
  {
    lat: 2,
    lon: 2,
    name: 'City 2',
  },
]

const mockSetLocation = jest.fn()
const mockGeoCoding = jest.fn()

jest.mock('../../../utils/weatherApi', () => ({
  get api() {
    return {
      geoCoding: mockGeoCoding,
      oneCall: jest.fn(),
      apiKey: '123456',
    }
  },
}))

function setupLocationContext(userLocation?: Location) {
  return jest.spyOn(locationContext, 'useLocationContext').mockReturnValue({
    userLocation: userLocation,
    setSelectedLocation: mockSetLocation,
    setUserLocation: jest.fn(),
    selectedLocation: undefined,
  })
}

function renderTarget() {
  return render(<LocationSelector />)
}

describe('LocationSelector', () => {
  beforeEach(() => {
    setupLocationContext(DEFAULT_USER_LOCATION)
    mockGeoCoding.mockResolvedValue(DEFAULT_CITIES_RESPONSE)
  })

  test('no current location button displayed when user location unset', () => {
    setupLocationContext(undefined)
    renderTarget()

    expect(screen.queryByLabelText(strings.CURRENT_LOCATION_BUTTON)).not.toBeInTheDocument()
  })

  test('displays current location button and sets location on click when user location set', () => {
    renderTarget()
    userEvent.click(screen.getByLabelText(strings.CURRENT_LOCATION_BUTTON))

    expect(mockSetLocation).toBeCalledTimes(1)
    expect(mockSetLocation).toBeCalledWith(DEFAULT_USER_LOCATION)
  })

  test('calls api with typed query and debounces to minimize requests', async () => {
    renderTarget()
    userEvent.type(screen.getByLabelText(strings.LOCATION_SEARCH), DEFAULT_SEARCH_QUERY)

    await waitFor(() => expect(mockGeoCoding).toHaveBeenCalledTimes(1))
    expect(mockGeoCoding).toBeCalledWith(DEFAULT_SEARCH_QUERY, 5)
  })

  test('shows item for each result', async () => {
    const { rerender } = renderTarget()
    userEvent.type(screen.getByLabelText(strings.LOCATION_SEARCH), DEFAULT_SEARCH_QUERY)
    await waitFor(() => expect(mockGeoCoding).toHaveBeenCalledTimes(1))
    rerender(<LocationSelector />)

    expect(screen.getByText(DEFAULT_CITIES_RESPONSE[0].name)).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_CITIES_RESPONSE[1].name)).toBeInTheDocument()
  })

  test('sets location on item click', async () => {
    const { rerender } = renderTarget()
    userEvent.type(screen.getByLabelText(strings.LOCATION_SEARCH), DEFAULT_SEARCH_QUERY)
    await waitFor(() => expect(mockGeoCoding).toHaveBeenCalledTimes(1))
    rerender(<LocationSelector />)
    userEvent.click(screen.getByText(DEFAULT_CITIES_RESPONSE[0].name))

    expect(mockSetLocation).toBeCalledTimes(1)
    expect(mockSetLocation).toBeCalledWith(DEFAULT_CITIES_RESPONSE[0])
  })

  test('escape key clears input', () => {
    const { rerender } = renderTarget()
    userEvent.type(screen.getByLabelText(strings.LOCATION_SEARCH), DEFAULT_SEARCH_QUERY)
    rerender(<LocationSelector />)

    expect(screen.getByLabelText(strings.LOCATION_SEARCH)).toHaveValue(DEFAULT_SEARCH_QUERY)

    act(() => {
      userEvent.type(screen.getByLabelText(strings.LOCATION_SEARCH), '{esc}')
      rerender(<LocationSelector />)
    })

    expect(screen.getByLabelText(strings.LOCATION_SEARCH)).toHaveValue('')
  })

  test('clear button clears input', () => {
    const { rerender } = renderTarget()
    userEvent.type(screen.getByLabelText(strings.LOCATION_SEARCH), DEFAULT_SEARCH_QUERY)
    rerender(<LocationSelector />)

    expect(screen.getByLabelText(strings.LOCATION_SEARCH)).toHaveValue(DEFAULT_SEARCH_QUERY)

    act(() => {
      userEvent.click(screen.getByLabelText(strings.LOCATION_SEARCH_CLEAR))
      rerender(<LocationSelector />)
    })

    expect(screen.getByLabelText(strings.LOCATION_SEARCH)).toHaveValue('')
  })
})
