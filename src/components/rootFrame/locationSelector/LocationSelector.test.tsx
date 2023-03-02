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
    locationFetchCompleted: false,
    setLocationFetchCompleted: jest.fn(),
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

  test('displays current location button and sets location on click when user location set', async () => {
    renderTarget()

    await userEvent.click(screen.getByLabelText(strings.CURRENT_LOCATION_BUTTON))

    expect(mockSetLocation).toBeCalledTimes(1)
    expect(mockSetLocation).toBeCalledWith(DEFAULT_USER_LOCATION)
  })

  test('calls api with typed query and debounces to minimize requests', async () => {
    renderTarget()

    await userEvent.type(screen.getByLabelText(strings.CITY_SEARCH), DEFAULT_SEARCH_QUERY)
    await waitFor(() => expect(mockGeoCoding).toHaveBeenCalledTimes(1))

    expect(mockGeoCoding).toBeCalledWith(DEFAULT_SEARCH_QUERY, 5)
  })

  test('shows item for each result', async () => {
    renderTarget()

    await userEvent.type(screen.getByLabelText(strings.CITY_SEARCH), DEFAULT_SEARCH_QUERY)

    expect(await screen.findByText(DEFAULT_CITIES_RESPONSE[0].name)).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_CITIES_RESPONSE[1].name)).toBeInTheDocument()
  })

  test('sets location on item click', async () => {
    renderTarget()

    await userEvent.type(screen.getByLabelText(strings.CITY_SEARCH), DEFAULT_SEARCH_QUERY)
    await screen.findByText(DEFAULT_CITIES_RESPONSE[0].name)

    await userEvent.click(screen.getByText(DEFAULT_CITIES_RESPONSE[0].name))

    expect(mockSetLocation).toBeCalledTimes(1)
    expect(mockSetLocation).toBeCalledWith(DEFAULT_CITIES_RESPONSE[0])
  })

  test('can select an item with the keyboard', async () => {
    renderTarget()

    await userEvent.type(screen.getByLabelText(strings.CITY_SEARCH), DEFAULT_SEARCH_QUERY)
    await screen.findByText(DEFAULT_CITIES_RESPONSE[0].name)

    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{Enter}')

    expect(mockSetLocation).toBeCalledTimes(1)
    expect(mockSetLocation).toBeCalledWith(DEFAULT_CITIES_RESPONSE[0])
  })

  test('escape key clears input', async () => {
    renderTarget()

    await userEvent.type(screen.getByLabelText(strings.CITY_SEARCH), DEFAULT_SEARCH_QUERY)
    expect(screen.getByLabelText(strings.CITY_SEARCH)).toHaveValue(DEFAULT_SEARCH_QUERY)

    await userEvent.keyboard('{Escape}')
    expect(screen.getByLabelText(strings.CITY_SEARCH)).toHaveValue('')
  })

  test('clear button clears input', async () => {
    renderTarget()

    await userEvent.type(screen.getByLabelText(strings.CITY_SEARCH), DEFAULT_SEARCH_QUERY)
    expect(screen.getByLabelText(strings.CITY_SEARCH)).toHaveValue(DEFAULT_SEARCH_QUERY)

    await userEvent.click(screen.getByLabelText(strings.CITY_SEARCH_CLEAR))
    expect(screen.getByLabelText(strings.CITY_SEARCH)).toHaveValue('')
  })
})
