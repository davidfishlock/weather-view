import { getFullLocationName } from '../../../types/location'
import React, { useRef } from 'react'
import { City } from 'ts-open-weather-map'

type Props = { id: string; city: City; onSelected: (city: City) => void; isFocused: boolean }

const CityItem: React.FC<Props> = ({ id, city, isFocused, onSelected }) => {
  const itemRef = useRef<HTMLLIElement>(null)

  return (
    <li
      aria-selected={isFocused}
      id={id}
      role="option"
      className="aria-selected:bg-blue-600 hover:bg-blue-600 hover:cursor-pointer py-1 px-2 w-full text-left"
      ref={itemRef}
      key={`${city.name}${city.lat}${city.lon}`}
      onClick={() => onSelected(city)}
    >
      {getFullLocationName(city)}
    </li>
  )
}

export default CityItem
