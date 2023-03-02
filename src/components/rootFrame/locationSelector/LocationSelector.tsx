import classNames from 'classnames'
import debounce from 'lodash.debounce'
import React, { useEffect, useRef, useState } from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import { FiX } from 'react-icons/fi'
import { City } from 'ts-open-weather-map'
import { strings } from '../../../constants/strings'
import { useLocationContext } from '../../../contexts/Location'
import { Location } from '../../../types/location'
import { api } from '../../../utils/weatherApi'
import CityItem from './CityItem'
import useRovingSelection from '../../../hooks/useRovingSelection'
import { useElementKeyDown } from '../../../hooks/useKeyDown'

const fetchSuggestions = debounce(
  (
    search: string,
    setSuggestions: (cities: City[]) => void,
    setError: (error: Error | undefined) => void,
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
  const inputRef = useRef<HTMLInputElement>(null)
  const [suggestions, setSuggestions] = useState<City[]>([])
  const [query, setQuery] = useState<string>('')
  const [error, setError] = useState<Error>()

  const { userLocation, setSelectedLocation } = useLocationContext()
  const { selectedIndex, setSelectedIndex } = useRovingSelection(
    inputRef.current,
    suggestions.length,
  )

  const clearQuery = () => {
    setQuery('')
    setSelectedIndex(undefined)
  }

  const onLocationSelected = (location: Location) => {
    setSelectedLocation(location)
    clearQuery()
  }

  const onSuggestionsUpdated = (cities: City[]) => {
    setSuggestions(cities)
    setSelectedIndex(undefined)
  }

  const onSuggestionsErrorUpdated = (error: Error | undefined) => {
    setSelectedIndex(undefined)
    setError(error)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      clearQuery()
      return
    }

    if (
      (e.key === 'Enter' || e.key === 'Space') &&
      selectedIndex !== undefined &&
      suggestions.length > selectedIndex
    ) {
      onLocationSelected(suggestions[selectedIndex])
      return
    }
  }

  useEffect(() => {
    if (!query || query.length < 3) {
      setSuggestions([])
      fetchSuggestions.cancel()
      setError(undefined)
      return
    }

    fetchSuggestions(query, onSuggestionsUpdated, onSuggestionsErrorUpdated)
  }, [query])

  useElementKeyDown(inputRef.current, onKeyDown)

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
            ref={inputRef}
            className="input-text w-full"
            type="text"
            value={query}
            aria-label={strings.CITY_SEARCH}
            placeholder={strings.CITY_SEARCH}
            role="combobox"
            aria-expanded={!!suggestions.length}
            aria-autocomplete="list"
            aria-controls="suggestions-listbox"
            aria-activedescendant={
              selectedIndex !== undefined ? `city-option-${selectedIndex}` : undefined
            }
            onChange={(e) => setQuery(e.currentTarget.value)}
          />

          {!!query && (
            <button
              className="button-subtle absolute right-0 top-0 bottom-0 m-1"
              type="button"
              onClick={clearQuery}
              aria-label={strings.CITY_SEARCH_CLEAR}
            >
              <FiX className="h-4 w-4" />
            </button>
          )}
        </div>

        <ul
          id="suggestions-listbox"
          role="listbox"
          aria-label="Suggestions"
          className={classNames(
            'default-background bg-opacity-90 default-border absolute border border-t-0 -mt-1 pt-3 rounded-b-md w-full overflow-hidden',
            { hidden: suggestions.length === 0 && !error },
          )}
        >
          {!!error && <p className="error text-sm">{strings.CITY_SEARCH_ERROR}</p>}
          {suggestions.map((city, index) => (
            <CityItem
              id={`city-option-${index}`}
              key={`city-option-${index}`}
              city={city}
              isFocused={selectedIndex === index}
              onSelected={onLocationSelected}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LocationSelector
