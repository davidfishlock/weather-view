import classNames from 'classnames'
import debounce from 'lodash.debounce'
import React, { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { BiCurrentLocation } from 'react-icons/bi'
import { FiX } from 'react-icons/fi'
import { City } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { useLocationContext } from '../../../contexts/Location'
import { getFullLocationName, Location } from '../../../types/location'
import { api } from '../../../utils/weatherApi'

const fetchSuggestions = debounce(
  (
    search: string,
    setSuggestions: React.Dispatch<React.SetStateAction<City[]>>,
    setError: React.Dispatch<React.SetStateAction<Error | undefined>>,
  ) =>
    api
      .geoCoding(search, 5)
      .then((results) => {
        setSuggestions(results)
        setError(undefined)
      })
      .catch((error) => {
        setSuggestions([])
        setError(error)
      }),
  500,
)

const LocationSelector: React.FC = () => {
  const [suggestions, setSuggestions] = useState<City[]>([])
  const [query, setQuery] = useState<string>('')
  const [error, setError] = useState<Error>()
  const { userLocation, setSelectedLocation } = useLocationContext()

  const clear = () => {
    setQuery('')
  }

  useHotkeys(
    'Escape',
    clear,
    {
      enableOnFormTags: ['INPUT'],
    },
    [clear],
  )

  useEffect(() => {
    if (!query || query.length < 3) {
      setSuggestions([])
      fetchSuggestions.cancel()
      setError(undefined)
      return
    }

    fetchSuggestions(query, setSuggestions, setError)
  }, [query])

  const onLocationClicked = (location: Location) => {
    setSelectedLocation(location)
    clear()
  }

  return (
    <div className="flex flex-row">
      {!!userLocation && (
        <button
          type="button"
          className="button-subtle mr-0.5 p-1"
          aria-label={strings.CURRENT_LOCATION_BUTTON}
          onClick={() => setSelectedLocation(userLocation)}
        >
          <BiCurrentLocation className="h-6 w-6 text-white" />
        </button>
      )}
      <div className="relative w-60">
        <div className="relative z-10">
          <input
            className="input-text w-full"
            type="text"
            value={query}
            aria-label={strings.CITY_SEARCH}
            placeholder={strings.CITY_SEARCH}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />

          {!!query && (
            <button
              className="button-subtle absolute right-0 top-0 bottom-0 m-1"
              type="button"
              onClick={clear}
              aria-label={strings.CITY_SEARCH_CLEAR}
            >
              <FiX className="h-4 w-4" />
            </button>
          )}
        </div>

        <ul
          className={classNames(
            'default-background bg-opacity-90 default-border absolute border p-2 border-t-0 -mt-1 pt-3 rounded-b-md w-full',
            { hidden: suggestions.length === 0 && !error },
          )}
        >
          {!!error && <p className="error text-sm">{strings.CITY_SEARCH_ERROR}</p>}
          {suggestions.map((location) => (
            <li key={`${location.name}${location.lat}${location.lon}`}>
              <button
                type="button"
                className="hover:underline py-1 w-full text-left"
                onClick={() => onLocationClicked(location)}
              >
                {getFullLocationName(location)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LocationSelector
