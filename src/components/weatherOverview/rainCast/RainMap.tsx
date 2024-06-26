import classNames from 'classnames'
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Location } from '../../../types/location'

type Props = {
  location: Location
  className: string
}

const STREET_MAP_TILES_PATH = `https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=${
  import.meta.env.VITE_MAP_TILES_KEY
}`
const RAIN_MAP_TILES_PATH = `https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=${
  import.meta.env.VITE_WEATHER_API_KEY
}`

const RainMap: React.FC<Props> = ({ location, className }) => (
  <MapContainer
    className={classNames([className])}
    center={[location.lat, location.lon]}
    zoom={7}
    attributionControl={false}
    scrollWheelZoom={false}
    zoomControl={false}
    keyboard={false}
    touchZoom={false}
    doubleClickZoom={false}
    dragging={false}
  >
    <TileLayer url={STREET_MAP_TILES_PATH} />
    <TileLayer url={RAIN_MAP_TILES_PATH} />
  </MapContainer>
)

export default RainMap
