import classNames from 'classnames'
import debounce from 'lodash.debounce'
import React, { useEffect, useState } from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import { City } from 'ts-open-weather-map'
import { strings } from '../../constants/strings'
import { useLocationContext } from '../../contexts/Location'
import { Location } from '../../types/location'
import { api } from '../../utils/weatherApi'

// ToDo: Surface errors to UI
const fetchSuggestions = debounce(
  (search: string, setSuggestions: React.Dispatch<React.SetStateAction<City[]>>) =>
    api
      .geoCoding(search, 5)
      .then((results) => setSuggestions(results))
      .catch(),
  500,
)

const LocationSelector: React.FC = () => {
  const [suggestions, setSuggestions] = useState<City[]>([])
  const [query, setQuery] = useState<string>('')
  const { userLocation, setSelectedLocation } = useLocationContext()

  useEffect(() => {
    if (!query || query.length < 3) {
      setSuggestions([])
      return
    }
    fetchSuggestions(query, setSuggestions)
  }, [query])

  const onLocationClicked = (location: Location) => {
    setSelectedLocation(location)
    setQuery('')
  }

  return (
    <div className="flex flex-row">
      {!!userLocation && (
        <button
          type="button"
          className="mr-1"
          aria-label={strings.CURRENT_LOCATION_BUTTON}
          onClick={() => setSelectedLocation(userLocation)}
        >
          <BiCurrentLocation className="h-6 w-6" />
        </button>
      )}
      <div className="relative w-60">
        <input
          className="border border-gray-300 rounded-md w-full px-2 py-1 relative z-10"
          type="text"
          value={query}
          placeholder={strings.LOCATION_SEARCH}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />

        <ul
          className={classNames(
            'absolute border p-2 border-t-0 -mt-1 pt-3 rounded-b-md w-full bg-white',
            { hidden: suggestions.length === 0 },
          )}
        >
          {suggestions.map((location) => (
            <li key={`${location.name}${location.lat}${location.lon}`}>
              <button
                type="button"
                className="hover:underline"
                onClick={() => onLocationClicked(location)}
              >
                {location.name}
                {location.state ? `, ${location.state}` : ''}
                {location.country ? `, ${location.country}` : ''}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LocationSelector
